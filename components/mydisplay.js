
    let Display= (data)=>{

        document.querySelector("#live_score").innerHTML=""
      //  
      data.forEach(function (elem){
        // console.log(elem)
       
          if(elem.seriesAdWrapper!==undefined)
          {
            
              let div=document.createElement("div")
              div.setAttribute("id","seriesName")
              let h1=document.createElement("h1")
          
              h1.innerText=elem.seriesAdWrapper.seriesName.toUpperCase()
      
              let match=document.createElement("h4")
              match.innerText=elem.seriesAdWrapper.matches[0].matchInfo.team1.teamName+" vs "+elem.seriesAdWrapper.matches[0].matchInfo.team2.teamName+","+elem.seriesAdWrapper.matches[0].matchInfo.matchDesc
      
              let venue=document.createElement("p")
              venue.innerText=" at "+elem.seriesAdWrapper.matches[0].matchInfo.venueInfo.city+" "+elem.seriesAdWrapper.matches[0].matchInfo.venueInfo.ground
              let score_box=document.createElement("div")
              score_box.setAttribute("class","scoreCard")

             
              let win=document.createElement("p")
              win.innerText=elem.seriesAdWrapper.matches[0].matchInfo.status
              win.style.color="blue"
              let parts=document.querySelector("div")
              let live=document.createElement("p")
              live.innerText="live"
              live.style.color="blue"
              live.style.cursor="pointer"
              live.style.fontSize="14px"
              
              let scoreCard=document.createElement("p")
              scoreCard.innerText="Scorecard"
              scoreCard.style.color="blue"
              scoreCard.style.cursor="pointer"
              scoreCard.style.fontSize="14px"
             
            

              scoreCard.addEventListener("click",function(){
                scoreFun(elem)
              })

              
              
              console.log(elem.seriesAdWrapper.matches[0].matchScore.team1Score.inngs1.overs)
              if(elem.seriesAdWrapper.matches[0].matchScore.team1Score!==undefined){
                let overs=document.createElement("p")
                overs.innerText="("+elem.seriesAdWrapper.matches[0].matchScore.team1Score.inngs1.overs+" Ovs)"
                let team1Score=document.createElement("p")
                team1Score.innerText=elem.seriesAdWrapper.matches[0].matchInfo.team1.teamSName+"        "+elem.seriesAdWrapper.matches[0].matchScore.team1Score.inngs1.runs+"-"+elem.seriesAdWrapper.matches[0].matchScore.team1Score.inngs1.wickets+"("+elem.seriesAdWrapper.matches[0].matchScore.team1Score.inngs1.overs+" Ovs)"
                
              
                if(elem.seriesAdWrapper.matches[0].matchScore.team2Score!==undefined){
                    let team2Score=document.createElement("p")
                    team2Score.innerText=elem.seriesAdWrapper.matches[0].matchInfo.team2.teamSName+" "+elem.seriesAdWrapper.matches[0].matchScore.team2Score.inngs1.runs+"-"+elem.seriesAdWrapper.matches[0].matchScore.team2Score.inngs1.wickets+"  ("+elem.seriesAdWrapper.matches[0].matchScore.team2Score.inngs1.overs+" Ovs )"
                  //  parts.append(live,scoreCard)
                    score_box.append(team1Score,team2Score,win)
                      div.append(h1,match,venue,score_box,live,scoreCard)
                      document.querySelector("#live_score").append(div)
                  }
                  else{
                    score_box.append(team1Score,win)
                    div.append(h1,match,venue,score_box,live,scoreCard)
                    document.querySelector("#live_score").append(div)
                  }
              }


             
            
           
            else{
              score_box.append(win)
              div.append(h1,match,venue,score_box,live,scoreCard)
              document.querySelector("#live_score").append(div)
            }
           }
  })
  }
  function  scoreFun(elem){
    let id=elem.seriesAdWrapper.matches[0].matchInfo.matchId
   
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c246932465msh41f44622545ead5p16703ajsn017e47363c1a',
        'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
      }
    };
    
    fetch(`https://unofficial-cricbuzz.p.rapidapi.com/matches/get-scorecard?matchId=${id}`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        scoreDisplay(response)

      })
      .catch(err => console.error(err));

  }
  function scoreDisplay(data){
    document.querySelector("#live_score").innerHTML=""
    let div=document.createElement("div")
    let status=document.createElement("p")
    status.innerText=data.status
    status.style.fontSize="16px"
    status.style.color="blue"
   
    let batteam=document.createElement("p")
    batteam.innerText=data.scorecard[0].batTeamName+" innings  "+data.scorecard[0].score+"-"+data.scorecard[0].wickets+"("+data.scorecard[0].overs+")"
    let tab=document.createElement("div")
    tabDisplay(data.scorecard[0].batsman,tab)



    let batteam2=document.createElement("p")
    batteam2.innerText=data.scorecard[1].batTeamName+" innings "+data.scorecard[1].score+"-"+data.scorecard[1].wickets+"("+data.scorecard[1].overs+")"
    let tab2=document.createElement("div")
    tabDisplay(data.scorecard[1].batsman,tab2)

    div.append(status,batteam,tab,batteam2,tab2)
    document.querySelector("#live_score").append(div)
  }
  function tabDisplay(data,tab){
    let table = document.createElement('table');
    // table.setAttribute("id","tab")
    let thead = document.createElement('thead');
    thead.setAttribute("id","head_table")
    let tbody = document.createElement('tbody');

    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
   
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Batters";
    
  
    let heading_2 = document.createElement('th');
    // heading_2.innerHTML = "";
   
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "R";
   
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "B";
    
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "4s";
   
    let heading_6 = document.createElement('th');
    heading_6.innerHTML = "6s";
  
    let heading_7 = document.createElement('th');
    heading_7.innerHTML = "SR";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    row_1.appendChild(heading_6);
    row_1.appendChild(heading_7);
    thead.appendChild(row_1);


    data.forEach(function (elem){
      let row_2 = document.createElement('tr');
      let row_2_data_1 = document.createElement('td');
      row_2_data_1.innerHTML = elem.name||"";
      row_2_data_1.style.color="blue"
      let row_2_data_2 = document.createElement('td');
      row_2_data_2.innerHTML = elem.outDec||"";
      let row_2_data_3 = document.createElement('td');
      row_2_data_3.innerHTML = elem.runs||"";
      let row_2_data_4 = document.createElement('td');
      row_2_data_4.innerHTML = elem.balls||"";
      let row_2_data_5 = document.createElement('td');
      row_2_data_5.innerHTML = elem.fours||"";
      let row_2_data_6 = document.createElement('td');
      row_2_data_6.innerHTML = elem.sixes||"";
      let row_2_data_7 = document.createElement('td');
      row_2_data_7.innerHTML = elem.strkRate||"";
     
  
      row_2.appendChild(row_2_data_1);
      row_2.appendChild(row_2_data_2);
      row_2.appendChild(row_2_data_3);
      row_2.appendChild(row_2_data_4);
      row_2.appendChild(row_2_data_5);
      row_2.appendChild(row_2_data_6);
      row_2.appendChild(row_2_data_7);
      tbody.appendChild(row_2);
      
    })
   
    table.appendChild(thead);
    table.appendChild(tbody);
    tab.append(table)

  }



  let search = (query) => {
    // let query = document.querySelector("#query").value;
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=AIzaSyCTHsb9uRrPk_oH7_spt8jvWRRrZY9viO8`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result.items);
        VDisplay(result.items);
      })
      // .catch((err)=>{
      //     console.log("error")
      // })
  };
  function VDisplay(data) {
  data.forEach(({id:{videoId},snippet:{title,thumbnails:{default:{url}}}})=>{
    let card = document.createElement("div");
    let iframe=document.createElement("iframe")
    iframe.src=`https://www.youtube.com/embed/${videoId}` 
    iframe.allow="fullscreen" 
    let image = document.createElement("img");
    image.src =url;
    let t = document.createElement("p");
        t.innerText = title; 
    card.append(iframe,t)
    document.querySelector("#articals").append(card); 
    let video={
        title,
        videoId
    }
    
  
  })
  }

 
  export  {Display,search}
  
  