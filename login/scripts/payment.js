import navbar3 from "../components/navbar3.js";
let navbarAppend = document.getElementById("navbar1");
navbarAppend.innerHTML = navbar3();
document.getElementById("proceed").addEventListener('click', get)


function get() {
    event.preventDefault();
    var obj = [document.querySelector("#cardnum").value,
        document.querySelector("#mmyy").value,
        document.querySelector("#cvv").value,
        document.querySelector("#namecard").value,

    ]


    console.log(obj[0].length);
    localStorage.setItem("card", JSON.stringify(obj));
    let data2 = JSON.parse(localStorage.getItem('card'))

    if (data2[0].length > 0) {
        alert("successfull")
        window.location.href = "index.html";
    } else {
        alert("Unsuccessfull")
    }

}
let data = JSON.parse(localStorage.getItem('amt'))
document.getElementById("h2").innerText = ` ₹${data}`
document.getElementById("id").innerText = `Up to ₹${data}`
console.log(data)