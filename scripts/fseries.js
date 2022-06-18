import navbar from "../components/navbar.js";
let navbarAppend = document.getElementById("navbar1");
navbarAppend.innerHTML=navbar();


import navbar2 from "../components/navbar2.js";
let navbarAppend2 = document.getElementById("navbar2");
navbarAppend2.innerHTML=navbar2();

// import navbar3 from "../components/navbar3.js";
// let navbarAppend3 = document.getElementById("navbar3");
// navbarAppend2.innerHTML=navbar3();


import footer from "../components/footer.js";
let footerOfCricbuzz = document.getElementById("footer_div");
footerOfCricbuzz.innerHTML=footer();




const url = "https://api.cricapi.com/v1/matches?apikey=5e621024-461d-42ea-a21e-90b13ca76e8e&offset=0"


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
    //console.log(data)
    data.forEach(function(el){

        let h2 = document.createElement("h3");
        h2.innerText = el.name;

        let p1 = document.createElement("p");
        p1.innerText = el.matchType;

        let p2 = document.createElement("p");
        p2.innerText = el.status;

        

        let p5 = document.createElement("p");
        p5.innerText = el.dateTimeGMT;

        let p6 = document.createElement("p");
        p6.innerText = el.venue;

        let p8= document.createElement("p");
        p8.innerText = el.teams[0]+" vs "+el.teams[1];
   

        let div = document.createElement("div");
        div.append(h2,p1,p6,p2,p5,p6,p8);

        container.append(div)

    });
}









