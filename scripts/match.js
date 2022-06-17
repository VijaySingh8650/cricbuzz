import navbar from "../components/navbar.js";
let navbarAppend = document.getElementById("navbar1");
navbarAppend.innerHTML=navbar();


import navbar2 from "../components/navbar2.js";
let navbarAppend2 = document.getElementById("navbar2");
navbarAppend2.innerHTML=navbar2();


import footer from "../components/footer.js";
let footerOfCricbuzz = document.getElementById("footer_div");
footerOfCricbuzz.innerHTML=footer();

document.querySelector("#navbar1>img").addEventListener("click",function(){
    window.location.href="index.html";
})


document.getElementById("scorecard").addEventListener("click",function(){
    window.location.href="matchscorecard.html";
})

let data = JSON.parse(localStorage.getItem("index"));
console.log(data.index);

let commentary = document.getElementById("commentary");
commentary.style.color="#009270";
commentary.style.marginLeft="10px";
commentary.style.fontSize="15px";
commentary.style.fontWeight="700";
commentary.style.borderBottom="3px solid #009270";






if(data.index===0){
    document.querySelector(".heading").innerHTML=null
    let title = document.createElement("h1");
    title.innerText="India vs South Africa, 3rd T20I - Live Cricket Score, Commentary";
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    p1.innerHTML="<b>Series:</b> South Africa tour of India, 2022";
    let p2 = document.createElement("p");
    p2.innerHTML="<b>Venue:</b> Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium, Visakhapatnam";
    let p3 = document.createElement("p");
    p3.innerHTML="<b>Date & Time:</b> Jun 14, 07:00 PM LOCAL";
    div.append(p1,p2,p3);
    document.querySelector(".heading").append(title,div);


    let commentry = ()=>{
        let para = document.getElementById("para");
        para.innerHTML=null;
        let p1 = document.createElement("h4");
        let p2 = document.createElement("h4");
        p1.innerText="IND 179/5 (20)";
     
        p2.innerText="RSA 131 (19.1)";
       
        let status = document.createElement("p");
        status.innerText = "India won by 48 runs";
        let player = document.createElement("p");
        player.innerText="PLAYER OF THE MATCH";
    
        let name = document.createElement("h5");
        name.setAttribute("class","name");
        name.innerText="Yuzvendra Chahal";
        let para1 = document.createElement("h6");
        para1.innerHTML="First win as India captain for Rishabh Pant and India end their seven-match losing streak (across formats) against the Proteas. Was this a one-off failure from the South African batters? The scoreline is still 2-1 in favour of the visitors. It's time to bring the curtains down on this encounter. The action shifts to Rajkot. Join us on Friday for the fourth T20I. Until then, goodbye and good night.";
     
        let para2 = document.createElement("h6");
        para2.innerHTML="<b>Yuzvendra Chahal, Player of the Match:</b> I bowled a lot of sliders and bowled quicker in the previous matches. Today, I changed my seam position. Spinning and getting the ball to dip are my strengths. Today I tried to get it to turn and bowl slower. I tried to bowl to my strengths, I focused on that. When batters try to reverse-sweep, it becomes tough for the bowlers. But now I have a second plan and set fields accordingly. I didn't bowl well in the previous game, the coach asked me to back my strengths. The ground there (Rajkot) is bigger (*chuckles*).";
      
        let para3 = document.createElement("h6");
        para3.innerHTML="<b>Rishabh Pant: </b> The execution was spot-on from the bowlers and the batters. We were 15 runs short, but we weren't thinking about that. Bowlers did a fantastic job for us. In India, spinners play a big role and there is pressure on them, when they come off nicely then matches like this happen. When you get a good start, it's difficult for a new batter to come in and go big straightaway. We lost too many wickets. We'll look to improve in the next match. We have to make sure that we finish the game with a bigger margin.";
     
        let para4 = document.createElement("h6");
        para4.innerHTML="<b>Yuzvendra Chahal, Player of the Match:</b> I bowled a lot of sliders and bowled quicker in the previous matches. Today, I changed my seam position. Spinning and getting the ball to dip are my strengths. Today I tried to get it to turn and bowl slower. I tried to bowl to my strengths, I focused on that. When batters try to reverse-sweep, it becomes tough for the bowlers. But now I have a second plan and set fields accordingly. I didn't bowl well in the previous game, the coach asked me to back my strengths. The ground there (Rajkot) is bigger (*chuckles*).";
        para.append(p1,p2,status,player,name,para1,para2,para3,para4);
    }
    
    commentry();
}
if(data.index===2){
    //defining a function
    let commentry = ()=>{
        let para = document.getElementById("para");
        para.innerHTML=null;
        let p1 = document.createElement("h4");
        let p2 = document.createElement("h4");
        p1.innerText="SL 300/7 (50)";
     
        p2.innerText="AUS 282/8 (42.3)";
       
        let status = document.createElement("p");
        status.innerText = "Australia won by 2 wkts (DLS method)";
        let player = document.createElement("p");
        player.innerText="PLAYER OF THE MATCH";
    
        let name = document.createElement("h5");
        name.setAttribute("class","name");
        name.innerText="Glenn Maxwell";
        let para1 = document.createElement("h6");
        para1.innerHTML="Sri Lanka pulled off a heist against the Aussies on Saturday as Shanaka played a blinder, but Australia are back to winning ways. It could have been a better performance by their bowlers who conceded 300 runs in the first innings, but a collective effort by their batters helped them clinch victory tonight. Hasaranga struck five successive boundaries against Richardson in an over and he claimed four wickets too, but his all-round brilliance wasn't enough on the day. Maxwell will be pretty pleased with his knock though and Australia would want him to fire in the same way in the remaining four ODIs. That's all from this game. We'll see you with the coverage of the second ODI on Thursday. Good night and take care!";
     
        let para2 = document.createElement("h6");
        para2.innerHTML="<b>Finch:</b> It was a good game of cricket, that innings by Maxwell was pure class. Showed a lot of skill. We were one wicket behind where we would have liked to be towards the end, but that was an extraordinary innings by Maxwell, a few more wickets in hand would have been ideal. Our execution has been slightly off. We'll keep working on our bowling.";
      
        let para3 = document.createElement("h6");
        para3.innerHTML="<b>Shanaka:</b> Both the teams played well, but we weren't up to the mark with the ball. They batted very well and finished things off. We bowled many short balls and full tosses. 300 is a winning total on this ground, but our bowling cost us the game. I have seen him (Wellalage) performing from the Under 19 level, I believe he will perform in the next match.";
     
        let para4 = document.createElement("h6");
        para4.innerHTML="<b>Glenn Maxwell, Player of the Match:</b> That was really pleasing, with wickets falling around. I tried to be there as long as I could. I thought it was a good opportunity to get the run rate down against the young spinner. It (reverse hit) is something I have learnt very hard over the last few years, that's not a fluke.";
        para.append(p1,p2,status,player,name,para1,para2,para3,para4);
    }
    
    commentry();
    document.querySelector(".heading").innerHTML=null
    let title = document.createElement("h1");
    title.innerText="Sri Lanka vs Australia, 1st ODI - Live Cricket Score, Commentary";
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    p1.innerHTML="<b>Series:</b> Australia tour of Sri Lanka, 2022";
    let p2 = document.createElement("p");
    p2.innerHTML="<b>Venue:</b> Pallekele International Cricket Stadium, Pallekele";
    let p3 = document.createElement("p");
    p3.innerHTML="<b>Date & Time:</b> Jun 14, 02:30 PM LOCAL";
    div.append(p1,p2,p3);
    document.querySelector(".heading").append(title,div);


   
  
    
    
}

































