import navbar from "../components/navbar.js";
let navbarAppend = document.getElementById("navbar1");
navbarAppend.innerHTML=navbar();

// console.log(navbar());
import navbar2 from "../components/navbar2.js";
let navbarAppend2 = document.getElementById("navbar2");
navbarAppend2.innerHTML=navbar2();
    import nav from '../components/news.js';
  //   console.log(nav());
    document.querySelector("#nav").innerHTML=nav();

    import footer from "../components/footer.js";
let footerOfCricbuzz = document.getElementById("footer_div");
footerOfCricbuzz.innerHTML=footer();


//clicking on image 
document.querySelector("#navbar1>img").addEventListener("click",function(){
    window.location.href="index.html";
  })


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd7e496ffb4msh726b54e6f11e809p1a1c03jsn838ccc0f9f1f',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

let getdata=async()=>{
    try {
        let res= await fetch('https://cricbuzz-cricket.p.rapidapi.com/news/v1/topics', options);
        let data = await res.json();
        console.log(data.topics)
        append(data.topics)
    } catch (error) {
        console.log("err",error)
    }

   
}

getdata();

let append=(data)=>{
    data.forEach((ele)=>{
        let div=document.createElement("div");
       let h3= document.createElement("h3");
       let p= document.createElement("p");

       h3.innerText=ele.headline;
       p.innerText=ele.description;
       div.append(h3,p);
       document.querySelector("#container").append(div);
    })
}

	