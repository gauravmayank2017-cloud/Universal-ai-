import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleGenerativeAI } from "@google-generative-ai/generative-ai";

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY", // यहाँ अपनी की सुरक्षित रखें
  authDomain: "helpai-d5d33.firebaseapp.com",
  projectId: "helpai-d5d33",
  storageBucket: "helpai-d5d33.firebasestorage.app",
  messagingSenderId: "638645254102",
  appId: "1:638645254102:web:9784af26ba64272100d677"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Google AI Studio (Gemini) Setup
const genAI = new GoogleGenerativeAI("YOUR_GEMINI_API_KEY");
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
