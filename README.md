# MERN Stack Authentication Project

A modern, full-stack web application featuring a robust authentication system built with the MERN (MongoDB, Express, React, Node.js) stack. This project utilizes Tailwind CSS 4 for styling and Vite for a lightning-fast frontend development experience.

## 🚀 Features

- **Robust Authentication**: Secure sign-up and login functionality using JSON Web Tokens (JWT) and Bcrypt for password hashing.
- **Modern Frontend**: Built with React 19 and Vite for optimal performance and developer experience.
- **Styling**: Styled with Tailwind CSS 4, utilizing the latest utility-first CSS features.
- **RESTful API**: A clean and structured Express backend following best practices.
- **Database**: MongoDB integration via Mongoose for flexible and scalable data management.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Routing**: [React Router DOM](https://reactrouter.com/)

### Backend
- **Server**: [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **ODM**: [Mongoose](https://mongoosejs.com/)
- **Security**: [JWT](https://jwt.io/) & [BcryptJS](https://github.com/dcodeIO/bcrypt.js)
- **Development**: [Nodemon](https://nodemon.io/)

---

## 📂 Project Structure

```text
/
├── backend/            # Express server files
│   ├── src/
│   │   ├── config/     # Database and other configurations
│   │   ├── routes/     # API route definitions
│   │   └── controllers/# Business logic for routes
│   └── server.js       # Entry point for backend
├── my-app/             # React frontend files (Vite)
│   ├── public/         # Static assets
│   └── src/            # Components, pages, and logic
└── package.json        # Root dependencies (shared)
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.x or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local or Atlas instance)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd Project
   ```

2. **Install Backend Dependencies**:
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**:
   ```bash
   cd ../my-app
   npm install
   ```

### Environment Configuration

Create a `.env` file in the `backend/` directory and add the following:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

## 🏃 Running the Application

### Start Backend
In the `backend/` directory:
```bash
npm run dev
```
The server will start on `http://localhost:5000`.

### Start Frontend
In the `my-app/` directory:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

---

## 🛣️ API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/` | Health check (is API running?) |
| **POST** | `/api/auth/register` | User registration |
| **POST** | `/api/auth/login` | User login |

---

## 📝 License

This project is [ISC](https://opensource.org/licenses/ISC) licensed.
