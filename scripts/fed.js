import navbar from "../components/navbar.js";
let navbarAppend = document.getElementById("navbar1");
navbarAppend.innerHTML=navbar();

import navbar2 from "../components/navbar2.js";
let navbarAppend2 = document.getElementById("navbar2");
navbarAppend2.innerHTML=navbar2();

import foot from  '../components/footerx.js'
document.querySelector('#footer').innerHTML=foot()

let alart = document.querySelector('#alart')

alart.addEventListener('click',falart)

function falart(){
    event.preventDefault()
let form = document.querySelector('form')
    if(form.nam.value != '' && form.eml.value != '' && form.sub.value != '' && form.mes.value != ''){

    alert("Thank You For Your Feedback")
    window.location.reload()
    }else{
        alert("Fill All The Form");
    }
}