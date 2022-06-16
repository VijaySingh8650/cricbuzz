document.querySelector("#submit").addEventListener("click", Submit);
// var user = 
// var otp = 
var user = JSON.parse(localStorage.getItem('user')) || []
console.log(user)
let otp1 = ''


function Submit() {

    event.preventDefault();
    var Obj = {

        email: document.querySelector("#email").value,

    };
    user.push(Obj);
    console.log(user[0].email);
    localStorage.setItem("user", JSON.stringify(user));
    if (user[0].email.length > 0) {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        for (let i = 0; i < 6; i++) {
            otp1 += getRandomInt(9)
        }

        console.log();
        alert(`OTP -${otp1}`)




        let otp = document.createElement("button");
        otp.setAttribute("id", "submit2")
        otp.setAttribute("class", "subb")
        otp.innerHTML = "submit"

        console.log(otp)
        document.getElementById("h3").innerText = "Enter the 6 digit OTP";
        document.getElementById("p0").innerText = ` OTP sent to ${document.querySelector("#email").value} `;

        document.getElementById("input").innerHTML = null;
        document.getElementById("input").style.borderColor = "transparent"
        document.getElementById("p").innerText = "";
        document.querySelector("#inp1").style.borderColor = "#add";
        document.querySelector("#inp2").style.borderColor = "#add";
        document.querySelector("#inp3").style.borderColor = "#add";
        document.querySelector("#inp4").style.borderColor = "#add";
        document.querySelector("#inp5").style.borderColor = "#add";
        document.querySelector("#inp6").style.borderColor = "#add";

        // document.getElementById("otp").value
        document.getElementById("submit0").innerHTML = null
        document.getElementById("sub").append(otp)

        let i = 60
        let id;
        var min = 1
        start()

        function start() {
            id = setInterval(function() {
                if (i === -1) {
                    i = 60
                    min -= 1
                        // console.log(i);
                } else if (min == -1) {
                    console.log(i, min);
                    document.getElementById("a").innerText = "RESEND OTP";
                    clearInterval(id)
                } else {
                    document.querySelector("#a").innerText = `${min}: ${i}`

                    console.log(i);
                    i--
                }
            }, 1000)
        }
        document.getElementById("submit2").addEventListener("click", submit2);
    } else {
        document.getElementById("invailid").innerText = 'Please enter a valid email id'
        document.getElementById("invailid").style.color = "red"
        document.getElementById("invailid").style.textAlign = "center"
    }
}


function submit2() {
    event.preventDefault();
    var obj = [document.querySelector("#inp1").value,
        document.querySelector("#inp2").value,
        document.querySelector("#inp3").value,
        document.querySelector("#inp4").value,
        document.querySelector("#inp5").value,
        document.querySelector("#inp6").value,
    ]

    // otp: document.querySelector("#inp1").value,
    // otp1: document.querySelector("#inp2").value,
    // otp2: document.querySelector("#inp3").value,
    // otp3: document.querySelector("#inp4").value,
    // otp4: document.querySelector("#inp5").value,
    // otp5: document.querySelector("#inp6").value,

    // 
    // otp.push(Obj);
    console.log(obj);

    let otp2 = '';
    for (var i of obj) {
        otp2 += i
    }
    console.log(otp2);
    if (otp1 == otp2) {
        localStorage.setItem("otp", JSON.stringify(otp));
        window.location.href = "plan.html";
    } else {
        document.querySelector("#otpinvailid").innerText = "Please enter valid OTP."
        document.getElementById("otpinvailid").style.color = "red"
        document.getElementById("otpinvailid").style.textAlign = "center"
        console.log("gg")
    }

}
// console.log(typeof(" ")