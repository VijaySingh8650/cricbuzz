import navbar from "../components/navbar.js";
let navbarAppend = document.getElementById("navbar1");
navbarAppend.innerHTML=navbar();


import navbar2 from "../components/navbar2.js";
let navbarAppend2 = document.getElementById("navbar2");
navbarAppend2.innerHTML=navbar2();




const url = 'https://unofficial-cricbuzz.p.rapidapi.com/matches/list?matchState=recent';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '860638e7b6msha287fc8c1d2c4eap1b87bfjsna73ad11215ea',
    'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
  }
};
let func = async ()=>{
    try{

        let data = await fetch(url,options);
        let res = await data.json();
        // console.log(res.typeMatches[0].seriesAdWrapper);
        fillThefeturedMatches(res.typeMatches[0].seriesAdWrapper);
    }catch(error){
        console.log(error);
    }
    
}
func();



//defining the fillThefeturedMatches function 
let fillThefeturedMatches=(array)=>{
    console.log(array);
    array.map(function(ele,index){
        if(index%2===0){
            let first_match = ele.seriesMatches.matches[0].matchInfo;
            let status = document.createElement("a");
            status.innerText=first_match.status;
            status.setAttribute("class","anchortag");
            let name1 = document.createElement("a");
            name1.innerText=first_match.team1.teamSName;
            let name2 = document.createElement("a");
            name2.innerText=first_match.team2.teamSName;
            // console.log(status.innerText,name1.innerText,name2.innerText);
            let div1 = document.createElement("div");
            let div2 = document.createElement("div");
            let div3 = document.createElement("div");
            let div4 = document.createElement("div");
            let score_match = ele.seriesMatches.matches[0].matchScore;
            let name1_score = document.createElement("a");
            name1_score.innerText=score_match.team1Score.inngs1.runs;
            let name1_wicket = document.createElement("a");
            name1_wicket.innerText=`(${score_match.team1Score.inngs1.overs})`;


            let name2_score = document.createElement("a");
            name2_score.innerText=score_match.team2Score.inngs1.runs;
            let name2_wicket = document.createElement("a");
            name2_wicket.innerText=`(${score_match.team2Score.inngs1.overs})`;
            let DIV_first = document.createElement("div");
            let DIV_second = document.createElement("div");
            div1.append(name1);
            div2.append(name1_score,name1_wicket);
            DIV_first.append(div1,div2);
            div3.append(name2);
            div4.append(name2_score,name2_wicket);
            DIV_second.append(div3,div4);
            let div_append=document.createElement("div");
            div_append.append(DIV_first,DIV_second,status);
            document.getElementById("live_featured_matches").append(div_append);
            console.log(DIV_first,DIV_second);
        }
    })
}