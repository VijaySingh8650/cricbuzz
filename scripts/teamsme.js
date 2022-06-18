import navbar from "../components/navbar.js";
let navbarAppend = document.getElementById("navbar1");
navbarAppend.innerHTML=navbar();


import navbar2 from "../components/navbar2.js";
let navbarAppend2 = document.getElementById("navbar2");
navbarAppend2.innerHTML=navbar2();

import footer from "../components/footer.js";
let footerOfCricbuzz = document.getElementById("footer_div");
footerOfCricbuzz.innerHTML=footer();


// api-I

 const url="https://api.cricapi.com/v1/cricScore?apikey=5e621024-461d-42ea-a21e-90b13ca76e8e";


//api-II

//const url="https://api.cricapi.com/v1/cricScore?apikey=2b7073c7-38a3-4440-8986-fbe87b48b38b"

async function currentMatches(){
    try{
        let res= await fetch(url)
        let match= await res.json();
        console.log(match.data)
        append(match.data)
    }
    catch(err){
        console.log(err)
    }
}
currentMatches()
function append(data){
    let container=document.getElementById("container");

    data.forEach(function(el){
        let h3=document.createElement("h3")
        h3.innerText=el.t1+" Vs "+el.t2;

        let p1=document.createElement("p")
        p1.innerText=el.status;

        let p2=document.createElement("p")
        p2.innerText=el.dateTimeGMT;

        let p3=document.createElement("p")
        p3.innerText=el.matchType;

        let img1=document.createElement("img")
        img1.src=el.t1img;

        let img2=document.createElement("img")
        img2.src=el.t2img;

        let p6=document.createElement("p")
        p6.innerText=el.ms;

        let p7=document.createElement("p")
        p7.innerText=el.t1s+" "+el.t2s;

        let div=document.createElement("div")
        div.append(h3,p3,img1,img2,p1,p2,p6,p7)

        

        container.append(div)

    })
}


	