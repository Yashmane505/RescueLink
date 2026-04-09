# 📚 RescueLink — Complete Study Guide for Project Explanation

> **Purpose**: All topics you need to study to confidently explain your RescueLink project in a viva/exam, focusing on **technology** and **features**.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Architecture & System Design](#2-architecture--system-design)
3. [Frontend Technology Stack](#3-frontend-technology-stack)
4. [Backend Technology Stack](#4-backend-technology-stack)
5. [Database (MongoDB + Mongoose)](#5-database-mongodb--mongoose)
6. [Authentication & Security](#6-authentication--security)
7. [React Core Concepts Used](#7-react-core-concepts-used)
8. [Routing & Navigation](#8-routing--navigation)
9. [State Management](#9-state-management)
10. [API Integration (Frontend ↔ Backend)](#10-api-integration-frontend--backend)
11. [Real-Time Live Map (Leaflet)](#11-real-time-live-map-leaflet)
12. [Admin Panel](#12-admin-panel)
13. [E-Commerce / Order System](#13-e-commerce--order-system)
14. [UI/UX & Styling (Tailwind CSS)](#14-uiux--styling-tailwind-css)
15. [Deployment (Vercel)](#15-deployment-vercel)
16. [Project Features Summary](#16-project-features-summary)
17. [Potential Viva Questions & Answers](#17-potential-viva-questions--answers)

---

## 1. Project Overview

| Item | Detail |
|------|--------|
| **Project Name** | RescueLink |
| **Domain** | Emergency Vehicle Alert & Traffic Management System |
| **Problem Statement** | Ambulances lose critical time in traffic because private vehicles cannot detect their approach early enough. |
| **Solution** | A web-based platform that connects ambulances and private vehicles in real-time, providing siren detection alerts, live map tracking, and route clearance coordination. |
| **User Types** | Private Car Drivers, Ambulance Operators, Admin |
| **Architecture** | Full-Stack MERN (MongoDB, Express, React, Node.js) |

### Key Points to Explain:
- RescueLink bridges the gap between emergency vehicles and civilian traffic.
- It uses **acoustic AI & siren fingerprinting** (conceptual) to detect emergency sirens.
- Private car users receive real-time alerts; ambulance operators manage their fleet.
- The system includes device ordering, training certification, and an admin dashboard.

---

## 2. Architecture & System Design

### Study: Client-Server Architecture

```
┌─────────────────┐         ┌──────────────────┐         ┌────────────────┐
│   FRONTEND      │  HTTP   │    BACKEND       │  TCP    │   DATABASE     │
│   (React/Vite)  │ ◄─────► │ (Node/Express)   │ ◄─────► │  (MongoDB      │
│   Port: 5173    │  REST   │   Port: 5000     │ Mongoose│   Atlas)       │
└─────────────────┘   API   └──────────────────┘         └────────────────┘
```

### Backend MVC Pattern
```
backend/
├── server.js                   ← Entry point
├── src/
│   ├── config/db.js            ← Database connection (Model layer config)
│   ├── models/                 ← MODEL: Mongoose schemas
│   │   ├── User.js
│   │   └── Order.js
│   ├── controllers/            ← CONTROLLER: Business logic
│   │   ├── authController.js
│   │   ├── orderController.js
│   │   └── adminController.js
│   ├── routes/                 ← ROUTES: URL → Controller mapping
│   │   ├── authRoutes.js
│   │   ├── orderRoutes.js
│   │   └── adminRoutes.js
│   ├── middleware/             ← Middleware: JWT auth gatekeeper
│   │   └── authMiddleware.js
│   └── utils/
│       └── generateToken.js    ← JWT token generator
```

### Topics to Study:
- **What is Client-Server architecture?** — The frontend (client) sends HTTP requests; the backend (server) processes them and responds with JSON data.
- **What is MVC?** — Model-View-Controller. Model = data structure (Mongoose schemas), View = React frontend, Controller = business logic (Express handlers).
- **What is REST API?** — Representational State Transfer. It uses standard HTTP methods (GET, POST, PUT, DELETE) for CRUD operations.
- **What is a Monorepo?** — Both frontend and backend live in one Git repository, managed via npm workspaces.

---

## 3. Frontend Technology Stack

### 3.1 React.js (v19)
> **What**: A JavaScript library for building user interfaces using components.

| Concept | Explanation | Where in Code |
|---------|-------------|---------------|
| **Components** | Reusable, self-contained UI blocks | Every `.jsx` file (Navbar, Hero, Footer, etc.) |
| **JSX** | HTML-like syntax inside JavaScript | All component `return()` blocks |
| **Virtual DOM** | React's in-memory representation of real DOM for efficient updates | Automatic — React handles this internally |
| **Props** | Data passed from parent to child components | `StatCard` in AdminPage receives `icon, label, value, color` |
| **Conditional Rendering** | Show/hide UI based on conditions | `{user ? <Dashboard/> : <Login/>}` in Navbar |

### 3.2 Vite (v7)
> **What**: A modern, lightning-fast build tool and dev server for React.

| Feature | Detail |
|---------|--------|
| **HMR** (Hot Module Replacement) | Instant UI updates during development without full reload |
| **ES Module** based | Uses native browser ES modules for faster startup |
| **Build** | `vite build` creates optimized production bundle in `dist/` |
| **Why over CRA?** | 10-100x faster than Create-React-App |

### 3.3 Tailwind CSS (v4)
> **What**: A utility-first CSS framework where you style using class names directly in HTML.

```jsx
// Example from your code:
<button className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-black shadow-xl">
  Get Started
</button>
```

| Concept | Example | Meaning |
|---------|---------|---------|
| Utility classes | `px-6 py-2.5` | Padding: 1.5rem horizontal, 0.625rem vertical |
| Responsive | `md:flex-row` | Apply `flex-row` on medium screens and above |
| Hover states | `hover:bg-slate-200` | Change background on hover |
| Animations | `animate-spin`, `animate-ping` | CSS animation utilities |
| Custom colors | `bg-primary`, `text-primary` | Custom-defined brand colors |

### 3.4 Leaflet + React-Leaflet
> **What**: Open-source JavaScript library for interactive maps.

- **Used in**: `LiveMap.jsx` — Real-time ambulance and vehicle tracking
- **Components**: `MapContainer`, `TileLayer`, `Marker`, `Popup`, `Polyline`
- **Tile Provider**: OpenStreetMap

---

## 4. Backend Technology Stack

### 4.1 Node.js
> **What**: A JavaScript runtime that lets you run JavaScript on the server.

| Concept | Detail |
|---------|--------|
| **Event-driven** | Non-blocking I/O, handles many concurrent connections |
| **npm** | Node Package Manager — installs dependencies |
| **CommonJS** | `const x = require('x')` module system (used in backend) |
| **ES Modules** | `import x from 'x'` module system (used in frontend) |

### 4.2 Express.js (v5)
> **What**: Minimal web application framework for Node.js.

```javascript
// From server.js:
const app = express();
app.use(cors());                          // Middleware
app.use(bodyParser.json());               // Parse JSON bodies
app.use('/api/auth', authRoutes);         // Route mounting
app.listen(5000);                         // Start server
```

| Concept | Explanation |
|---------|-------------|
| **Middleware** | Functions that run between request and response (`cors`, `bodyParser`, `authMiddleware`) |
| **Routing** | Maps URL paths to handler functions (`/api/auth/register` → `registerUser`) |
| **Error Handling** | Global error handler catches unhandled errors |
| **CORS** | Cross-Origin Resource Sharing — allows frontend to call backend API |

### 4.3 Key Backend Packages

| Package | Purpose | Where Used |
|---------|---------|------------|
| `express` | Web server framework | `server.js` |
| `mongoose` | MongoDB ODM (Object Document Mapper) | `models/User.js`, `models/Order.js` |
| `bcryptjs` | Password hashing | `models/User.js` (pre-save hook) |
| `jsonwebtoken` | JWT token creation & verification | `utils/generateToken.js`, `authMiddleware.js` |
| `cors` | Cross-origin request handling | `server.js` |
| `body-parser` | Parse incoming request bodies | `server.js` |
| `dotenv` | Load environment variables from `.env` | `server.js` |
| `nodemon` | Auto-restart server on file changes (dev only) | `package.json` dev script |
| `concurrently` | Run frontend + backend simultaneously | Root `package.json` |

---

## 5. Database (MongoDB + Mongoose)

### 5.1 MongoDB
> **What**: A NoSQL document database that stores data in flexible, JSON-like documents.

| Concept | Explanation |
|---------|-------------|
| **Document** | A single record (like a row in SQL), stored as BSON (Binary JSON) |
| **Collection** | A group of documents (like a table in SQL) |
| **NoSQL** | No fixed schema — documents in a collection can have different fields |
| **MongoDB Atlas** | Cloud-hosted MongoDB service (used for production) |

### 5.2 Mongoose Schemas

#### User Schema (`models/User.js`)
```javascript
const userSchema = new mongoose.Schema({
    userType:       { type: String, enum: ['car', 'ambulance'] },
    name:           { type: String, required: true, minlength: 3 },
    email:          { type: String, required: true, unique: true },
    phone:          { type: String, match: /^\d{10}$/ },
    vehicleNumber:  { type: String, required: true },
    hospitalName:   { type: String, required: function() { return this.userType === 'ambulance'; }},
    licenseNumber:  { type: String, required: function() { return this.userType === 'ambulance'; }},
    password:       { type: String, required: true, minlength: 6 }
}, { timestamps: true });
```

#### Order Schema (`models/Order.js`)
```javascript
const orderSchema = new mongoose.Schema({
    user:           { type: ObjectId, ref: 'User' },  // Reference to User
    item:           String,
    amount:         Number,
    address:        String,
    city:           String,
    pincode:        String,
    paymentMethod:  { type: String, default: 'Card' },
    status:         { type: String, default: 'Processing' }
}, { timestamps: true });
```

### Key Mongoose Concepts to Study:

| Concept | Explanation | Where Used |
|---------|-------------|------------|
| **Schema** | Defines the structure/shape of documents | `User.js`, `Order.js` |
| **Model** | A compiled schema — used to create/read/update/delete documents | `mongoose.model('User', userSchema)` |
| **Validation** | Built-in validators: `required`, `minlength`, `enum`, `match` (regex) | User schema fields |
| **Conditional Required** | `required: function() { return this.userType === 'ambulance'; }` | `hospitalName`, `licenseNumber` |
| **Pre-save Hook** | Middleware that runs before saving a document (used for password hashing) | `userSchema.pre('save', ...)` |
| **Instance Methods** | Custom methods on document instances | `userSchema.methods.matchPassword` |
| **Timestamps** | Auto-adds `createdAt` and `updatedAt` fields | Both schemas |
| **ObjectId Reference** | Links one collection to another (like foreign key in SQL) | `Order.user → User._id` |
| **Population** | Replacing ObjectId with actual document data from referenced collection | Admin controller (`Order.find().populate('user')`) |

---

## 6. Authentication & Security

### 6.1 JWT (JSON Web Token)

```
User Login → Server validates credentials → Server creates JWT → Sends to client
Client stores JWT → Sends JWT in every request header → Server verifies JWT
```

**Token Generation** (`utils/generateToken.js`):
```javascript
const jwt = require('jsonwebtoken');
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};
```

**Token Verification** (`middleware/authMiddleware.js`):
```javascript
const token = req.headers.authorization.split(' ')[1];    // Extract from "Bearer <token>"
const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify & decode
req.user = await User.findById(decoded.id);                // Attach user to request
```

| Concept | Detail |
|---------|--------|
| **JWT Structure** | Header.Payload.Signature (Base64 encoded) |
| **Payload** | Contains user ID (`{ id: user._id }`) |
| **Expiry** | Token expires in 30 days (`expiresIn: '30d'`) |
| **Bearer Token** | Sent as `Authorization: Bearer <token>` header |
| **Stateless** | Server doesn't store sessions; token itself contains all needed info |

### 6.2 Password Hashing (bcryptjs)

```javascript
// Before saving to DB (pre-save hook):
const salt = await bcrypt.genSalt(10);              // Generate random salt
this.password = await bcrypt.hash(this.password, salt); // Hash password

// During login:
await bcrypt.compare(enteredPassword, hashedPassword);  // Compare
```

| Concept | Detail |
|---------|--------|
| **Salt** | Random string added to password before hashing to prevent rainbow table attacks |
| **Salt Rounds (10)** | Number of hashing iterations — higher = more secure but slower |
| **One-way hash** | Cannot reverse hash back to original password |
| **compare()** | Hashes entered password with same salt and compares results |

### 6.3 Environment Variables (.env)
```
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your_secret_key
PORT=5000
```
- `.env` file stores sensitive configuration
- `dotenv` package loads these into `process.env`
- **NEVER commit `.env` to Git** (listed in `.gitignore`)

---

## 7. React Core Concepts Used

### 7.1 React Hooks

| Hook | Purpose | Where Used |
|------|---------|------------|
| `useState` | Manage local component state | Every component — forms, toggles, data |
| `useEffect` | Side effects: API calls, subscriptions, DOM manipulation | `AuthContext` (load stored user), `Navbar` (scroll listener), `LiveMap` (animation) |
| `useContext` | Consume context values without prop drilling | `useAuth()` throughout the app |
| `useRef` | Persist mutable values without re-render | `LiveMap.jsx` (`progressRefs` for animation) |
| `useNavigate` | Programmatic navigation | `Navbar`, `Registration`, `Login`, `AdminPage` |
| `useLocation` | Access current URL info | `Registration` (reads `location.state.type`) |
| `useParams` | Read URL parameters | `DeviceDetails` (`:id`), `LegalPage` (`:doc`) |

### 7.2 Custom Hook: `useAuth()`
```javascript
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);  // Custom hook
```
- Wraps `useContext(AuthContext)` for clean import
- Returns: `{ user, login, register, logout, loading }`

### 7.3 Key Hook Patterns in Your Code

**useState for form handling:**
```javascript
const [formData, setFormData] = useState({ name: "", email: "", ... });
const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};
```

**useEffect for API calls:**
```javascript
useEffect(() => {
    const fetchData = async () => {
        const res = await fetch("/api/admin/all-data", { headers: {...} });
        const result = await res.json();
        setData(result);
    };
    fetchData();
}, [user, navigate]);  // Dependency array — re-run when these change
```

**useEffect for event listeners:**
```javascript
useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
}, []);
```

---

## 8. Routing & Navigation

### React Router DOM (v7)

**Setup** (`App.jsx`):
```jsx
<Router>
  <ScrollToTop />
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/register" element={<Registration />} />
    <Route path="/login" element={<Login />} />
    <Route path="/device/:id" element={<DeviceDetails />} />  {/* Dynamic route */}
    <Route path="/legal/:doc" element={<LegalPage />} />      {/* Dynamic route */}
    {/* ... 15+ routes total */}
  </Routes>
  <Footer />
</Router>
```

| Concept | Explanation | Example |
|---------|-------------|---------|
| `BrowserRouter` | Provides routing context using HTML5 History API | Wraps entire app |
| `Routes` / `Route` | Define URL → Component mapping | `path="/register"` → `<Registration />` |
| `Link` | Declarative navigation (replaces `<a>` tags) | Navbar menu items |
| `useNavigate()` | Programmatic navigation | `navigate("/login")` after logout |
| `useParams()` | Extract URL parameters | `/device/:id` → `{ id }` |
| `useLocation()` | Access current route's state/pathname | Registration reads `location.state.type` |
| Dynamic Routes | `:id` placeholder in URL | `/device/:id`, `/legal/:doc` |
| `ScrollToTop` | Custom component that scrolls to top on route change | Uses `useEffect` + `useLocation` |

### All Application Routes:

| Route | Component | Access |
|-------|-----------|--------|
| `/` | HomePage | Public |
| `/register` | Registration | Public |
| `/login` | Login | Public |
| `/device` | Device (listing) | Public |
| `/device/:id` | DeviceDetails | Public |
| `/buy/:id` | Checkout | Authenticated |
| `/my-orders` | MyOrders | Authenticated |
| `/dashboard` | Dashboard | Authenticated |
| `/admin` | AdminPage | Admin Only |
| `/technology` | Technology | Public |
| `/technology/cloud` | CloudNetwork | Public |
| `/statistics` | StatisticsPage | Public |
| `/case-studies` | CaseStudies | Public |
| `/safety` | SafetyPage | Public |
| `/safety/fleet` | FleetManagement | Public |
| `/safety/training` | Training | Public |
| `/pricing` | Pricing | Public |
| `/about` | AboutUs | Public |
| `/legal/:doc` | LegalPage | Public |
| `/search` | SearchResults | Public |

---

## 9. State Management

### 9.1 Context API (Global State)

```
                    ┌─ AuthProvider ─────────────────────────┐
                    │                                        │
                    │  State: { user, loading }              │
                    │  Methods: { login, register, logout }  │
                    │                                        │
        ┌───────────┼─────────────────┬──────────────┐       │
        ▼           ▼                 ▼              ▼       │
    Navbar      Registration       AdminPage     HomePage    │
  (useAuth)     (useAuth)         (useAuth)     (useAuth)    │
                    │                                        │
                    └────────────────────────────────────────┘
```

**Why Context API?**
- Avoids "prop drilling" (passing data through many levels of components)
- Global state accessible by any component via `useAuth()`
- Stores user data + token in `localStorage` for persistence across page refreshes

### 9.2 Local State (useState)
- Form inputs, search queries, active tabs, loading states, error messages
- Each component manages its own UI state independently

### 9.3 localStorage for Persistence
```javascript
localStorage.setItem("user", JSON.stringify(data));  // Save on login
const storedUser = localStorage.getItem("user");      // Load on app start
localStorage.removeItem("user");                       // Clear on logout
```

---

## 10. API Integration (Frontend ↔ Backend)

### REST API Endpoints

| Method | Endpoint | Purpose | Auth Required |
|--------|----------|---------|:---:|
| `POST` | `/api/auth/register` | Register new user | ❌ |
| `POST` | `/api/auth/login` | Login & get token | ❌ |
| `GET` | `/api/auth/profile` | Get user profile | ✅ |
| `POST` | `/api/orders` | Create new order | ✅ |
| `GET` | `/api/orders` | Get user's orders | ✅ |
| `DELETE` | `/api/orders/:id` | Delete an order | ✅ |
| `GET` | `/api/admin/all-data` | Get all users + orders | ✅ (Admin) |

### Fetch API Pattern Used:
```javascript
const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${user.token}`  // For protected routes
    },
    body: JSON.stringify({ email, password }),
});
const data = await response.json();
if (!response.ok) throw new Error(data.message);
```

### Key Concepts:
- **Fetch API**: Native browser API for HTTP requests (no Axios needed)
- **JSON.stringify**: Convert JS object to JSON string for request body
- **response.json()**: Parse JSON response body
- **Error handling**: Check `response.ok` and throw errors for non-2xx responses
- **Bearer Token**: Sent in `Authorization` header for authenticated requests

---

## 11. Real-Time Live Map (Leaflet)

### Technology: Leaflet + React-Leaflet

**File**: `LiveMap.jsx`

### How it works:
1. **15 vehicles** are defined with predefined paths (coordinates in New Delhi)
   - 5 Ambulances (indices 0-4) — move faster
   - 10 Private Cars (indices 5-14) — move slower
2. **`requestAnimationFrame`** creates smooth animation loop (~60fps)
3. Each vehicle **interpolates** between waypoints along its path
4. When a vehicle reaches the end of its path, it **loops back** to the start

### Key Components Used:

| Component | Purpose |
|-----------|---------|
| `MapContainer` | Wrapper component, sets center coordinates & zoom level |
| `TileLayer` | Renders the actual map tiles from OpenStreetMap |
| `Marker` | Displays vehicle icons (🚑 or 🚗) at current positions |
| `Popup` | Info window shown on marker click |
| `Polyline` | Draws vehicle route paths on the map |

### Custom Icons:
```javascript
const createEmojiIcon = (emoji) => {
    return L.divIcon({
        html: `<div style="font-size: 24px;">${emoji}</div>`,
        className: 'custom-emoji-icon',
        iconSize: [30, 30],
    });
};
```

### Animation Logic:
```javascript
useEffect(() => {
    const animate = () => {
        setPositions(prev => prev.map((pos, i) => {
            progressRefs.current[i] += i >= 5 ? 0.001 : 0.002;  // Speed
            // Linear interpolation between waypoints
            const lat = start[0] + (end[0] - start[0]) * frac;
            const lng = start[1] + (end[1] - start[1]) * frac;
            return [lat, lng];
        }));
        requestAnimationFrame(animate);  // Loop
    };
    const animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);  // Cleanup
}, []);
```

### Topics to Study:
- **Leaflet.js** — open-source map library
- **OpenStreetMap** — free, community-driven map tiles
- **requestAnimationFrame** — browser API for smooth animations (60fps)
- **Linear interpolation** — calculating positions between two points
- **useRef** — stores animation progress without causing re-renders

---

## 12. Admin Panel

### Features:
- **Access Control**: Only `yashmane6417@gmail.com` can access
- **Statistics Cards**: Total users, Ambulances, Cars, Total Revenue
- **Users Table**: Searchable list of all registered users
- **Orders Table**: Searchable list of all orders with revenue total
- **Real-time data**: Fetches from `/api/admin/all-data` endpoint

### Topics to Study:
- **Role-Based Access Control (RBAC)**: Checking email to grant admin access
- **Data Visualization**: Stat cards with computed values (`filter`, `reduce`)
- **Table Filtering**: Client-side search across multiple fields
- **Conditional Rendering**: Show different tabs (users vs orders)
- **Array Methods**: `.filter()`, `.reduce()`, `.map()` for data processing

---

## 13. E-Commerce / Order System

### User Flow:
```
Browse Devices → View Details → Checkout → Place Order → View My Orders → Delete Order
     /device      /device/:id    /buy/:id    POST /api/orders   /my-orders    DELETE /api/orders/:id
```

### Order Schema Design:
- **User reference**: `ObjectId` linking to the User who placed the order
- **Item tracking**: Device name, amount, address, city, pincode
- **Payment method**: Card (default)
- **Status tracking**: Processing → Delivered / Cancelled
- **Timestamps**: Automatic `createdAt` and `updatedAt`

### Topics to Study:
- **CRUD Operations**: Create (POST), Read (GET), Delete (DELETE)
- **Authorization**: Only the order owner can delete their order
- **Form validation**: Client-side (React) + Server-side (Express)
- **ObjectId references**: Linking orders to users in MongoDB

---

## 14. UI/UX & Styling (Tailwind CSS)

### Design System:

| Element | Approach |
|---------|----------|
| **Colors** | Custom `primary` (red), slate grays, status colors (green/yellow/red) |
| **Typography** | Font weights: `font-bold`, `font-black`; tracking: `tracking-tighter`, `tracking-widest` |
| **Border Radius** | Heavy rounding: `rounded-2xl`, `rounded-3xl`, `rounded-full`, `rounded-[3rem]` |
| **Shadows** | Layered shadows: `shadow-xl`, `shadow-2xl`, colored shadows: `shadow-primary/30` |
| **Animations** | `animate-spin` (loading), `animate-ping` (live indicator), `animate-pulse` (errors) |
| **Glassmorphism** | `glass` class: `backdrop-blur-xl`, semi-transparent backgrounds |
| **Responsive** | Mobile-first: `sm:`, `md:`, `lg:` breakpoint prefixes |
| **Dark States** | Hover effects: `hover:bg-slate-200`, `hover:-translate-y-1` |

### Responsive Design Patterns:
```jsx
// Mobile: stack vertically | Desktop: side by side
<div className="flex flex-col md:flex-row">

// Mobile: hidden | Desktop: visible
<div className="hidden lg:flex">

// Mobile: 2 columns | Desktop: 4 columns
<div className="grid grid-cols-2 lg:grid-cols-4">
```

### Mega Menu (Navbar):
- Desktop: Hover-activated dropdown with 3-column grid
- Mobile: Accordion-style expandable menu with hamburger toggle
- Uses `onMouseEnter`/`onMouseLeave` for desktop, `onClick` for mobile

---

## 15. Deployment (Vercel)

### Configuration (`vercel.json`):
```json
{
    "builds": [
        { "src": "api/index.js", "use": "@vercel/node" },         // Backend as serverless function
        { "src": "package.json", "use": "@vercel/static-build" }   // Frontend static build
    ],
    "rewrites": [
        { "source": "/api/(.*)", "destination": "/api/index.js" }, // API routes → backend
        { "source": "/(.*)", "destination": "/index.html" }        // All other → React SPA
    ]
}
```

### Topics to Study:
- **Vercel**: Serverless deployment platform
- **Serverless Functions**: Backend runs as stateless functions (cold-start)
- **Static Build**: Frontend compiled to static HTML/CSS/JS in `dist/`
- **URL Rewrites**: Route `/api/*` to backend, everything else to React's `index.html`
- **SPA Fallback**: All routes serve `index.html`; React Router handles client-side routing

---

## 16. Project Features Summary

| # | Feature | Technology Used |
|---|---------|----------------|
| 1 | **User Registration** (Car / Ambulance) | React forms, Express API, MongoDB, bcrypt |
| 2 | **User Login/Logout** | JWT authentication, localStorage, Context API |
| 3 | **Role-Based UI** | Conditional rendering based on `userType` and `email` |
| 4 | **Live Map with Vehicle Tracking** | Leaflet, React-Leaflet, requestAnimationFrame |
| 5 | **Ambulance-specific Dashboard** | Conditional rendering for `userType === 'ambulance'` |
| 6 | **Device Store & Checkout** | React Router params, Order API, form validation |
| 7 | **My Orders (View & Delete)** | Fetch API, JWT auth, CRUD operations |
| 8 | **Admin Panel** | Protected route, data tables, statistics, search/filter |
| 9 | **Mega Navigation Menu** | React state, hover/click events, responsive design |
| 10 | **Search with Auto-suggestions** | Array filtering, controlled inputs, animated dropdown |
| 11 | **Training & Certification** | Quiz system, certificate generation |
| 12 | **Fleet Management Dashboard** | Statistics, management UI |
| 13 | **Technology Showcase Pages** | Detection Engine, Cloud Network |
| 14 | **Case Studies & Statistics** | Data presentation, informational pages |
| 15 | **Pricing Plans** | Tiered pricing UI |
| 16 | **Legal Pages** (Privacy, Terms, Cookies) | Dynamic routing with `:doc` parameter |
| 17 | **Responsive Mobile Design** | Tailwind CSS responsive utilities |
| 18 | **Vercel Deployment** | Serverless backend + static frontend hosting |

---

## 17. Potential Viva Questions & Answers

### Architecture & Design
**Q: What is the architecture of your project?**
> A: RescueLink uses a MERN stack architecture — MongoDB for database, Express.js for the backend server, React for the frontend UI, and Node.js as the runtime. The frontend and backend communicate via REST APIs. The backend follows the MVC pattern with separate models, controllers, and routes.

**Q: Why did you choose MERN stack?**
> A: MERN provides a full JavaScript ecosystem — same language (JS) for frontend, backend, and database queries. React gives us fast, component-based UI; Express provides a lightweight server; MongoDB is flexible with schema-less documents perfect for varied user types (car vs ambulance); and Node.js handles concurrent connections efficiently.

**Q: What is the difference between SQL and NoSQL? Why MongoDB?**
> A: SQL databases (MySQL, PostgreSQL) use fixed schemas with tables and rows. NoSQL databases (MongoDB) use flexible documents (JSON-like). We chose MongoDB because our User schema has conditional fields (ambulance users need `hospitalName` and `licenseNumber` that car users don't), which is easier to handle with a flexible schema.

### Authentication
**Q: How does authentication work in your project?**
> A: We use JWT (JSON Web Tokens). When a user logs in, the server verifies their credentials, hashes the password comparison using bcrypt, and generates a JWT containing the user's ID. This token is sent to the client and stored in localStorage. For subsequent requests to protected routes, the token is sent in the `Authorization: Bearer <token>` header. The server middleware verifies the token before granting access.

**Q: Why hash passwords? Why not store them directly?**
> A: Storing plain-text passwords is a critical security vulnerability. If the database is breached, all user passwords would be exposed. bcrypt hashes passwords with a random salt, making them irreversible. Even if two users have the same password, their hashes will be different due to unique salts.

**Q: What is middleware in Express?**
> A: Middleware functions execute between receiving a request and sending a response. Our project uses: `cors()` to allow cross-origin requests, `bodyParser.json()` to parse JSON request bodies, and `authMiddleware` (protect) to verify JWT tokens for protected routes.

### React Concepts
**Q: What are React Hooks? Which ones did you use?**
> A: Hooks are functions that let you use state and lifecycle features in functional components. We used `useState` (local state), `useEffect` (side effects like API calls), `useContext` (global auth state via `useAuth()`), `useRef` (animation progress in LiveMap), `useNavigate` (programmatic routing), `useParams` (URL parameters), and `useLocation` (current route info).

**Q: What is the Context API and why did you use it?**
> A: Context API provides global state management without prop drilling. We created an `AuthContext` that stores user data, login/register/logout functions. Any component can access auth state via `useAuth()` hook, whether it's deeply nested in the component tree or not.

**Q: What is conditional rendering?**
> A: Showing or hiding components based on a condition. For example: if a user is logged in, we show their profile and logout button; if not, we show login/register buttons. We also show the Admin link only if the user's email matches the admin email.

### Map & Animation
**Q: How does the Live Map work?**
> A: We use Leaflet with React-Leaflet to render an OpenStreetMap-based map. 15 vehicles (5 ambulances + 10 cars) are placed on the map with predefined paths. Using `requestAnimationFrame`, we animate each vehicle along its path by interpolating coordinates at ~60fps. Ambulances move at 2x speed of private cars. When vehicles reach the end of their path, they loop back.

### Deployment
**Q: How is the project deployed?**
> A: On Vercel. The frontend is built into static files (`vite build` → `dist/`), and the backend runs as a serverless function. Vercel's URL rewrite rules route `/api/*` requests to the backend function and all other requests to `index.html` for React Router to handle client-side routing.

---

> [!TIP]
> **Study Strategy**: Focus on understanding the **why** behind each technology choice, not just the **what**. Examiners are impressed when you can justify your decisions and explain the alternatives you considered.
