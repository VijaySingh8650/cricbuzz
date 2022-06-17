import pay2 from "../components/pay2.js";
let navbarAppend = document.getElementById("navbar1");
navbarAppend.innerHTML = pay2();
document.getElementById("proceed").addEventListener('click', get)

document.querySelector("#navbar1>img").addEventListener("click", function() {
    window.location.href = "index.html";
})

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
        alert("Enter valid input")
    }

}
let data = JSON.parse(localStorage.getItem('amt'))
document.getElementById("h2").innerText = ` ₹${data}`
document.getElementById("id").innerText = `Up to ₹${data}`
console.log(data)
const today = new Date()

let d = today.getDate()
let m = today.getMonth(5)
let y = today.getFullYear()
console.log(d, m, typeof(y))
document.getElementById("date1").innerText = `${d} June ${y}`
document.getElementById("date2").innerText = ` ${d} June ${y+1}`