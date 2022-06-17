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
let data=document.querySelector("#data")
let data1=document.querySelector("#data1")
let data2=document.querySelector("#data2")
let data3=document.querySelector("#data3")

fetching("international",data)
fetching("league",data1)
fetching("domestic",data2)
fetching("women",data3)
function fetching(id,container){
    fetch(`https://unofficial-cricbuzz.p.rapidapi.com/series/list-archives?matchType=${id}`, options)
	.then(response => response.json())
	.then(response => {
        // console.log(response)
        Display(response.seriesMap[0].series,container)
    })
	.catch(err => console.error(err));
}


function Display(data,container){
    data.forEach(function(elem){

        let div=document.createElement("div")
        
        let name=document.createElement("p")
        name.innerText=elem.name
        let hr=document.createElement("hr")
        

        div.append(name,hr)
       container.append(div)
    })
   
}
