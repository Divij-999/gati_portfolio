# Divij Modi - Personal Portfolio

Welcome to the official repository for my personal portfolio website.  
This project showcases my skills, projects, and creative work through a **modern, responsive interface** built with **React** and **Vite**.

## 🌐 View Live Portfolio 🚀
[Click here to view the live portfolio](https://divij-999.github.io/portfolio/)

---

## ✨ Key Features

- **Dynamic Instagram Gallery**: Features two separate, dynamically updated galleries for my photography and quotes accounts, fetched securely using the Instagram Graph API.  
- **Secure API Proxy**: A serverless function backend hosted on Vercel acts as a secure proxy to protect private API keys, ensuring they are never exposed on the frontend.  
- **Interactive UI**: Smooth animations, a clean user interface, and a seamless single-page application experience built with React Router.  
- **Contact Form**: A fully functional contact form for easy communication.  
- **Responsive Design**: Fully responsive layout ensuring a great user experience on all devices, from mobile phones to desktops.  

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, React Router  
- **Backend (API Proxy)**: Vercel Serverless Functions (Node.js)  
- **Deployment**:  
  - Frontend hosted on **GitHub Pages**  
  - Backend API hosted on **Vercel**

---

## 🏛️ Secure Architecture

To protect sensitive credentials, this project uses a **decoupled frontend and backend architecture**:

- **Frontend (This Repository)**:  
  The React application is a purely client-side interface.  
  It is hosted on GitHub Pages and makes requests to the secure backend.  

- **Backend (API Proxy)**:  
  A separate, dedicated Vercel project hosts a single serverless function (`divij-portfolio-instagram-api`).  
  This function is the only part of the system that holds the private Instagram Access Token.  
  It receives requests from the frontend, securely fetches data from the Instagram API, and then sends the data back to the client.  

✅ This separation ensures that no secret keys are ever exposed in the public-facing code.  

---

## 🚀 Getting Started

Follow these steps to run this project locally:

### 1. Clone the repository:
```bash
git clone https://github.com/divij-999/portfolio.git
cd portfolio
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Set up local environment variables:
- Create a file named `.env` in the root of the project.  
- This file is for local development only and should be added to your `.gitignore`.  
- The frontend does not use these variables directly, but they are useful for testing other integrations.  

> **Note**: The Instagram API fetch will work without any local variables, as it calls the live Vercel API.

### 4. Run the development server:
```bash
npm run dev
```

The application will now be running locally, typically at:  
👉 [http://localhost:8080/portfolio/](http://localhost:8080/portfolio/)

---

## 📄 License
This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for details.
