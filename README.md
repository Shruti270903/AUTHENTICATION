# 🔐 Full Stack Authentication System (MERN)

A complete authentication system built using **MERN stack** with secure **JWT cookies**, **email verification (OTP)**, and **password reset** functionality.

This project includes both **frontend (React + Vite)** and **backend (Node.js + Express + MongoDB)**.

---

## 🚀 Features

### ✅ Authentication

- User Registration
- User Login
- Logout
- JWT-based authentication using **HttpOnly cookies**

### 📧 Email Verification

- OTP sent to email after registration
- Verify account using OTP
- Prevent re-verification of already verified users

### 🔑 Password Management

- Forgot password (OTP based)
- Reset password securely
- OTP expiration handling

### 🛡️ Security

- Password hashing using **bcrypt**
- JWT stored in **HttpOnly cookies**
- Protected routes with authentication middleware
- `.env` files excluded from GitHub

---

## 🧰 Tech Stack

### Frontend

- React (Vite)
- Axios
- React Router
- Tailwind CSS
- React Toastify

### Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- Nodemailer

---

## 📂 Project Structure
AUTHENTICATION/
│
├── client/                         # Frontend (React + Vite)
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/                # Images, icons
│   │   ├── components/            # Navbar, protected components
│   │   ├── context/               # AppContext (auth state)
│   │   ├── pages/                 # Login, Register, EmailVerify, etc.
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env.example               # ✅ Frontend env example
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── server/                         # Backend (Node + Express)
│   │
│   ├── controllers/
│   │   └── authController.js       # Auth logic (register, login, OTP, etc.)
│   │
│   ├── middleware/
│   │   └── userAuth.js             # JWT auth middleware
│   │
│   ├── routes/
│   │   └── authRoutes.js            # Auth API routes
│   │
│   ├── models/
│   │   └── userModel.js             # User schema
│   │
│   ├── config/
│   │   ├── nodeMailer.js            # Email config
│   │   └── emailTemplates.js        # Email templates
│   │
│   ├── .env.example                # ✅ Backend env example
│   ├── server.js                   # App entry point
│   └── package.json
│
├── .gitignore                      # Ignores env, node_modules, etc.
├── README.md                       # ✅ Project documentation
└── package-lock.json (optional)
