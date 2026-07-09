// Importaciones
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

// Configuración de Firebase usando variables de entorno
const firebaseConfig = {
  apiKey: "AIzaSyAkKlrfNfzY46N3LpYKHl3oyjP5MzJ-CNA",
  authDomain: "entrega-final-70ac2.firebaseapp.com",
  projectId: "entrega-final-70ac2",
  storageBucket: "entrega-final-70ac2.firebasestorage.app",
  messagingSenderId: "85675196895",
  appId: "1:85675196895:web:7eb384c5b3616d4105446a"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

export { db };