if(data.index===4){
    document.querySelector(".heading").innerHTML=null
    let title = document.createElement("h1");
    title.innerText="Nepal vs Oman, 5th Match - Live Cricket Score, Commentary";
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    p1.innerHTML="<b>Series:</b> ICC Cricket World Cup League Two 2019-23";
    let p2 = document.createElement("p");
    p2.innerHTML="<b>Venue:</b> Moosa Stadium, Pearland";
    let p3 = document.createElement("p");
    p3.innerHTML="<b>Date & Time:</b> Jun 14, 10:30 AM LOCAL";
    div.append(p1,p2,p3);
    document.querySelector(".heading").append(title,div);

    let commentry = ()=>{
        let para = document.getElementById("para");
        para.innerHTML=null;
        let p1 = document.createElement("h4");
        let p2 = document.createElement("h4");
        p1.innerText="OMAN 163 (46.5)";
     
        p2.innerText="NEP 167/3 (33.1)";
       
        let status = document.createElement("p");
        status.innerText = "Nepal won by 7 wkts";
        // let player = document.createElement("p");
        // player.innerText="PLAYER OF THE MATCH";
    
        let name = document.createElement("h5");
        name.setAttribute("class","name");
        name.innerText="Teams:";
        let para1 = document.createElement("h6");
        para1.innerHTML="<b>Nepal</b>(Playing XI): Kushal Bhurtel, Aasif Sheikh, Dev Khanal, Rohit Paudel, Mohammad Aadil Alam, Dipendra Singh Airee, Aarif Sheikh(w), Karan KC, Sandeep Lamichhane(c), Sompal Kami, Sagar Dhakal";
     
        let para2 = document.createElement("h6");
        para2.innerHTML="<b>Oman</b> (Playing XI): Jatinder Singh, Kashyap Prajapati, Shoaib Khan, Zeeshan Maqsood(c), Ayaan Khan, Khawar Ali, Sandeep Goud, Naseem Khushi(w), Fayyaz Butt, Kaleemullah, Bilal Khan";
        para.append(p1,p2,status,name,para1,para2);
    }
    
    commentry();
}

