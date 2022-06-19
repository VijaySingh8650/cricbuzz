  
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




let conData=[{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c236067/cms-img.jpg",
h3:"Spirited Sri Lanka level series",
p:"Quinton de Kock is in contention to return to the playing XI having missed the last couple of games"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c236046/cms-img.jpg",
h3:"Cummins four-fer keeps Sri Lanka to 220",
p:"Bhuvneshwar Kumar will serve as Hardik's deputy for the two-match series"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c236002/cms-img.jpg",
h3:"Chahal mastery keeps South Africa in check",
p:"The leggie finished with figures that read: 4 overs, 11 dots, 20 runs, 3 wickets as South Africa crumbled in chase"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235904/cms-img.jpg",
h3:"South Africa learn that India don't go quietly",
p:"India had lost five of their six completed T20Is against South Africa at home before registering their biggest win over the Proteas on Tuesday"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235849/cms-img.jpg",
h3:"England include Jamie Overton for Leeds Test",
p:"The 28-year-old, who will join his twin brother Craig in the squad, has been in excellent form in the ongoing County Championship for league leaders Surrey"},
{img:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c228337/india-vs-sri-lanka-2nd-test.jpg",
h3:"England docked two WTC points for slow over-rate in Trent Bridge Test",
p:"England have been docked two points and fined 40 per cent of their match fee after their win at Trent Bridge against New Zealand for maintaining a slow over-rate"},
{img:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c228158/india-vs-sri-lanka-2nd-test.jpg",
h3:"Devon Conway tests positive for COVID-19",
p:"Conway will now have to begin his five days of isolation and New Zealand have not called for any replacements"},
{img:"https://www.cricbuzz.com/a/img/v1/300x170/i1/c227058/india-vs-sri-lanka-1st-t20i.jpg",
h3:"Spirited Sri Lanka level series",
p:"Despite being on the backfoot for major part of the game, Sri Lanka staged a strong fightback to win by 26 runs"},
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