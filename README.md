# 🔐 Authentication System using Node.js, Express, MongoDB, and JWT

This is a simple user authentication system built with **Node.js**, **Express**, **MongoDB**, **Mongoose**, **EJS**, **bcrypt**, and **JWT**. It allows users to **register**, **log in**, and **log out**, using **password hashing** and **token-based authentication**.

## 🚀 Features

- User registration with hashed passwords
- Secure login with JWT and cookies
- Session management using cookies
- EJS templating for frontend views
- MongoDB-based data storage

## 📁 Project Structure

```
.
├── models
│   └── user.js         # Mongoose user schema
├── public              # Static assets (CSS/images)
├── views               # EJS templates
│   ├── login.ejs
│   ├── create.ejs
│   ├── login_error.ejs
│   ├── creation_success.ejs
│   └── login_success.ejs
├── app.js              # Main server file
├── package.json
└── README.md
```

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- EJS (Embedded JavaScript Templates)
- bcrypt for password hashing
- JSON Web Tokens (JWT) for authentication
- cookie-parser for cookie handling

## 📦 Installation

1. **Clone this repository:**

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up your MongoDB connection:**

Replace the MongoDB connection string in `mongoose.connect()` inside your `user.js` or DB connection file. Make sure:
- The correct **database name** is added to the URI (like `/authentication` instead of default `/test`)
- Any special characters in your password like `@` are URL-encoded (use `%40` for `@`)

Example:

```js
mongoose.connect("mongodb+srv://yourUsername:yourPass%40word@yourCluster.mongodb.net/authentication", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

4. **Run the server:**

```bash
node app.js
```

Then open your browser and go to:

```
http://localhost:3000
```

## ✨ Routes and Views

| Route | Method | Description |
|-------|--------|-------------|
| `/` | GET | Login page |
| `/create-user` | GET | User registration form |
| `/create` | POST | Creates a new user with hashed password |
| `/successful-creation` | GET | Page shown after successful signup |
| `/login` | GET | Login page |
| `/login` | POST | Authenticates user and sets JWT token cookie |
| `/successful-login` | GET | Success page after login |
| `/e-re-login` | GET | Error page for failed login |
| `/logout` | GET | Logs user out and clears token |

## 🙋‍♂️ Author

**Abhijit Roy**  
- [LinkedIn](https://www.linkedin.com/in/abhijit-roy-b550b5287/)  
- Email: roya9435@gmail.com

## 📜 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
