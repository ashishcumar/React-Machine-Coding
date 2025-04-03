import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  collection,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA02wzHfJpKLbP45FkU_LJs9gT3Wfs61bY",
  authDomain: "fir-store-fd36f.firebaseapp.com",
  projectId: "fir-store-fd36f",
  storageBucket: "fir-store-fd36f.firebasestorage.app",
  messagingSenderId: "425841013482",
  appId: "1:425841013482:web:2c807d4c22a5280db55d93",
  measurementId: "G-NYDJ9XK4ZV",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getHighscore = async () => {
  const docRef = doc(db, "Highscore", "Current");
  const docSnap = await getDoc(docRef);
  return docSnap.data().score;
};

const uploadHighscore = async (newScore) => {
  const docRef = doc(db, "Highscore", "Current");
  let result = await updateDoc(docRef, {
    score: Number(newScore),
  });
  return newScore
};

const getSnippets = async() => {
    const docRef = doc(db,'snippets','accordion-component')
    let docSnap = await getDoc(docRef);
    return docSnap.data()
}

async function addSnippets() {
    const snippetsData = {
      "accordion-component": {
        "projectName": "Accordion Component",
        "projectDescription": "A collapsible accordion with smooth animations",
        "difficulty": "easy",
        "tags": ["UI", "React Hooks", "DOM Manipulation"],
        "previewImage": "https...", // Replace with actual URL
        "lastUpdated": "2025-04-03T12:00:00Z",
        "codeSnippets": {
          "react": {
            "code": "import { useState } from 'react';\n\nexport default function Accordion({ items }) {\n  const [activeIndex, setActiveIndex] = useState(null);\n  \n  // ...rest of the code",
            "explanation": "Uses React state to track which item is active...",
            "complexity": "O(n)",
            "dependencies": ["react-icons"]
          },
          "vanilla": {
            "code": "document.querySelectorAll('.accordion-title').forEach((title) => {\n  title.addEventListener('click', () => {\n    // ...DOM manipulation logic\n  });\n});",
            "explanation": "Uses event delegation to handle clicks...",
            "complexity": "O(n)"
          }
        },
        "commonQuestions": [
          "How would you add animations?",
          "What about accessibility considerations?"
        ]
      },
      "infinite-scroll": {
        "projectName": "Infinite Scroll",
        "projectDescription": "A component that loads more content as the user scrolls",
        "difficulty": "intermediate",
        "tags": ["UI", "React", "Intersection Observer"],
        "previewImage": "https...", // Replace with actual URL
        "lastUpdated": "2024-03-15T10:30:00Z",
        "codeSnippets": {
          "react": {
            "code": "// React code for infinite scroll",
            "explanation": "Uses Intersection Observer API",
            "complexity": "O(1)",
            "dependencies": ["react"]
          },
          "vanilla": {
            "code": "// Vanilla JavaScript code for infinite scroll",
            "explanation": "Attaches event listener to the scroll event",
            "complexity": "O(n)"
          }
        },
        "commonQuestions": [
          "How to optimize performance?",
          "How to handle errors?"
        ]
      }
    };
  
    try {
      // Reference to the 'snippets' collection
      const snippetsCollection = collection(db, "snippets");
  
      // Loop through each snippet and add it as a document in the 'snippets' collection
      for (const snippetId in snippetsData) {
        if (snippetsData.hasOwnProperty(snippetId)) {
          // Create a document reference for the current snippet
          const snippetDocRef = doc(snippetsCollection, snippetId);
  
          // Set the data for the document
          await setDoc(snippetDocRef, snippetsData[snippetId]);
          console.log(`Document with ID ${snippetId} added successfully.`);
        }
      }
  
      console.log("All snippets added successfully!");
    } catch (error) {
      console.error("Error adding snippets: ", error);
    }
  }
  
  // Call the function to add the snippets
//   addSnippets();
  

export { getHighscore,uploadHighscore,getSnippets };
