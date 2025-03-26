Fullstack Task Manager Application (MERN)
Overview
The Task Manager is a full-stack web application designed to help teams and individuals manage their tasks efficiently. The platform supports authentication, task creation, task tracking, and user management, making collaboration seamless.
ADMIN FEATURES:
1. User Management:
    - Create admin accounts.
    - Add and manage team members.
2. Task Assignment:
    - Assign tasks to individual or multiple users.
    - Update task details and status.
3. Task Properties:
    - Label tasks as todo, in progress, or completed.
    - Assign priority levels (high, medium, normal, low).
    - Add and manage sub-tasks.
4. Asset Management:
    - Upload task assets, such as images.
5.User Account Control:
    - Disable or activate user accounts.
    - Permanently delete or trash tasks.

USER FEATURES:
1. Task Interaction:
    - Change task status (in progress or completed).
    - View detailed task information.
2. Communication:
    - Add comments or chat to task activities.

GENERAL FEATURES:
•	User Authentication (Signup/Login)
•	Task Management (Create, Update, Delete)
•	Task Status Tracking (Mark as Completed/In progress/Todo)
•	User Management (Add/Remove Members)
•	Responsive UI (Built with Tailwind CSS)
•	API Routes for task and user management

TECHNOLOGIES USED:
Frontend:
React (Vite)– Fast and modern React framework
Redux Toolkit for State Management - Simplifies managing the state
Headless UI – For flexible, accessible, and customizable UI elements
Tailwind CSS - Utility-first CSS framework for responsive design
Backend:
Node.js with Express.js - Backend framework for API handling
JWT Authentication – Secure authentication and authorization
POSTMAN API – Create and send API requests
Database:
MongoDB –For efficient and scalable data storage.

SETUP INSTRUCTIONS
Server Setup
Environment variables
First, create the environment variables file `.env` in the server folder. The `.env` file contains the following environment variables:
- MONGODB_URI = `your MongoDB URL`
- JWT_SECRET = `any secret key - must be secured`
- PORT = `8800` or any port number
- NODE_ENV = `development`
Set Up MongoDB:
1. Setting up MongoDB involves a few steps:
    - Visit MongoDB Atlas Website
        - Go to the MongoDB Atlas website: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
    - Create an Account
    - Log in to your MongoDB Atlas account.
    - Create a New Cluster
    - Choose a Cloud Provider and Region
    - Configure Cluster Settings
    - Create Cluster
    - Wait for Cluster to Deploy
    - Create Database User
    - Set Up IP Whitelist
    - Connect to Cluster
    - Configure Your Application
    - Test the Connection
2. Create a new database and configure the `.env` file with the MongoDB connection URL. 
Steps to run server
1. Open the project in any editor of choice.
2. Navigate into the server directory `cd server`.
3. Run `npmi` or `npm install` to install the packages.
4. Run `npm start` to start the server.
If configured correctly, you should see a message indicating that the server is running successfully and `Database Connected`.
Client Side Setup
Environment variables
First, create the environment variables file `.env` in the client folder. The `.env` file contains the following environment variables:
- VITE_APP_BASE_URL = `http://localhost:8800` #Note: Change the port 8800 to your port number.
- VITE_APP_FIREBASE_API_KEY = `Firebase api key`
Steps to run client
1. Navigate into the client directory `cd client`.
2. Run `npmi` or `npm install` to install the packages.
3. Run `npmrun dev` to run the app on `http://localhost:3000`.
4. Open(http://localhost:3000) to view it in your browser.

LOGIN CREDENTIALS
Use the following credentials to log in as an Admin:

Username: admin@gmail.com
Password: zidio1234


