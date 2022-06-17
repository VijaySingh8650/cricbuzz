import navbar from "../components/navbar.js";
let navbarAppend = document.getElementById("navbar1");
navbarAppend.innerHTML = navbar();
import navbar2 from "../components/navbar2.js";
let navbarAppend2 = document.getElementById("navbar2");
navbarAppend2.innerHTML = navbar2();

import footer from "../components/footer.js";
let footerOfCricbuzz = document.getElementById("footer_div");
footerOfCricbuzz.innerHTML = footer();
document.querySelector("#navbar1>img").addEventListener("click", function() {
    window.location.href = "index.html";
})
var user = JSON.parse(localStorage.getItem('user'))

if (user) {
    console.log("yes", user)
    let username = ""
    for (var i = 0; i < user[0].email.length - 10; i++) {
        username += user[0].email[i]
    }
    document.querySelector(".input01").innerText = username
    document.querySelector(".input02").innerText = user[0].email
} else {
    console.log('no')
    window.location.href = "login.html";
}
document.querySelector("#singout").addEventListener("click", signout)

function signout() {

    let user = JSON.parse(localStorage.getItem('user'))
    user = null
    console.log(user)
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "index.html";
}