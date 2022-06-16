import planm from "../components/planm.js";
import navbar3 from "../components/navbar3.js";
let navbarAppend = document.getElementById("navbar1");
navbarAppend.innerHTML = navbar3();
document.getElementById("su").addEventListener('click', get);

function get() {
    if (0 < (+data)) {
        console.log(data)
        document.getElementById("page1").innerHTML = null

        let navbarAppend = document.getElementById("con");
        navbarAppend.innerHTML = planm();
        document.querySelector("#bill").innerText = data
        document.querySelector("#btn").addEventListener('click', con);
    } else {
        alert("invailid plan")
    }
    // window.location.href = "payment.html";

}

function con() {


    localStorage.setItem("amt", JSON.stringify(data));
    // let data1 = JSON.parse(localStorage.getItem('amt'))
    window.location.href = "payment.html"
}
document.querySelector("#spaan1").addEventListener('click', spaan);
let data = 0;

function spaan() {
    data = 0

    document.querySelector("#inbox3").style.background = "white"
    document.querySelector("#inbox2").style.background = "white"
    document.querySelector("#inbox1").style.background = "#009270"
    data = document.querySelector("#spaan1").value
    console.log(data)
        // 
}
document.querySelector("#spaan2").addEventListener('click', spaan2);

function spaan2() {
    console.log("he")
    document.querySelector("#inbox1").style.background = "white"
    document.querySelector("#inbox3").style.background = "white"
    document.querySelector("#inbox2").style.background = "#009270"
    data = 0
    data = document.querySelector("#spaan2").value
    console.log(data)
}
document.querySelector("#spaan3").addEventListener('click', spaan3);

function spaan3() {
    console.log("he")
    document.querySelector("#inbox1").style.background = "white"
    document.querySelector("#inbox2").style.background = "white"
    document.querySelector("#inbox3").style.background = "#009270"
    data = 0
    data = document.querySelector("#spaan3").value
    console.log(data)

}