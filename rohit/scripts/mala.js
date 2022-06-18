let conData=[{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c205697/cms-img.jpg",
h3:"Malaysia go down swinging as Nepal march on to Tri-Nations final",
p:"Quinton de Kock is in contention to return to the playing XI having missed the last couple of games"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c205272/cms-img.jpg",
h3:"Netherlands hold off spirited Malaysia with O'Dowd's century",
p:"Bhuvneshwar Kumar will serve as Hardik's deputy for the two-match series"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c205087/cms-img.jpg",
h3:"Chahal mastery keeps South Africa in check",
p:"The leggie finished with figures that read: 4 overs, 11 dots, 20 runs, 3 wickets as South Africa crumbled in chase"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c187440/cms-img.jpg",
h3:"South Africa learn that India don't go quietly",
p:"India had lost five of their six completed T20Is against South Africa at home before registering their biggest win over the Proteas on Tuesday"},
{img:"https://www.cricbuzz.com/a/img/v1/205x152/i1/c159649/cms-img.jpg",
h3:"England include Jamie Overton for Leeds Test",
p:"The 28-year-old, who will join his twin brother Craig in the squad, has been in excellent form in the ongoing County Championship for league leaders Surrey"},

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