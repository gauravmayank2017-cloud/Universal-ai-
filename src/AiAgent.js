import { model, db } from './config';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const processTask = async (prompt, userId) => {
  // 1. AI से टास्क एनालाइज करवाना
  const result = await model.generateContent(`
    Analyze this request: "${prompt}". 
    If it's a task to save, return a JSON object with title and priority. 
    If it's a question, just answer it normally.
  `);
  
  const response = await result.response.text();

  // 2. अगर टास्क है तो Firebase में सेव करना
  if(response.includes("{")) {
     const taskData = JSON.parse(response);
     await addDoc(collection(db, "tasks"), {
       ...taskData,
       userId: userId,
       timestamp: serverTimestamp()
     });
     return "Task recognized and secured in your Firebase vault.";
  }

  return response;
};
