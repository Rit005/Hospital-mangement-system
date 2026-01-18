# 🏥 Hospital Management System

A full-stack **Hospital Management System** built using **React, Node.js, Express, and MongoDB**.  
This project allows users to book appointments, send messages, and enables admins to manage doctors, appointments, and patients efficiently.

---

## 🚀 Live Demo

- **Frontend (Vercel)**  
  👉 https://hospital-management-blond-eta.vercel.app

- **Backend (Render)**  
  👉 https://hospital-mangement-system-58iq.onrender.com

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Axios
- Context API
- React Toastify
- CSS

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT Authentication
- Cookie-based Auth
- Cloudinary (Image Upload)
- Express File Upload

### Deployment
- **Frontend**: Vercel
- **Backend**: Render
- **Database**: MongoDB Atlas

---

## ✨ Features

### 👨‍⚕️ Patient Features
- Book hospital appointments
- Send messages to hospital
- View departments and doctors
- Responsive UI

### 🔐 Authentication
- JWT-based authentication
- Secure cookies (`httpOnly`, `sameSite`, `secure`)
- Role-based access (Admin / Patient)

### 🧑‍💼 Admin Features
- Add new doctors
- View all appointments
- Update appointment status
- Delete appointments
- View messages

---

## 📂 Project Structure

Hospital-Management-System/
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── routes/
│ │ ├── axios.js
│ │ ├── App.jsx
│ │ └── main.jsx
│
├── backend/
│ ├── controller/
│ ├── router/
│ ├── models/
│ ├── middlewares/
│ ├── utils/
│ ├── app.js
│ └── server.js
│
└── README.md

🧪 Run Locally
1️⃣ Clone Repository
git clone https://github.com/your-username/hospital-management-system.git
cd hospital-management-system

2️⃣ Backend Setup
cd backend
npm install
npm run dev


Backend will run on:

http://localhost:4000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend will run on:

http://localhost:5173