if(data.index===6){
    document.querySelector(".heading").innerHTML=null
    let title = document.createElement("h1");
    title.innerText="Belgium vs Malta, 3rd T20I - Live Cricket Score, Commentary";
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    p1.innerHTML="<b>Series:</b> Malta tour of Belgium, 2022";
    let p2 = document.createElement("p");
    p2.innerHTML="<b>Venue:</b> Royal Brussels Cricket Ground, Brussels";
    let p3 = document.createElement("p");
    p3.innerHTML="<b>Date & Time:</b> Jun 12, 09:00 AM LOCAL";
    div.append(p1,p2,p3);
    document.querySelector(".heading").append(title,div);

    let commentry = ()=>{
        let para = document.getElementById("para");
        para.innerHTML=null;
        let p1 = document.createElement("h4");
        let p2 = document.createElement("h4");
        p1.innerText="BEL 162 (20)";
     
        p2.innerText="MALTA 40 (13.3)";
       
        let status = document.createElement("p");
        status.innerText = "Belgium won by 122 runs";
        // let player = document.createElement("p");
        // player.innerText="PLAYER OF THE MATCH";
    
        let name = document.createElement("h5");
        name.setAttribute("class","name");
        name.innerText="Teams:";
        let para1 = document.createElement("h6");
        para1.innerHTML="<b>Belgium</b> (Playing XI): Muhammad Muneeb, Aziz Mohammad Babakrkhail, Maqsood Ahmad, Shaheryar Butt(w), Sunny Sheraz Sheikh(c), Saber Zakhil, Shagharai Sefat, Khalid Ahmadi, Burhan Niaz, Murid Ekrami, Sajad Ahmadzai";
     
        let para2 = document.createElement("h6");
        para2.innerHTML="<b>Malta</b> (Playing XI): Ryan Bastiansz, Imran Ameer, Gopal Chaturvedi, Basil George, Aaftab Alam Khan(w), Varun Thamotharam, Bikram Arora(c), Amar Sharma, Bilal Muhammad, Jitesh Patel, Jaison Jerome";
        para.append(p1,p2,status,name,para1,para2);
    }
    
    commentry();
}



if(data.index===8){
    document.querySelector(".heading").innerHTML=null
    let title = document.createElement("h1");
    title.innerText="Germany vs Austria, Final - Live Cricket Score, Commentary";
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    p1.innerHTML="<b>Series:</b> Germany T20I Tri-Series 2022";
    let p2 = document.createElement("p");
    p2.innerHTML="<b>Venue:</b> Bayer Uerdingen Cricket Ground, Krefeld";
    let p3 = document.createElement("p");
    p3.innerHTML="<b>Date & Time:</b> Jun 12, 10:00 AM LOCAL";
    div.append(p1,p2,p3);
    document.querySelector(".heading").append(title,div);
    let commentry = ()=>{
        let para = document.getElementById("para");
        para.innerHTML=null;
        let p1 = document.createElement("h4");
        let p2 = document.createElement("h4");
        p1.innerText="AUT 122/7 (20)";
     
        p2.innerText="GER 125/7 (19.4)";
       
        let status = document.createElement("p");
        status.innerText = "Germany won by 3 wkts";
        // let player = document.createElement("p");
        // player.innerText="PLAYER OF THE MATCH";
    
        let name = document.createElement("h5");
        name.setAttribute("class","name");
        name.innerText="Teams:";
        let para1 = document.createElement("h6");
        para1.innerHTML="<b>Germany</b> (Playing XI): Talha Khan, Sachin Mandy Gangareddy(w), Abdul Samad Stanikzai, Abdul Rahimzei, Shoaib Azam Khan, Walter Behr, Muslim Yar, Venkatraman Ganesan(c), Nooruddin Mujadady, Vishnu Elam Bharathi, Ghulam Ahmadi";
     
        let para2 = document.createElement("h6");
        para2.innerHTML="<b>Austria</b> (Playing XI): Abdullah Akbarjan, Mehar Cheema(w), Itibarshah Deedar, Iqbal Hossain, Aqib Javed Iqbal, Shahil Momin, Amit Nathwani, Razmal Shigiwal(c), Mark Simpson Parker, Sahel Zadran, Armaan Randhawa";
        para.append(p1,p2,status,name,para1,para2);
    }
    
    commentry();
}


