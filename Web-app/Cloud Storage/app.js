  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getStorage,ref,uploadBytes } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-storage.js"

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
  const storage = getStorage(app)

  const fileUpload = document.getElementById("fileUpload")
  fileUpload.addEventListener("change",(e)=>{
    const file = e.target.files[0]
    const imageRef = ref(storage,"myImage")
    uploadBytes(imageRef,file)
    .then((result)=>{
      alert("อัพโหลดไฟล์เรียบร้อย")
    })
  })