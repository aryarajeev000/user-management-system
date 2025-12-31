# User Management System

## Project Overview
This project is a full-stack **User Management System** built as part of the **Backend Developer Intern Assessment**.  
It provides secure authentication, role-based access control, admin-level user management, and a clean frontend interface.

The system focuses on **security, correctness, and scalability**, with a minimal yet professional UI.

## Deployed Link

### Backend
https://user-management-system-it6g.onrender.com
### Frontend
user-management-system-moeu.vercel.app

### admin user
admin@gmail.com
Admin@1234
### user
user@gmail.com
User@1234
---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (HTTP-only cookies)
- bcrypt (password hashing)
- Joi / Zod (input validation)

### Frontend
- React (Vite)
- React Router DOM
- Axios
- Context API
- Plain CSS (custom fintech aqua theme)

---

## Backend Features

### Authentication
- User signup with **full name, email, and password**
- Email format validation
- Strong password validation
- Password hashing using bcrypt
- JWT authentication token on signup
- User login with email and password
- Credential verification
- JWT authentication token on login
- Get current logged-in user information
- Secure logout functionality (cookie cleared)

### User Management – Admin
- View all users
- Pagination support (10 users per page)
- Activate user accounts
- Deactivate user accounts
- Admin-only protected routes

### User Management – User
- View own profile
- Update full name and email
- Change password (old password verification required)

### Security
- Password hashing using bcrypt
- Protected routes using authentication middleware
- Role-based access control (admin / user)
- Input validation on all endpoints
- Proper HTTP status codes
- Environment variables for sensitive data (JWT secret)
- Cookie-based authentication (HTTP-only)

---

## Frontend Features

### Login Page
- Email and password input fields
- Client-side form validation
- Error message display
- Redirect to dashboard on success
- Link to signup page

### Signup Page
- Full name, email, password inputs
- Required field validation
- Email format validation
- Password strength validation
- Server-side error handling
- Redirect to login on success

### User Profile Page
- Display user information
- Edit full name and email
- Save and cancel actions
- Change password section
- Success and error messages
- Admin-specific section (for admin users)

### Admin Dashboard
- Table displaying all users
- Columns: email, full name, role, status, actions
- Pagination (10 users per page)
- Activate / deactivate user actions
- Confirmation dialog before status change
- Clean, structured UI

### Navigation Bar
- Display logged-in user name
- Display user role
- Role-based navigation links
- Logout button
- Redirect to login after logout

### Protected Routes
- Prevent unauthenticated access
- Admin-only pages restricted to admins
- Automatic redirection for unauthorized users

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
