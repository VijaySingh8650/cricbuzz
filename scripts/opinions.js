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
let newData=[{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235313/since-shakib-revealed-that-he.jpg",
p1:"NEW CAPTAIN",
h4:"Was BCB's best option in re-naming Shakib Test captain the right option?",
p2:"Kemar Roach and Kraigg Brathwaite's experience came handy for the hosts in tricky conditions",
t:"1h ago"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c235100/bangladesh-needed-one-such-cam.jpg",
p1:"NTERNATIONAL CRICKET VS IPL",
h4:"Lack of quality spin options hurting Bangladesh in Test cricket",
p2:"Asking Bangladesh to bat first, Kemar Roach and Co extracted plenty of bounce and seam movement from the pitch, with the pacers sharing all 10 wickets among them in the end",
t:"2h ago"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c234687/how-given-all-that-could-it.jpg",
p1:"NDIAN PREMIER LEAGUE 2022",
h4:"What does it take to win, and not to win, the IPL",
p2:"Despite being on the backfoot for major part of the game, Sri Lanka staged a strong fightback to win by 26 runs",
t:"3h ago"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c234306/cricket-for-people-like-de-ko.jpg",
p1:"IPL 2022",
h4:"Spirited Sri Lanka level series",
p2:"Ad: Olymp Trade",
t:"4h ago"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c234181/umran-picked-up-three-wickets.jpg",
p1:"NEW CAPTAIN",
h4:"A 26-Year-Old Girl From Barmer Became A Millionaire Overnight",
p2:"Sushant Modani and Gajanand Singh hit fifties for USA which was then followed up by a disciplined bowling effort",
t:"5h ago"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c230742/ive-really-enjoyed-being-aro.jpg",
p1:"NTERNATIONAL CRICKET VS IPL",
h4:"Clinical USA edge past Nepal",
p2:"Put in to bat first by West Indies, the visitors went to Lunch on Day 1 at 76/6",
t:"6h ago"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c228546/yasir-hit-a-fine-fifty-in-the.jpg",
p1:"NTERNATIONAL CRICKET VS IPL",
h4:"Pacers rattle Bangladesh in Antigua",
p2:"Quinton de Kock is in contention to return to the playing XI having missed the last couple of games",
t:"7h ago"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c228509/south-africa-will-be-without-p.jpg",
p1:"BANGLADESH TOUR OF SOUTH AFRICA, 2022",
h4:"Buoyed India aim for series decider",
p2:"The veteran top order batsman retires as the third most capped Irish crickete",
t:"8h ago"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c228464/the-most-urgent-matter-on-the.jpg",
p1:"NEW CAPTAIN",
h4:"William Porterfield announces retirement from international cricket",
p2:"No batsman from the home side managed to register a half-century",
t:"9h ago"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c226342/pant-and-iyer-both-notched-up.jpg",
p1:"NDIAN PREMIER LEAGUE 2022",
h4:"Cummins four-fer keeps Sri Lanka to 220",
p2:"England have been experiencing an unprecedented slew of injuries to their best fast bowlers. What are the unique challenges that have contributed to this injury plague?",
t:"9h ago"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c225552/khaled-mahmud-trying-to-convin.jpg",
p1:"IPL 2022",
h4:"Skidding away on the fast lane: England's injury distress",
p2:"The pair have played against each other frequently over the last two decades",
t:"10h ago"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c220520/rohit-is-ruled-out-of-the-seri.jpg",
p1:"IPL 2022",
h4:"Morgan, Seelaar face-off once more as Netherlands take on England's batting might",
p2:"The tournament will kickstart on June 17, 2022 in Malaysia with the top two making it to the ACC Women's T20 Asia Cup19h ago",
t:"11h ago"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c215199/bharat-hit-a-six-off-the-final.jpg",
p1:"NEW CAPTAIN",
h4:"ACC Women's T20 Championship returns after nine years",
p2:"While Mumbai already have a lead of 346 runs by stumps on day 3, Madhya Pradesh's lead against Bengal stands at 231",
t:"12h ago"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c236039/jamie-has-been-in-excellent-fo.jpg",
p1:"NEWS • THE OVERTONS PICKED",
h4:"Ranji Trophy: Mumbai, MP in pole position",
p2:"The 28-year-old, who will join his twin brother Craig in the squad, has been in excellent form in the ongoing County Championship for league leaders Surrey",
t:"13h ago"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c236035/salil-ankola-has-rediscovered.jpg",
p1:"FEATURES • REDEMPTION TALE",
h4:"England include Jamie Overton for Leeds Test",
p2:"The former India fast bowler is back to cricket after having endured a long journey away from the game - of lost money, of anger issues, of alcoholism, of denial and despise towards the game",
t:"14h ago"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c236033/conway-tested-positive-on-team.jpg",
p1:"NEWS • NEW ZEALAND'S TOUR OF ENGLAND, 2022",
h4:"Alcoholic haze to rediscovering love for cricket - Ankola's flight to redemption",
p2:"Conway will now have to begin his five days of isolation and New Zealand have not called for any replacements",
t:"15h ago"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c236030/rahul-is-set-to-go-to-germany.jpg",
p1:"NEWS • INJURY UPDATE",
h4:"Devon Conway tests positive for COVID-19",
p2:"The current India vice-captain is set to miss the entire tour and go to Germany for his injury treatment",
t:"16h ago"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c236027/roach-was-passed-fit-on-the-ev.jpg",
p1:"NEWS • BANGLADESH IN WEST INDIES, 2022",
h4:"KL Rahul set to miss England tour, to go abroad for treatment",
p2:"The pacer was passed fit on the eve of the first Test against Bangladesh",
t:"20h ago"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c236026/will-jacks-scored-62-in-surrey.jpg",
p1:"REPORTS • COUNTY CHAMPIONSHIP, 2022",
h4:"Roach added to West Indies Test squad",
p2:"Elsewhere, Luke Wells' majestic unbeaten 175 was instrumental in Lancashire chasing down 329",
t:"22h ago"}];



let append=(newData)=>{
newData.forEach((elem)=>{
let div1=document.createElement("div");
let div2=document.createElement("div");
let div3=document.createElement("div");
let p1= document.createElement("p");
let img= document.createElement("img");
let h4= document.createElement("h3");
let p2= document.createElement("p");
let t= document.createElement("p");

p1.innerText=elem.p1;
img.src=elem.img;
h4.innerText=elem.h4;
p2.innerText=elem.p2;
t.innerText=elem.t;

div1.setAttribute("class","div1")
div2.setAttribute("class","div2")
t.setAttribute("class","t")

div1.append(img);
div2.append(p1,h4,p2,t);
div3.append(div1,div2)
document.querySelector("#new").append(div3)

})
}
append(newData);