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
