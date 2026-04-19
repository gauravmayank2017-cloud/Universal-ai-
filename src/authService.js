import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { app } from "./config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google से लॉगिन करने का फंक्शन
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user; // यूजर की जानकारी वापस करेगा
  } catch (error) {
    console.error("Login Failed:", error);
  }
};

// लॉगआउट करने का फंक्शन
export const logout = () => signOut(auth);
export { auth };
