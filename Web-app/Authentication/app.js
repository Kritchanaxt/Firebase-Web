  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"

  const firebaseConfig = {
    apiKey: "AIzaSyDrwPS1Lob4feswEmWHxfUcq56iz-WEAmY",
    authDomain: "basicfirebase-4a473.firebaseapp.com",
    projectId: "basicfirebase-4a473",
    storageBucket: "basicfirebase-4a473.appspot.com",
    messagingSenderId: "988947079892",
    appId: "1:988947079892:web:7a09fb8d1ec84459f59141",
    measurementId: "G-0PQMGF6526"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  const form = document.getElementById("registerForm")
  const formarea = document.getElementById("form-area")
  const profile = document.getElementById("profile")
  const welcome = document.getElementById("welcome")
  const logout = document.getElementById("logout")
  const loginForm = document.getElementById("loginForm")

  form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const email = form.email.value
    const password = form.password.value
    createUserWithEmailAndPassword(auth,email,password)
    .then((result)=>{
        alert("สร้างบัญชีเรียบร้อย")
    }).catch((error)=>{
        alert(error.message)
    })
  })

  onAuthStateChanged(auth,(user)=>{

    if(user) {
        profile.style.display = "block"
        formarea.style.display = "none"
        welcome.innerText = `ยินดีต้อนรับ ${user.email}`
    } else {
        profile.style.display = "none"
        formarea.style.display = "block"
    }
  })

  logout.addEventListener("click",(e)=>{
    signOut(auth).then(()=>{
        alert("ออกจากระบบเรียบร้อย")
    }).catch((error)=>{
        alert(error.message )
    })
  })

  loginForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const email = loginForm.email.value
    const password = loginForm.password.value
    signInWithEmailAndPassword(auth,email,password)
    .then((result)=>{
        alert("ลงชื่อเข้าใช้เรียบร้อย")
    }).catch((error)=>{
        alert(error.message)
    })
})