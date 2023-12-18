import { collection, getDocs, doc, onSnapshot,query , orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
        import{db} from "./config.js"

        let costomerUse = localStorage.getItem('costomerUse');
        let showResturant = document.querySelector('.showResturant');
        let showSelectCategorys = document.querySelector('.showSelectCategorys')
        // console.log(costomerUse)

        const unsub = onSnapshot(doc(db, "Resturant_Admin", costomerUse), (doc) => {
            showResturant.innerHTML =`
            <div class="col-sm-12 cards ">
                <img src="${doc.data().downloadURL}" class="img-flui    alt="...">       
                <div class=" text">
                    <h2>${doc.data().Resturant_Name}</h2>
                    <p class="card-text"><span>Address:</span>${doc.data().Resturant_Address}</p>
                    <p>Closes 12:20 am | Serves: 1</p>
                </div>
            </div>
            `
});

        onSnapshot(query(collection(db, costomerUse),orderBy("time")), (data) => {
            data.docChanges().forEach(element => {
                showSelectCategorys.innerHTML +=`
                <div class="card col-lg-4 col-md-6 mb-lg-0 mb-4" onclick="showproperty('${element.doc.id}')" id="${element.doc.id}" >
                        <img id="cken" src="${element.doc.data().download_Url}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h2 class="card-title">${element.doc.data().getCategory}</h2>
                        </div>
                    </div>
                `
                // console.log(element.doc.data().download_Url)
                // console.log(element.doc.id)
            });
        })
let showproperty =async(id)=>{
    localStorage.setItem('userIDSs',id)
    window.location='./practice2.html'
    console.log(id)
}
window.showproperty=showproperty

       let nav = document.querySelector('.navigation-wrap');
window.onscroll = ()=>{
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('scroll-on')
    }else{
        nav.classList.remove('scroll-on')
    }
}

window.onscroll = ()=>{
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('scroll-on')
    }else{
        nav.classList.remove('scroll-on')
    }
}
