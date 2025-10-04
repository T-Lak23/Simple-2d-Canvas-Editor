import { initializeApp } from "firebase/app";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_PROJECT,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_VITE_APP_ID,
  measurementId: import.meta.env.VITE_MESAUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const handleSaveCanvas = async ({ canvasId, canvas }) => {
  try {
    const docRef = doc(db, "canvases", canvasId);
    const json = canvas.toJSON();
    const jsonString = JSON.stringify(json);
    await updateDoc(docRef, {
      canavasData: jsonString,
      updatedAt: new Date(),
    });
    alert("saved");
  } catch (error) {
    console.log("save failed", error);
  }
};
