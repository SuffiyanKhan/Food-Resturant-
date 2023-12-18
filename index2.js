import {  onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {auth} from "./config.js"
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    window.location='./Adminsignup.html'
    // User is signed out
    // ...
  }
});

onAuthStateChanged(auth, async (user) => {
if (!user) {
localStorage.removeItem("UserId")
location.href = "./signup.html";
}
});
let nav = document.querySelector('.navigation-wrap');
window.onscroll = ()=>{
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('scroll-on')
    }else{
        nav.classList.remove('scroll-on')
    }
}
document.querySelector('#oredrnow').addEventListener('click',()=>{
    window.location='./orderNow2.html'
})