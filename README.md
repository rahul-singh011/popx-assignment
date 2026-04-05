# PopX Authentication UI

A responsive **React + TailwindCSS authentication application** built as part of an assignment.
The project includes **user registration, login authentication, and a protected profile page** with client-side validation and local storage persistence.

---

##  Live Demo

Deployed on Netlify 

```
https://popx-assignment-rahul.netlify.app/
```

---

## 📌 Features

### 🔐 Authentication Flow

* User **Registration Page**
* User **Login Page**
* **Protected Profile Page**
* Redirects unauthenticated users to login

---

### 📝 Registration Validation

* Required field validation
* Phone number must be **10 digits**
* Password **strength indicator**
* Error highlighting for invalid inputs
* Stores user data in **localStorage**

---

### 🔑 Login Validation

* Checks credentials against stored user data
* Shows message if user **is not registered**
* Shows message for **invalid credentials**

---

### 👤 Profile Page

* Displays:

  * User name
  * Email
  * Phone number
* Shows a placeholder profile image
* Protected route (accessible only after login)

---

### 🔔 UX Improvements

* Toast notifications instead of alerts
* Disabled login button when fields are empty
* Clean mobile-style layout
* Smooth UI interactions

---

## 🛠️ Tech Stack

| Technology      | Purpose                       |
| --------------- | ----------------------------- |
| React           | Frontend framework            |
| React Router    | Navigation & routing          |
| Tailwind CSS    | Styling                       |
| Vite            | Fast development build tool   |
| LocalStorage    | Client-side user data storage |
| React Hot Toast | Notifications                 |

---

## 📂 Project Structure

```
src
│
├── components
│   └── Layout.jsx
│
├── pages
│   ├── Welcome.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── Profile.jsx
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation

Clone the repository:

```
git clone https://github.com/rahul-singh011/popx-assignment
```

Navigate to the project folder:

```
cd popx-assignment
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

---

## 🌐 Deployment

The project is deployed using **Netlify**.

---

## 📸 Screens

### Welcome Page

Landing screen for login or account creation.

### Register Page

User can create a new account with validation.

### Login Page

Registered users can sign in securely.

### Profile Page

Displays user information after successful login.

---

## 📈 Future Improvements

* Backend authentication using Node.js / Express
* Secure password hashing
* JWT authentication
* Database integration (MongoDB)
* Profile image upload

---

## 👨‍💻 Author

**Rahul Singh**

GitHub
https://github.com/rahul-singh011

LinkedIn
https://in.linkedin.com/in/rahulsingh-dev01

---

⭐ If you like this project, consider giving it a star.
