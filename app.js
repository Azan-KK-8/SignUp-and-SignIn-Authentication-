
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDyL3GxX76i8BVU9AtRf5Cfv2wne_Eg_Y",
  authDomain: "authentication-bb306.firebaseapp.com",
  databaseURL: "https://authentication-bb306-default-rtdb.firebaseio.com",
  projectId: "authentication-bb306",
  storageBucket: "authentication-bb306.firebasestorage.app",
  messagingSenderId: "664780832026",
  appId: "1:664780832026:web:2ff74a93508c73f34680a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Resform = document.getElementById("Register-form");
const Resname = document.getElementById("name-res")
const Resemail = document.getElementById("email-res")
const Respassword = document.getElementById("password-res")
const Resbtn = document.getElementById("res-btn");
if (Resform) {
  Resform.addEventListener("submit", async (e) => {
    e.preventDefault();
    let ResNameValue = Resname.value.trim();
    let ResEmailValue = Resemail.value;
    let ResPasswordValue = Respassword.value;
    console.log("Name :", ResNameValue);
    console.log("Email :", ResEmailValue);
    console.log("Password :", ResPasswordValue);
    if (!ResEmailValue || !ResNameValue || !ResPasswordValue) {
      alert("Please fill all fields");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, ResEmailValue, ResPasswordValue);
      console.log("Register is SuccssFully !", userCredential);
      alert("Account is Created SuccessFull")

    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  })
}
// login
const loginForm = document.getElementById("login-form")
const loginEmail = document.getElementById("email-log");
const loginPassword = document.getElementById("password-log");
const loginbtn = document.getElementById("log-btn");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let loginEmailValue = loginEmail.value;
    let loginPasswordValue = loginPassword.value;
    console.log("Email :", loginEmailValue);
    console.log("Password :", loginPasswordValue);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginEmailValue, loginPasswordValue);
      console.log("SuccessFull login :", userCredential);
      alert("SuccessFully login !");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  })

}


// const Auth1 = firebase.auth();

