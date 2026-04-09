import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with Webpack/Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Helper to create emoji icons
const createEmojiIcon = (emoji) => {
    return L.divIcon({
        html: `<div style="font-size: 24px; display: flex; align-items: center; justify-content: center; transform: translate(-50%, -50%);">${emoji}</div>`,
        className: 'custom-emoji-icon',
        iconSize: [30, 30],
        iconAnchor: [0, 0]
    });
};

const ambulanceIcon = createEmojiIcon('🚑');
const carIcon = createEmojiIcon('🚗');

// Sample paths in New Delhi area
const paths = [
    // Ambulances (0-4)
    [[28.6139, 77.209], [28.62, 77.22], [28.63, 77.21], [28.64, 77.23]],
    [[28.60, 77.18], [28.61, 77.19], [28.62, 77.20], [28.63, 77.19]],
    [[28.64, 77.25], [28.63, 77.24], [28.62, 77.25], [28.61, 77.24]],
    [[28.58, 77.22], [28.59, 77.21], [28.60, 77.23], [28.61, 77.22]],
    [[28.65, 77.20], [28.64, 77.19], [28.63, 77.20], [28.62, 77.19]],
    // Private Cars (5-14)
    [[28.625, 77.215], [28.635, 77.225], [28.645, 77.215], [28.655, 77.225]],
    [[28.61, 77.21], [28.62, 77.20], [28.63, 77.21], [28.62, 77.22]],
    [[28.64, 77.18], [28.63, 77.17], [28.62, 77.18], [28.63, 77.19]],
    [[28.59, 77.24], [28.60, 77.25], [28.61, 77.24], [28.60, 77.23]],
    [[28.62, 77.24], [28.61, 77.23], [28.60, 77.24], [28.61, 77.25]],
    [[28.66, 77.21], [28.65, 77.22], [28.64, 77.21], [28.65, 77.20]],
    [[28.57, 77.21], [28.58, 77.20], [28.59, 77.21], [28.58, 77.22]],
    [[28.60, 77.27], [28.61, 77.28], [28.62, 77.27], [28.61, 77.26]],
    [[28.63, 77.15], [28.64, 77.14], [28.65, 77.15], [28.64, 77.16]],
    [[28.68, 77.22], [28.67, 77.23], [28.66, 77.22], [28.67, 77.21]]
];

const LiveMap = () => {
    const [positions, setPositions] = useState(paths.map(p => p[0]));
    const progressRefs = useRef(paths.map(() => Math.random())); // Randomize starting progress

    useEffect(() => {
        const animate = () => {
            setPositions(prev => {
                return prev.map((pos, i) => {
                    const path = paths[i];
                    progressRefs.current[i] += i >= 5 ? 0.001 : 0.002; // Private cars move slower

                    if (progressRefs.current[i] >= path.length - 1) {
                        progressRefs.current[i] = 0; // Loop back
                    }

                    const index = Math.floor(progressRefs.current[i]);
                    const frac = progressRefs.current[i] - index;

                    const start = path[index];
                    const end = path[index + 1] || path[0];

                    const lat = start[0] + (end[0] - start[0]) * frac;
                    const lng = start[1] + (end[1] - start[1]) * frac;

                    return [lat, lng];
                });
            });

            requestAnimationFrame(animate);
        };

        const animId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animId);
    }, []);

    return (
        <div className="h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 relative z-0">
            <MapContainer center={[28.6139, 77.209]} zoom={13} style={{ height: '100%', width: '100%' }} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Draw paths (optional, for visualization) */}
                {paths.map((path, i) => (
                    <Polyline 
                        key={`path-${i}`} 
                        positions={path} 
                        color={i >= 5 ? "#94a3b8" : "#ef4444"} 
                        weight={2} 
                        opacity={0.1} 
                        dashArray="5, 10" 
                    />
                ))}

                {positions.map((pos, i) => (
                    <Marker
                        key={`marker-${i}`}
                        position={pos}
                        icon={i >= 5 ? carIcon : ambulanceIcon}
                    >
                        <Popup>
                            <div className="font-bold">
                                {i >= 5 ? `Private Vehicle ${i - 4}` : `Ambulance RL-${100 + i}`}
                            </div>
                            <div className="text-xs text-slate-500">
                                {i >= 5 ? "Receiving Alert..." : "Emergency Status: Active"}
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default LiveMap;
