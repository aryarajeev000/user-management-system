# Mini User Management System

## Project Overview
This project is a full-stack User Management System designed to handle user authentication, role-based authorization, and user lifecycle management.  
It supports secure login/signup, profile management, and admin-level user controls using a clean and scalable architecture.

---
Deployed Link :
Backend :- https://user-management-system-it6g.onrender.com
Frontend :- 
## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (HTTP-only cookies)
- bcrypt
- Joi (validation)

### Frontend
- React (Vite)
- React Router DOM
- Axios
- Context API
- Global CSS (style.css)

### Deployment
- Backend: Render / Railway
- Frontend: Vercel / Netlify
- Database: MongoDB Atlas

---

## Features

### Authentication
- User signup with full name, email, and password
- Email format validation using Joi
- Strong password validation using Joi
- Password hashing using bcrypt
- User login with email and password
- JWT authentication using HTTP-only cookies
- User logout by clearing authentication cookie

### User Management (User)
- View own profile information
- Update full name and email
- Access protected routes after authentication

### User Management (Admin)
- View all users with pagination
- Activate user accounts
- Deactivate user accounts
- Admin-only protected routes

### Security
- HTTP-only cookie-based JWT authentication
- Role-Based Access Control (RBAC)
- Input validation on all endpoints
- Environment variable based configuration
- Global fallback error handling

---

## Folder Structure

### Root Structure
root/
├── backend/
├── frontend/
└── README.md

### Backend Structure
backend/
├── src/
│ ├── config/
│ ├── controllers/
│ ├── middlewares/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ ├── app.js
│ └── server.js
├── .env
└── package.json


### Frontend Structure
frontend/
├── src/
│ ├── api/
│ ├── components/
│ ├── context/
│ ├── pages/
│ ├── style.css
│ ├── App.jsx
│ └── main.jsx
└── package.json


---

## Environment Variables

### Backend Environment Variables
Create a `.env` file inside the backend directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development

Frontend Environment Variables

No environment variables are required for local frontend setup.

### Backend Setup
Install Dependencies
cd backend
npm install

Run Server
npm run dev

Backend URL
http://localhost:5000

### Frontend Setup
Install Dependencies
cd frontend
npm install

Run Frontend
npm run dev

Frontend URL
http://localhost:5173

### API Endpoints
Authentication APIs
Signup
POST /api/auth/signup


Request Body:

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "Strong@123"
}

Login
POST /api/auth/login


Request Body:

{
  "email": "john@example.com",
  "password": "Strong@123"
}

Logout
POST /api/auth/logout

User APIs
Get Current User
GET /api/user/me

Update User Profile
PUT /api/user/me

Admin APIs
Get All Users
GET /api/admin/users?page=1

Activate / Deactivate User
PATCH /api/admin/users/:id/status

## Authentication Flow
Step 1

User signs up or logs in.

Step 2

Backend generates JWT and stores it in an HTTP-only cookie.

Step 3

Browser automatically sends cookie with each request.

Step 4

Protected routes validate JWT from cookie.

Step 5

Logout clears the authentication cookie.

Testing
API Testing

APIs tested using Postman / Thunder Client

Validation errors tested for invalid email and weak passwords

Role-based access verified for admin routes

## Deployment
### Backend Deployment

Hosted on Render 
Environment variables configured in deployment dashboard
CORS configured to allow frontend origin with credentials

### Frontend Deployment

Hosted on Vercel
Backend base URL configured accordingly

Rajeev Sutrakar
Backend Developer
December 2025
