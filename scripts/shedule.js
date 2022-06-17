import navbar from "../components/navbar.js";
let navbarAppend = document.getElementById("navbar1");
navbarAppend.innerHTML=navbar();


import navbar2 from "../components/navbar2.js";
let navbarAppend2 = document.getElementById("navbar2");
navbarAppend2.innerHTML=navbar2();

import footer from "../components/footer.js";
let footerOfCricbuzz = document.getElementById("footer_div");
footerOfCricbuzz.innerHTML=footer();

//clicking on image 
document.querySelector("#navbar1>img").addEventListener("click",function(){
    window.location.href="index.html";
})

import {mynavbar} from "../components/mynavbar.js"

document.querySelector("#nav").innerHTML=mynavbar()

const options = {
	method: 'GET',
	headers: {
        'X-RapidAPI-Key': '8ada33f7a4msh0be03f3b54330a5p16bb70jsn33902d224a84',
		// 'X-RapidAPI-Key': '1d21170159mshe1410cd117264c9p1243d2jsn40d21f3b067a',
		'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
	}
};

let childrens=document.querySelector(".categories").children

for(let child of childrens){
    child.addEventListener("click",childFun)
}
function childFun(){
    console.log(this.id)
    fetching(this.id)
}

fetching("international")
function fetching(id){
    fetch(`https://unofficial-cricbuzz.p.rapidapi.com/matches/get-schedules?matchType=${id}`, options)
	.then(response => response.json())
	.then(response =>{
        console.log(response.scheduleAdWrapper)
        Display(response.scheduleAdWrapper)
    })
	.catch(err => console.error(err));
}

function Display(data){

    document.querySelector("#shedule").innerHTML=""
        data.forEach(function (elem){
            if(elem.matchScheduleMap!==undefined){


            let main=document.createElement("div")
            let Date=document.createElement("h4")
            Date.innerText=elem.matchScheduleMap.date

            let matchinfo=document.createElement("div")
           matchinfo.setAttribute("id","matchs")
           
            display(elem.matchScheduleMap.matchScheduleList,matchinfo)

    
            main.append(Date,matchinfo)
            document.querySelector("#shedule").append(main)
            }
        })
    
   
}
function display(data1,box){
    console.log(data1)
    data1.forEach(function(elem){
        let div=document.createElement("div")
        let seriesName=document.createElement("p")
        seriesName.innerText=elem.seriesName
    
        let teams=document.createElement("p")
        teams.innerText=elem.matchInfo[0].team1.teamName+" vs "+elem.matchInfo[0].team2.teamName+","+elem.matchInfo[0].matchDesc+"\n"+elem.matchInfo[0].venueInfo.ground+","+elem.matchInfo[0].venueInfo.city;

         let time=document.createElement("div")
        div.append(seriesName,teams,time)
        box.append(div)
    })
   
}
