import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js';
import { getFirestore , collection , getDocs, addDoc, deleteDoc, doc} from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js';

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
const db = getFirestore(app);
const table = document.getElementById("table") 
const form = document.getElementById("addForm")

async function getEmployees(db){
    const empCol = collection(db,'employees')
    const empSnapshot = await getDocs(empCol)
    return empSnapshot
}

  function showData(employee){
    const row = table.insertRow(-1)
    const nameCol = row.insertCell(0)
    const ageCol = row.insertCell(1)
    const emailCol = row.insertCell(2)
    const deleteCol = row.insertCell(3)
    nameCol.innerHTML = employee.data().name
    ageCol.innerHTML = employee.data().age
    emailCol.innerHTML = employee.data().email


    let btn = document.createElement('button')
    btn.textContent = "ลบข้อมูล"
    btn.setAttribute('class','btn btn-danger')
    btn.setAttribute('data-id',employee.id)
    deleteCol.appendChild(btn)
    btn.addEventListener('click',(e)=>{
        let id = e.target.getAttribute('data-id');
        deleteDoc(doc(db,'employees',id))
    })
}

const data = await getEmployees(db)
data.forEach(employee=>{
    showData(employee)
})

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    addDoc(collection(db,'employees'),{
        name:form.name.value,
        age:form.age.value,
        email:form.email.value
    })
    form.name.value=""
    form.age.value=""
    form.email.value=""
    alert("Recorded successfully")
})
