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