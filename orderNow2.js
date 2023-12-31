import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"; 
import{db} from "./config.js"

// showAllResturant()
const querySnapshot = await getDocs(collection(db, "Resturant_Admin"));
querySnapshot.forEach((doc) => {
    document.querySelector('.show').innerHTML +=`
    <div class="card col-lg-4 col-md-6 mb-lg-0 mb-4 resCard"  id="${doc.id}" >
        <img src="${doc.data().downloadURL}" onclick="resCard('${doc.id}')" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${doc.data().Name}</h5>
        <p class="card-text">${doc.data().Resturant_Address}</p>
        <p>Closes 12:20 am | Serves: 1</p>
        </div>
    </div>
    `
    console.log(`${doc.id} => ${doc.data().Name}`);
});

window.resCard = (id)=>{
    localStorage.setItem('userIDSs',id)
    window.location='./other.html'
    console.log(id)
}

let nav = document.querySelector('.navigation-wrap');
window.onscroll = ()=>{
if(document.documentElement.scrollTop > 20){
nav.classList.add('scroll-on')
}else{
nav.classList.remove('scroll-on')
}
}