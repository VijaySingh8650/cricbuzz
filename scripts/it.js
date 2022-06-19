
    import navbar from "../components/navbar.js";
    let navbarAppend = document.getElementById("navbar1");
    navbarAppend.innerHTML=navbar();
    
    // console.log(navbar());
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




let conData=[{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c184027/cms-img.jpg",
h3:"CWC Challenge League B: Uganda's five-from-five takes them to the top",
p:"Quinton de Kock is in contention to return to the playing XI having missed the last couple of games"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c183507/cms-img.jpg",
h3:"CWC Challenge League - Round One - Ready Reckoner",
p:"Bhuvneshwar Kumar will serve as Hardik's deputy for the two-match series"},

]


let append=(conData)=>{
    conData.forEach((elem)=>{
        let div1=document.createElement("div")
        let div2=document.createElement("div")
        let div3=document.createElement("div")
        let img=document.createElement("img");
        let h3=document.createElement("h3");
        let p=document.createElement("p");
        let p1=document.createElement("p");
         div1.setAttribute("class","div1")
         div2.setAttribute("class","div2")
         p1.setAttribute("class","p1")
        img.src=elem.img;
        h3.innerText=elem.h3;
        p.innerText=elem.p;
        p1.innerText="8h ago"

        div1.append(img);
        div2.append(h3,p,p1);
        div3.append(div1,div2);
        console.log(h3)
        document.querySelector("#team").append(div3)
    })
}
append(conData);