if(data.index===10){
    document.querySelector(".heading").innerHTML=null
    let title = document.createElement("h1");
    title.innerText="Pakistan vs West Indies, 3rd ODI (Rescheduled match) - Live Cricket Score, Commentary";
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    p1.innerHTML="<b>Series:</b> West Indies tour of Pakistan, 2021-22";
    let p2 = document.createElement("p");
    p2.innerHTML="<b>Venue:</b> Multan Cricket Stadium, Multan";
    let p3 = document.createElement("p");
    p3.innerHTML="<b>Date & Time:</b> Jun 12, 04:00 PM LOCAL";
    div.append(p1,p2,p3);
    document.querySelector(".heading").append(title,div);
    let commentry = ()=>{
        let para = document.getElementById("para");
        para.innerHTML=null;
        let p1 = document.createElement("h4");
        let p2 = document.createElement("h4");
        p1.innerText="PAK 269/9 (48)";
     
        p2.innerText="WI 216 (37.2)";
       
        let status = document.createElement("p");
        status.innerText = "Pakistan won by 53 runs (DLS method)";
        let player = document.createElement("p");
        player.innerText="PLAYER OF THE MATCH";
    
        let name = document.createElement("h5");
        name.setAttribute("class","name");
        name.innerText="Shadab Khan";
        let para1 = document.createElement("h6");
        para1.innerHTML="The middle-order collapses in back-to-back games could be an area of concern for Pakistan, however they'll be pleased with the way their lower-order bailed them out of trouble in both matches. The first ODI went down to the wire but the next two weren't that close - courtesy West Indies' below-par batting performances. Pooran's captaincy stint kicked off with a 3-0 series win over Netherlands less than two weeks ago and his team has now been humbled by the same margin. They are still an inexperienced side and they'd have learnt a lot from this experience. It's time to bring the curtains down on this series. Hope you enjoyed our coverage. The action shifts to red-ball cricket for the Caribbean side, with the first Test between West Indies and Bangladesh commencing on Thursday. See you there. Until then, it's goodbye and good night...";
     
        let para2 = document.createElement("h6");
        para2.innerHTML="<b>Babar Azam, Pakistan captain:</b> Whatever we planned as a team, we executed. We are giving our 100% in all three facets of the game. As a team, the way we played the second match - Nawaz's bowling performance was vital, that's the best performance. We tested out our bench strength and tried different combinations. There's always room for improvement. We need to fare better with the new ball and also the fielding could be better. Hope we learn from our mistakes. I try to play positive cricket. We had different conditions in all three games, partnerships are the key. Thank you Multan crowd for supporting us.";
        let para3 = document.createElement("h6");
        para3.innerHTML="<b>Nicholas Pooran, West Indies captain:</b> The last two games disappointing for us. The first game, we did well as a team. Going forward that's the template. We'll learn a lot from this series. (Akeal) He is working really hard. He says everyone that he's a batsman as well. Well played, Akeal. It's been tough here, I am really proud of the players how they took the challenge. Couple of days for the Bangladesh series, we are looking forward to that. (Multan crowd) They have been amazing, we love the fans. It's a treat. They support good cricket and that's appreciated.";
        let para4 = document.createElement("h6");
        para4.innerHTML="<b>Shadab Khan, Player of the Match:</b> It's tough after an injury, but I have done well in the last two games with both bat and ball. The talk with Khushdil was to take it as deep as possible. Glad that we were able to execute that. I bowled better in the first two games than today. Hopefully I'll be able to improve.";
        para.append(p1,p2,status,player,name,para1,para2,para3,para4);
    }
    
    commentry();
}
