# 🚀 APIForge

APIForge is a lightweight Postman-inspired API testing tool built using **HTML, CSS, JavaScript, Node.js, and Express.js**. It allows users to send HTTP requests, test REST APIs, manage query parameters, request headers, authentication, environment variables, and inspect API responses through a clean and responsive interface.

---

## ✨ Features

### 📡 HTTP Methods
- ✅ GET
- ✅ POST
- ✅ PUT
- ✅ PATCH
- ✅ DELETE

### 🔍 Query Parameters
- Add and manage query parameters dynamically.

### 📑 Request Headers
- Add custom request headers.
- Dynamic header management.

### 🔐 Authentication
- No Authentication
- Bearer Token
- Basic Authentication
- API Key Authentication

### 📝 Request Body
- JSON
- Raw Text
- Form Data (UI)
- x-www-form-urlencoded (UI)

### 🌍 Environment Variables
- Configure environment variables.
- Replace variables inside API URLs.

### 💾 Collections
- Save current request using LocalStorage.
- Automatically restore the last saved request.

### 📊 Response Viewer
- Status Code
- Response Time
- Response Size
- Response Headers
- Response Body

### 🎨 User Interface
- Responsive Design
- Sidebar Navigation
- Tab-based Request Editor
- Clean & Modern UI

### ⚙ Backend
- Express.js Server
- Modular Architecture
- Routes
- Controllers
- Services

---

# 🛠 Tech Stack

## Frontend
- HTML5
- CSS3
- JavaScript (ES6)

## Backend
- Node.js
- Express.js

## APIs & Storage
- Fetch API
- LocalStorage
- CORS

---

# 📂 Project Structure

```
APIForge/
│
├── client/
│   ├── index.html
│   ├── style.css
│   └── js/
│       ├── script.js
│       ├── query.js
│       ├── headers.js
│       ├── auth.js
│       ├── body.js
│       ├── collections.js
│       ├── environment.js
│       ├── response.js
│       ├── tabs.js
│       └── utils.js
│
├── server/
│   ├── server.js
│   ├── routes/
│   │   └── requestRoutes.js
│   ├── controllers/
│   │   └── requestController.js
│   └── services/
│       └── requestService.js
│
├── package.json
├── package-lock.json
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Roshniyadav876/-APIForge.git
```

## Navigate to Project

```bash
cd APIForge
```

## Install Dependencies

```bash
npm install
```

## Start Backend Server

```bash
node server/server.js
```

The backend server runs on:

```
http://localhost:5000
```

Now open:

```
client/index.html
```

in your browser.

---

# 🧪 Test APIs

## GET Request

```
https://jsonplaceholder.typicode.com/users
```

## POST Request

```
https://jsonplaceholder.typicode.com/posts
```

Sample Body:

```json
{
  "title": "APIForge",
  "body": "Testing POST Request",
  "userId": 1
}
```

---

# 📌 Future Improvements

- Multiple Collections
- Import / Export Collections
- Request History
- Pretty JSON Viewer
- Search Response
- Dark Mode

---

# 👩‍💻 Author

**Roshni Yadav**

B.Tech in Data Science

Technocrats Institute of Technology, Bhopal

---

# 📄 License

This project is developed for **learning and educational purposes**.

---

⭐ If you like this project, consider giving it a **Star** on GitHub!