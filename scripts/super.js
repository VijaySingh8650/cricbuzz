
import navbar from "../components/navbar.js";
let navbarAppend = document.getElementById("navbar1");
navbarAppend.innerHTML=navbar();

import navbar2 from "../components/navbar2.js";
let navbarAppend2 = document.getElementById("navbar2");
navbarAppend2.innerHTML=navbar2();

import footer from "../components/footer.js";
let footerOfCricbuzz = document.getElementById("footer_div");
footerOfCricbuzz.innerHTML=footer();