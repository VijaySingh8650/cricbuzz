let conData=[{img:"https://scontent.fjai1-1.fna.fbcdn.net/v/t1.6435-9/107887087_3432458453444783_8197447634339808313_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=101&ccb=1-7&_nc_sid=ed5ff1&_nc_ohc=1I5HWZgKoAgAX9Uqxxr&_nc_ht=scontent.fjai1-1.fna&oh=00_AT-NtLGJm4terB3be_onm4XLYqxD09IPM8eYSoY_zZNvUQ&oe=62D2A799",
h3:"Cricket in Iran is a fledgling sport ",
p:"Quinton de Kock is in contention to return to the playing XI having missed the last couple of games"},
{img:"https://scontent.fjai1-2.fna.fbcdn.net/v/t1.6435-9/66778919_2603736936316943_4462116823181033472_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=100&ccb=1-7&_nc_sid=ed5ff1&_nc_ohc=sHzyvefDzT8AX-zbgS_&_nc_ht=scontent.fjai1-2.fna&oh=00_AT8270kGjLruYXhHXBRw3aZirZdSS5gts1RmK7jqG8891g&oe=62D2687C",
h3:"Related to Iran national cricket team ",
p:"Bhuvneshwar Kumar will serve as Hardik's deputy for the two-match series"},
{img:"https://scontent.fjai1-2.fna.fbcdn.net/v/t1.6435-9/66775399_2603736539650316_1525992173642711040_n.png?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=104&ccb=1-7&_nc_sid=ed5ff1&_nc_ohc=S0Ee8X5YfUUAX_K6UoJ&_nc_ht=scontent.fjai1-2.fna&oh=00_AT-PO8FIhQnFOwLfDApuBFTNYyphf1YRRUmMhfwFtSQHHw&oe=62D0F6DE",
h3:"Chahal mastery keeps South Africa in check",
p:"The leggie finished with figures that read: 4 overs, 11 dots, 20 runs, 3 wickets as South Africa crumbled in chase"},

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