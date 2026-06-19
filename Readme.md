# 🚀 MERN Stack Backend Guide

> A comprehensive backend development guide using MongoDB, Express, Node.js, and Mongoose. Learn to build scalable, production-ready APIs from scratch.

---

## 📖 Learning Credits

This project is based on the excellent tutorials and concepts from **[Chai Aur Code](https://www.youtube.com/c/chaiaurcode)** channel. All learning materials, best practices, and patterns follow the guidelines taught in their MERN Stack backend course.

> 🙏 Special thanks to Hitesh Choudhary and the Chai Aur Code community for making world-class programming education accessible to everyone.

---

## 🎯 Project Overview

This repository contains a complete guide and codebase for building robust backend applications using the MERN stack (specifically focusing on the backend). You'll learn to create RESTful APIs, handle databases, implement authentication, and deploy production-ready applications.

Whether you're a beginner starting your backend journey or an intermediate developer looking to master Node.js and MongoDB, this guide will walk you through every step.

## 🛠️ Tech Stack

### **Backend Technologies**

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 14+ | JavaScript runtime environment |
| **Express.js** | 4.x+ | Web application framework |
| **MongoDB** | 4.4+ | NoSQL database |
| **Mongoose** | 6.x+ | MongoDB object modeling |
| **JWT** | - | Authentication & authorization |
| **Bcrypt** | - | Password hashing & security |
| **Dotenv** | - | Environment variable management |

## ✨ What You'll Learn

### 1️⃣ **Node.js & Express Fundamentals**
- ✅ Setting up a Node.js project
- ✅ Creating Express servers
- ✅ Routing and middleware
- ✅ Request/response handling
- ✅ Error handling and validation
- ✅ Async/await patterns

### 2️⃣ **MongoDB & Mongoose**
- ✅ Database setup and connection
- ✅ Schema design and validation
- ✅ Model creation and management
- ✅ CRUD operations
- ✅ Relationships (One-to-One, One-to-Many, Many-to-Many)
- ✅ Aggregation pipelines
- ✅ Indexing and optimization

### 3️⃣ **RESTful API Development**
- ✅ API design principles
- ✅ HTTP methods and status codes
- ✅ Request validation
- ✅ Response formatting
- ✅ Pagination and filtering
- ✅ Sorting and search

### 4️⃣ **Authentication & Authorization**
- ✅ User registration and login
- ✅ JWT token management
- ✅ Refresh tokens
- ✅ Role-based access control (RBAC)
- ✅ Password hashing with bcrypt
- ✅ Secure session management

### 5️⃣ **Best Practices & Architecture**
- ✅ Project structure and organization
- ✅ Separation of concerns
- ✅ Environment configuration
- ✅ Error handling strategies
- ✅ Logging and debugging
- ✅ API documentation

### 6️⃣ **Advanced Topics**
- ✅ File uploads and storage
- ✅ Email notifications
- ✅ Caching strategies
- ✅ Rate limiting
- ✅ CORS handling
- ✅ API security best practices

## 📂 Project Structure

```
mern-backend-guide/
│
├── src/
│   ├── models/                 # Mongoose schemas
│   │   ├── User.js
│   │   ├── Post.js
│   │   └── Comment.js
│   │
│   ├── controllers/            # Route logic
│   │   ├── userController.js
│   │   ├── postController.js
│   │   └── commentController.js
│   │
│   ├── routes/                 # API endpoints
│   │   ├── userRoutes.js
│   │   ├── postRoutes.js
│   │   └── commentRoutes.js
│   │
│   ├── middleware/             # Custom middleware
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── validation.js
│   │
│   ├── config/                 # Configuration files
│   │   ├── database.js
│   │   └── constants.js
│   │
│   ├── utils/                  # Utility functions
│   │   ├── validators.js
│   │   ├── formatters.js
│   │   └── helpers.js
│   │
│   ├── constants/              # App constants
│   │   └── httpStatus.js
│   │
│   └── app.js                  # Express app setup
│
├── .env                        # Environment variables
├── .env.example                # Example env file
├── .gitignore
├── package.json
├── server.js                   # Entry point
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn** (Node package manager)
- **MongoDB** (local or MongoDB Atlas account)
- **Postman** or **Thunder Client** (for API testing)
- A code editor (VS Code recommended)

### Installation Steps

#### 1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/mern-backend-guide.git
cd mern-backend-guide
```

#### 2. **Install Dependencies**
```bash
npm install
```

#### 3. **Setup Environment Variables**
Create a `.env` file in the root directory:
```env
# Server Configuration
PORT=8000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/mern-backend
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database-name

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRE=30d

# Email Configuration (if implementing)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# File Upload
MAX_FILE_SIZE=5242880  # 5MB in bytes
UPLOAD_DIR=./uploads
```

#### 4. **Setup MongoDB**

**Option A: Local MongoDB**
```bash
# Start MongoDB service
mongod
```

**Option B: MongoDB Atlas**
- Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a cluster and get connection string
- Update `MONGODB_URI` in `.env`

#### 5. **Start the Server**
```bash
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:8000`

## 📊 Database Schema Examples

### **User Model**
```javascript
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username'],
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email']
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
```

### **Post Model**
```javascript
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});
```

## 🔌 API Endpoints Overview

### **User Routes**
```
POST   /api/v1/users/register          - Register new user
POST   /api/v1/users/login             - Login user
POST   /api/v1/users/logout            - Logout user
GET    /api/v1/users/:id               - Get user profile
PUT    /api/v1/users/:id               - Update user profile
DELETE /api/v1/users/:id               - Delete user account
GET    /api/v1/users                   - Get all users (admin)
```

### **Post Routes**
```
POST   /api/v1/posts                   - Create new post
GET    /api/v1/posts                   - Get all posts
GET    /api/v1/posts/:id               - Get single post
PUT    /api/v1/posts/:id               - Update post
DELETE /api/v1/posts/:id               - Delete post
```

### **Comment Routes**
```
POST   /api/v1/posts/:id/comments      - Add comment to post
GET    /api/v1/posts/:id/comments      - Get post comments
DELETE /api/v1/comments/:id            - Delete comment
```

## 🔐 Authentication Flow

```
1. User Registers
   └─ Password hashed with bcrypt
   └─ User saved to MongoDB

2. User Logs In
   ├─ Email & password verified
   ├─ JWT access token generated
   └─ JWT refresh token generated

3. Accessing Protected Routes
   ├─ Client sends request with access token
   ├─ Middleware verifies token
   └─ Route handler executes if valid

4. Token Refresh
   ├─ Client uses refresh token
   ├─ New access token generated
   └─ Refresh token validated
```

## 📝 Middleware Examples

### **Authentication Middleware**
```javascript
const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: 'No token provided' 
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ 
      success: false, 
      message: 'Invalid token' 
    });
  }
};
```

### **Error Handling Middleware**
```javascript
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};
```

## 🧪 API Testing

### **Using Postman**

1. Import the API collection (if provided)
2. Set environment variables (base URL, tokens)
3. Test each endpoint systematically

### **Sample Request**
```bash
# Register User
curl -X POST http://localhost:8000/api/v1/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "email": "john@example.com",
    "password": "password123"
  }'

# Login
curl -X POST http://localhost:8000/api/v1/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

## 📚 Learning Resources

### **Official Documentation**
- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Mongoose Documentation](https://mongoosejs.com/)

### **Chai Aur Code Resources**
- [YouTube Channel](https://www.youtube.com/c/chaiaurcode)
- [MERN Backend Playlist](https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPcqyVzlIWcaZeRLTZZm)
- [Community Discord](https://discord.gg/chaiaurcode)

### **Additional Learning**
- [RESTful API Best Practices](https://restfulapi.net/)
- [OWASP Security Guidelines](https://owasp.org/)
- [12 Factor App](https://12factor.net/)

## 🎓 Learning Outcomes

After completing this guide, you'll be able to:

✅ Set up and configure a Node.js & Express server  
✅ Design and implement MongoDB schemas with Mongoose  
✅ Build RESTful APIs following industry standards  
✅ Implement secure authentication with JWT  
✅ Handle errors gracefully and implement validation  
✅ Organize code into a scalable, maintainable structure  
✅ Work with databases efficiently  
✅ Implement authorization and role-based access  
✅ Deploy backend applications to production  
✅ Debug and optimize Node.js applications  

## 💡 Best Practices

### **Code Organization**
- Keep routes, controllers, and models separate
- Use consistent naming conventions
- Comment complex logic
- Follow DRY (Don't Repeat Yourself) principle

### **Database**
- Use indexes for frequently queried fields
- Validate data at schema level
- Implement proper relationships
- Regular backups and monitoring

### **Security**
- Never commit `.env` files
- Use HTTPS in production
- Validate all user inputs
- Hash passwords with bcrypt
- Implement rate limiting
- Use CORS appropriately

### **Error Handling**
- Use try-catch blocks for async operations
- Implement centralized error handling
- Provide meaningful error messages
- Log errors for debugging

### **Performance**
- Use pagination for large datasets
- Implement caching strategies
- Optimize database queries
- Use compression middleware

## 📝 Environment Variables Checklist

- [ ] `PORT` - Server port number
- [ ] `NODE_ENV` - development/production
- [ ] `MONGODB_URI` - Database connection string
- [ ] `JWT_SECRET` - JWT signing secret
- [ ] `JWT_EXPIRE` - Token expiration time
- [ ] `REFRESH_TOKEN_SECRET` - Refresh token secret
- [ ] `MAX_FILE_SIZE` - Maximum upload size
- [ ] `UPLOAD_DIR` - Upload directory path

## 🐛 Troubleshooting

### **MongoDB Connection Issues**
```bash
# Check if MongoDB is running
mongod --version

# Verify connection string in .env
# Common issue: Missing authentication in Atlas URL
```

### **Port Already in Use**
```bash
# Find process using port 8000
lsof -i :8000

# Kill the process
kill -9 <PID>
```

### **JWT Token Errors**
- Ensure `JWT_SECRET` is set in `.env`
- Check token format (Bearer <token>)
- Verify token hasn't expired

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Code Standards**
- Follow the existing code style
- Add comments for complex logic
- Update documentation
- Test your changes

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋 Support & Community

- **Issues** - Report bugs and request features via GitHub Issues
- **Discussions** - Join community discussions
- **Chai Aur Code Discord** - Connect with other learners
- **YouTube Comments** - Engage on relevant Chai Aur Code videos

## 🔗 Useful Links

- [GitHub Repository](#)
- [Chai Aur Code Channel](https://www.youtube.com/c/chaiaurcode)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [VS Code](https://code.visualstudio.com/)

---

## 📌 Quick Start Checklist

- [ ] Node.js and npm installed
- [ ] MongoDB set up (local or Atlas)
- [ ] Repository cloned
- [ ] Dependencies installed (`npm install`)
- [ ] `.env` file created
- [ ] Server started (`npm run dev`)
- [ ] Database connection verified
- [ ] First API endpoint tested

---

## 🎉 Ready to Build?

Start with the basics, follow the project structure, and build your way up to complex features. Remember, every expert was once a beginner!

**Happy Coding! 💻**

---

**Created with ❤️ by learning from [Chai Aur Code](https://www.youtube.com/c/chaiaurcode)**

*Last Updated: June 2024*
