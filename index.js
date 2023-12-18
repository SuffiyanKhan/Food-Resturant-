import {  onAuthStateChanged, deleteUser } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {auth} from "./config.js";
import {  doc, deleteDoc,  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"; 
import {db} from "./config.js";

// firestore
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    window.location='./signup.html'
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
window.location='./orderNow.html'
})


document.querySelector('#logout').addEventListener('click',()=>{
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Delete Account!',
    cancelButtonText: 'Cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your Account has been Logout',
        showConfirmButton: false,
        timer: 1500
      }).then( async() => {
        if (true) {
          await deleteDoc(doc(db, "customers", localStorage.getItem("userId"))); // deleted data of user from firestore.
            deleteUser(auth.currentUser).then( async () => {
              localStorage.remove("UserId");
              localStorage.remove()
              location.href = "./signup.html";
              console.log('successfully')
            }).catch((error) => {
              const errorCode = error.code;
              const errorMessage = errorCode.slice(5).toUpperCase();
              const errMessage = errorMessage.replace(/-/g, " ");
              console.log(errMessage)
          });
        }
      });
    }
  })
  console.log('hi')
})
      