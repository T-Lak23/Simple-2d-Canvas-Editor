# Simple 2D Canvas Editor

A Simple 2D Canvas Editor built with **React.js**, **Fabric.js**, and **Firebase Firestore**, allowing users to create, edit, and save canvases online. The editor supports shapes, text, free drawing, and persistence through Firestore.

---

## 🌟 Features

- **Add Shapes & Text**
  - Rectangles, circles, text boxes
  - Move, resize, rotate, and delete objects
- **Drawing Tools**
  - Freehand pencil
  - Eraser
- **Custom Colors**
  - Change shape fill color, text color, and canvas background
- **Persistence**
  - Save canvas to Firebase Firestore
  - Re-open same canvas using URL (`/canvas/:canvasId`) and continue editing
- **Responsive Design**
  - Toolbar wraps and canvas is scrollable on smaller screens
- **User-Friendly**
  - Intuitive icons and controls for smooth editing

---

## 🛠 Tech Stack

- **Frontend:** React + Vite
- **Canvas Library:** Fabric.js
- **Database:** Firebase Firestore (No authentication required)
- **Styling:** Tailwind CSS
- **Deployed On:** Vercel

---

## 🚀 Live Demo

> [Live Demo](https://your-deployment-url.com)

---

## 📂 Project Structure

src/
├─ components/ # Toolbar
├─ utils/ # Helper functions for shapes, text, drawing
├─ hooks/ # Custom hooks (useSetCanvas)
├─ config/ # Firebase configuration and Firestore utils
├─ app.jsx # Routing using react-router-dom
├─ main.jsx # Entry point

---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

````bash
npm install```
````

### 3. Set up Firebase

1. Go to Firebase Console
   → Create Project

2. Create a Firestore database (No Auth required)

3. Copy your Firebase config and add it to src/config/firebase.js:

4. export const firebaseConfig = {
   apiKey: "YOUR_API_KEY",
   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
   projectId: "YOUR_PROJECT_ID",
   storageBucket: "YOUR_PROJECT_ID.appspot.com",
   messagingSenderId: "YOUR_SENDER_ID",
   appId: "YOUR_APP_ID"
   };

5. Run the project
   npm run dev

Open your browser at http://localhost:5173

## How to Use

- Open the home page and click “Create New Canvas”

- Add shapes, text, or draw using the pencil tool

- Select an object to move, resize, rotate, or delete

- Change colors for text, shapes, or canvas background

- Click Save Canvas to store your work in Firestore

- Reopen the canvas later via the same URL (/canvas/:canvasId) to continue editing

## License

MIT License
