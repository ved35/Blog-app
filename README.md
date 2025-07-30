# 📝 Ved's Blog - Full-Stack Blogging Platform

A modern, feature-rich blogging platform built with React, Node.js, and MongoDB. This application provides a complete blogging experience with user authentication, content management, and interactive features.

![Blog App](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-8.9.6-green?style=for-the-badge&logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🎯 Project Overview

**Ved's Blog** is a comprehensive blogging platform that enables users to create, manage, and interact with blog posts. The application features a modern UI with dark/light theme support, real-time content management, and robust user authentication.

### ✨ Key Features

- 🔐 **Authentication System**
  - Email/Password registration and login
  - Google OAuth integration
  - JWT-based session management
  - Role-based access control (Admin/User)

- 📝 **Content Management**
  - Rich text editor (React Quill)
  - Image upload with Cloudinary integration
  - Post categorization and tagging
  - Draft and publish functionality
  - SEO-friendly URLs with slugs

- 🎨 **User Experience**
  - Responsive design with Tailwind CSS
  - Dark/Light theme toggle
  - Modern UI components with Flowbite
  - Real-time search functionality
  - Infinite scroll and pagination

- 💬 **Interactive Features**
  - Comment system with likes
  - User profiles and avatars
  - Post sharing capabilities
  - Reading time estimation

- 🛠️ **Admin Dashboard**
  - User management
  - Post analytics
  - Content moderation
  - System statistics

## 🏗️ Architecture

### Frontend Stack
- **React 18.3.1** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Flowbite React** - UI component library
- **React Quill** - Rich text editor
- **Firebase** - Google OAuth authentication

### Backend Stack
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

### External Services
- **Cloudinary** - Image upload and storage
- **Firebase Auth** - Google OAuth provider

## 📁 Project Structure

```
Blog-app/
├── backend/                 # Node.js/Express API
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Custom middleware
│   │   ├── models/         # MongoDB schemas
│   │   ├── routes/         # API endpoints
│   │   └── libs/          # Database connection
│   └── package.json
├── frontend/               # React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── redux/         # State management
│   │   ├── utils/         # Utility functions
│   │   └── assets/        # Static assets
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Blog-app
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**

   Create `.env` files in both backend and frontend directories:

   **Backend (.env)**
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

   **Frontend (.env)**
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   ```

5. **Start the development servers**

   **Backend (Terminal 1)**
   ```bash
   cd backend
   npm run dev
   ```

   **Frontend (Terminal 2)**
   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `POST /api/auth/google` - Google OAuth

### Posts
- `GET /api/post/getposts` - Get all posts
- `POST /api/post/create` - Create new post
- `PUT /api/post/updatepost/:id` - Update post
- `DELETE /api/post/deletepost/:id` - Delete post

### Users
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/update/:id` - Update user profile
- `DELETE /api/user/delete/:id` - Delete user account
- `POST /api/user/signout` - User logout

## 🎨 Features in Detail

### Authentication & Authorization
- **Multi-provider authentication**: Email/password and Google OAuth
- **JWT token management**: Secure session handling
- **Role-based access**: Admin and regular user roles
- **Protected routes**: Client-side route protection

### Content Management
- **Rich text editor**: React Quill with formatting options
- **Image upload**: Cloudinary integration for media storage
- **Post categories**: Organized content with tags
- **SEO optimization**: URL slugs for better search visibility

### User Experience
- **Responsive design**: Mobile-first approach
- **Theme switching**: Dark/light mode toggle
- **Real-time search**: Instant post filtering
- **Infinite scroll**: Smooth content loading

### Interactive Features
- **Comment system**: User discussions on posts
- **Like functionality**: Post and comment interactions
- **User profiles**: Customizable user information
- **Reading analytics**: Time estimation and view tracking

## 🛠️ Development

### Available Scripts

**Backend**
```bash
npm run dev    # Start development server with nodemon
npm start      # Start production server
```

**Frontend**
```bash
npm run dev    # Start Vite development server
npm run build  # Build for production
npm run preview # Preview production build
npm run lint   # Run ESLint
```

### Code Quality
- ESLint configuration for code consistency
- Prettier formatting for clean code
- TypeScript-ready structure
- Modular component architecture

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB Atlas or local MongoDB
2. Configure environment variables
3. Deploy to platforms like:
   - Heroku
   - Railway
   - Render
   - DigitalOcean

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy to platforms like:
   - Vercel
   - Netlify
   - GitHub Pages
   - Firebase Hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Ved** - Full-Stack Developer

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Express.js](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Flowbite](https://flowbite.com/) - UI components
- [Cloudinary](https://cloudinary.com/) - Image management
- [Firebase](https://firebase.google.com/) - Authentication

---

⭐ **Star this repository if you find it helpful!** 