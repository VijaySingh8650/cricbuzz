import navbar from "../components/navbar.js";
let navbarAppend = document.getElementById("navbar1");
navbarAppend.innerHTML=navbar();


import navbar2 from "../components/navbar2.js";
let navbarAppend2 = document.getElementById("navbar2");
navbarAppend2.innerHTML=navbar2();


import footer from "../components/footer.js";
let footerOfCricbuzz = document.getElementById("footer_div");
footerOfCricbuzz.innerHTML=footer();



const url = "https://api.cricapi.com/v1/currentMatches?apikey=2b7073c7-38a3-4440-8986-fbe87b48b38b&offset=0"


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

        let p3 = document.createElement("p");
        p3.innerText = el.venue;

        let p5 = document.createElement("p");
        p5.innerText = el.dateTimeGMT;

        let p6 = document.createElement("p");
        p6.innerText = el.teams;

        let p8= document.createElement("p");
        p8.innerText = el.score[0].r+"-"+el.score[0].w+"-"+el.score[0].o;
   

        // let p11=document.createElement("p")
        // p11.innerText=el.score[0].inning+"  Vs  "+el.score[1].inning;


        
        




        let div = document.createElement("div");
        div.append(h2,p1,p3,p5,p6,p2);

        container.append(div)

    });
}