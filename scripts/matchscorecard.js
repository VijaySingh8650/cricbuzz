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


document.getElementById("commentary").addEventListener("click",function(){
    window.location.href= "matchcommentary.html";
})

let scorecard = document.getElementById("scorecard");
scorecard.style.color="#009270";
scorecard.style.marginLeft="10px";
scorecard.style.fontSize="15px";
scorecard.style.fontWeight="700";
scorecard.style.borderBottom="3px solid #009270";





let data = JSON.parse(localStorage.getItem("index"));

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
        
     return ` <p id="won">India won by 48 runs</p>
     <div id="teams">
      <div class="teamfirst">
          <p>
              India Innings
          </p>
          <p>
              179-5 (20 Ov)
          </p>
      </div>
      <table>
          <thead>
              <tr>
                  <th>
                      Batter
                  </th>
                  <th>
                      R
                      
                  </th>
                  <th>
                      B
                  </th>
                  <th>
                      4s
                  </th>
                  <th>
                      6s
                  </th>
                  <th>
                      SR
                  </th>
              </tr>
              
          </thead>
          <tbody>
              <tr>
                  <td>
                      Ruturaj Gaikwad (c and b Maharaj)
                  </td>
                  <td>
                      57
                  </td>
                  <td>35</td>
                  <td>7</td>
                  <td>2</td>
                  <td>162.86</td>
              </tr>
             
              <tr>
                  <td>
                      Ishan Kishan (c R Hendricks b Pretorius)
                  </td>
                  <td>
                      54
                  </td>
                  <td>35</td>
                  <td>5</td>
                  <td>2</td>
                  <td>154.29</td>
              </tr>
              <tr>
                  <td>
                      Shreyas Iyer (c Nortje b Shamsi)
                  </td>
                  <td>
                      14
                  </td>
                  <td>11</td>
                  <td>0</td>
                  <td>2</td>
                  <td>127.27</td>
              </tr>
              <tr>
                  <td>
                      Pant (c & wk) (c Bavuma b Pretorius)
                  </td>
                  <td>
                      6
                  </td>
                  <td>8</td>
                  <td>0</td>
                  <td>0</td>
                  <td>75.00</td>
              </tr>
              <tr>
                  <td>
                      Hardik Pandya (not out)
                  </td>
                  <td>
                      31
                  </td>
                  <td>21</td>
                  <td>4</td>
                  <td>0</td>
                  <td>147.62</td>
              </tr>
              <tr>
                  <td>
                      Karthik (c Parnell b Rabada)
                  </td>
                  <td>
                      6
                  </td>
                  <td>8</td>
                  <td>0</td>
                  <td>0</td>
                  <td>75.00</td>
              </tr>
              <tr>
                  <td>
                      Axar (not out)
                  </td>
                  <td>
                      5
                  </td>
                  <td>2</td>
                  <td>1</td>
                  <td>0</td>
                  <td>250.00</td>
              </tr>
            
              
          </tbody>
      </table>
      <div class="extra">
          <p>
              Extras 
          </p>
          <p>
              6 (b 0, lb 4, w 2, nb 0, p 0)
          </p>
      </div>
      <div class="total">
          <p>
              Total 
          </p>
          <p>
              179 (5 wkts, 20 Ov)
          </p>
      </div>
      <div class="notBat">
          <p>Did not Bat</p>
          <p>Harshal Patel , Bhuvneshwar , Chahal , Avesh Khan</p>
      </div>
      <div class="fall">

          <p>Fall of Wickets</p>
      </div>
      <p>97-1 (Ruturaj Gaikwad, 9.6), 128-2 (Shreyas Iyer, 12.6), 131-3 (Ishan Kishan, 13.4), 143-4 (Pant, 15.5), 158-5 (Karthik, 18.3)</p>
     
     <table>
      <thead>
          <tr>
              <th>Bowler</th>
              <th>O</th>
              <th>M</th>
              <th>R</th>
              <th>W</th>
              <th>NB</th>
              <th>WD</th>
              <th>ECO</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Rabada</td>
              <td>4</td>
              <td>0</td>
              <td>31</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>7.80</td>
          </tr>
          <tr>
              <td>Parnell</td>
              <td>4</td>
              <td>0</td>
              <td>32</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>8.00</td>
          </tr>
          <tr>
              <td>Nortje</td>
              <td>2</td>
              <td>0</td>
              <td>23</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>11.50</td>
          </tr>
          <tr>
              <td>Pretorius</td>
              <td>4</td>
              <td>0</td>
              <td>29</td>
              <td>2</td>
              <td>0</td>
              <td>2</td>
              <td>7.20</td>
          </tr>
          <tr>
              <td>Shamsi</td>
              <td>4</td>
              <td>0</td>
              <td>36</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>9.00</td>
          </tr>
          <tr>
              <td>Maharaj</td>
              <td>2</td>
              <td>0</td>
              <td>24</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>12.00</td>
          </tr>
      </tbody>
     </table>
     <table>
      <thead>
          <tr>
              <th>Powerplays</th>
              <th>Overs</th>
              <th>Runs</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Mandatory</td>
              <td>0.1-6</td>
              <td>57</td>
          </tr>
      </tbody>
     </table>
  
     <div class="teamsecond">
      <p>
          South Africa Innings
      </p>
      <p>
          131-10 (19.1 Ov)
      </p>
  </div>
  <table>
      <thead>
          <tr>
              <th>
                  Batter
              </th>
              <th>
                  R
                  
              </th>
              <th>
                  B
              </th>
              <th>
                  4s
              </th>
              <th>
                  6s
              </th>
              <th>
                  SR
              </th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>
                  Temba Bavuma (c) (c Avesh Khan b Axar)
              </td>
              <td>
                  8
              </td>
              <td>10</td>
              <td>0</td>
              <td>0</td>
              <td>80.00</td>
          </tr>
          <tr>
              <td>
                  Reeza Hendricks (c Chahal b Harshal Patel)
              </td>
              <td>
                  23
              </td>
              <td>20</td>
              <td>2</td>
              <td>1</td>
              <td>115.00</td>
          </tr>
          <tr>
              <td>
                  Dwaine Pretorius (c Pant b Chahal)
              </td>
              <td>
                  20
              </td>
              <td>16</td>
              <td>2</td>
              <td>1</td>
              <td>125.00</td>
          </tr>
          <tr>
              <td>
                  Rassie van der Dussen (c Pant b Chahal)
              </td>
              <td>
                  1
              </td>
              <td>4</td>
              <td>0</td>
              <td>0</td>
              <td>25.00</td>
          </tr>
          <tr>
              <td>
                  Heinrich Klaasen (wk) (c Axar b Chahal)
              </td>
              <td>
                  29
              </td>
              <td>24</td>
              <td>3</td>
              <td>1</td>
              <td>120.83</td>
          </tr>
          <tr>
              <td>
                  David Miller (c Ruturaj Gaikwad b Harshal Patel)
              </td>
              <td>
                  3
              </td>
              <td>5</td>
              <td>0</td>
              <td>0</td>
              <td>60.00</td>
          </tr>
          <tr>
              <td>
                  Wayne Parnell (not out)
              </td>
              <td>
                  22
              </td>
              <td>18</td>
              <td>2</td>
              <td>0</td>
              <td>122.22</td>
          </tr>
          <tr>
              <td>
                  Kagiso Rabada (c Chahal b Harshal Patel)
              </td>
              <td>
                  9
              </td>
              <td>1</td>
              <td>2</td>
              <td>0</td>
              <td>112.50</td>
          </tr>
          <tr>
              <td>
                  Keshav Maharaj (c Karthik b Bhuvneshwar)
              </td>
              <td>
                  11
              </td>
              <td>8</td>
              <td>0</td>
              <td>1</td>
              <td>137.50</td>
          </tr>
          <tr>
              <td>
                  Anrich Nortje (run out (Pant/Bhuvneshwar))
              </td>
              <td>
                  0
              </td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>0.00</td>
          </tr>
          <tr>
              <td>
                  Tabraiz Shamsi (c Avesh Khan b Harshal Patel)
              </td>
              <td>
                  0
              </td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>0.00</td>
          </tr>
        
          
      </tbody>
  </table>
  <div class="extra">
      <p>
          Extras 
      </p>
      <p>
          5 (b 1, lb 1, w 3, nb 0, p 0)
      </p>
  </div>
  <div class="total">
      <p>
          Total 
      </p>
      <p>
          131 (10 wkts, 19.1 Ov)
      </p>
  </div>
  <div  class="fall">

      <p>Fall of Wickets</p>
  </div>
  <p>23-1 (Temba Bavuma, 3.6), 38-2 (Reeza Hendricks, 5.6), 40-3 (Rassie van der Dussen, 6.5), 57-4 (Dwaine Pretorius, 8.6), 71-5 (David Miller, 10.6), 100-6 (Heinrich Klaasen, 14.5), 113-7 (Kagiso Rabada, 16.4), 126-8 (Keshav Maharaj, 18.2), 131-9 (Anrich Nortje, 18.5), 131-10 (Tabraiz Shamsi, 19.1)</p>

  <table>
      <thead>
          <tr>
              <th>Bowler</th>
              <th>O</th>
              <th>M</th>
              <th>R</th>
              <th>W</th>
              <th>NB</th>
              <th>WD</th>
              <th>ECO</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Bhuvneshwar Kumar</td>
              <td>4</td>
              <td>0</td>
              <td>21</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>5.20</td>
          </tr>
          <tr>
              <td>Avesh Khan</td>
              <td>4</td>
              <td>0</td>
              <td>35</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>8.80</td>
          </tr>
          <tr>
              <td>Axar Patel</td>
              <td>4</td>
              <td>0</td>
              <td>28</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>7.00</td>
          </tr>
          <tr>
              <td>Yuzvendra Chahal</td>
              <td>4</td>
              <td>0</td>
              <td>20</td>
              <td>3</td>
              <td>0</td>
              <td>3</td>
              <td>5.00</td>
          </tr>
          <tr>
              <td>Harshal Patel</td>
              <td>3.1</td>
              <td>0</td>
              <td>25</td>
              <td>4</td>
              <td>0</td>
              <td>0</td>
              <td>7.90</td>
          </tr>

      </tbody>
     </table>
     <table>
      <thead>
          <tr>
              <th>Powerplays</th>
              <th>Overs</th>
              <th>Runs</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Mandatory</td>
              <td>0.1-6</td>
              <td>38</td>
          </tr>
      </tbody>
     </table>`;




        








  

      
    }
    document.getElementById("para").innerHTML= commentry();
}
if(data.index===2){
   
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
    let score=()=>{
        return `<p id="won">Australia won by 2 wkts (DLS method)</p>
        <div id="teams">
         <div class="teamfirst">
             <p>
                Sri Lanka Innings
             </p>
             <p>
                300-7 (50 Ov)
             </p>
         </div>
         <table>
             <thead>
                 <tr>
                     <th>
                         Batter
                     </th>
                     <th>
                         R
                         
                     </th>
                     <th>
                         B
                     </th>
                     <th>
                         4s
                     </th>
                     <th>
                         6s
                     </th>
                     <th>
                         SR
                     </th>
                 </tr>
                 
             </thead>
             <tbody>
                 <tr>
                     <td>
                        Gunathilaka (run out (Stoinis/Alex Carey))
                     </td>
                     <td>
                         55
                     </td>
                     <td>53</td>
                     <td>7</td>
                     <td>0</td>
                     <td>103.77</td>
                 </tr>
                
                 <tr>
                     <td>
                        Pathum Nissanka (c Finch b Agar)
                     </td>
                     <td>
                         56
                     </td>
                     <td>68</td>
                     <td>6</td>
                     <td>1</td>
                     <td>82.35</td>
                 </tr>
                 <tr>
                     <td>
                        Kusal Mendis (wk) (not out)
                     </td>
                     <td>
                         86
                     </td>
                     <td>87</td>
                     <td>8</td>
                     <td>1</td>
                     <td>98.85</td>
                 </tr>
                 <tr>
                     <td>
                        Dhananjaya de Silva (c Warner b Agar)
                     </td>
                     <td>
                         7
                     </td>
                     <td>17</td>
                     <td>0</td>
                     <td>0</td>
                     <td>41.18</td>
                 </tr>
                 <tr>
                     <td>
                        Asalanka (c Finch b Jhye Richardson)
                     </td>
                     <td>
                         37
                     </td>
                     <td>42</td>
                     <td>4</td>
                     <td>0</td>
                     <td>88.10</td>
                 </tr>
                 <tr>
                     <td>
                        Shanaka (c) (c Warner b Labuschagne)
                     </td>
                     <td>
                         6
                     </td>
                     <td>7</td>
                     <td>1</td>
                     <td>0</td>
                     <td>85.71</td>
                 </tr>
                 <tr>
                     <td>
                        C Karunaratne (c Alex Carey b Labuschagne)
                     </td>
                     <td>
                         7
                     </td>
                     <td>7</td>
                     <td>1</td>
                     <td>0</td>
                     <td>100.00</td>
                 </tr>
                 <tr>
                    <td>
                        W Hasaranga (c Jhye Richardson b Hazlewood)
                    </td>
                    <td>
                        37
                    </td>
                    <td>19</td>
                    <td>6</td>
                    <td>0</td>
                    <td>194.74</td>
                </tr>
               
                 
             </tbody>
         </table>
         <div class="extra">
             <p>
                 Extras 
             </p>
             <p>
                 9 (b 1, lb 2, w 6, nb 0, p 0)
             </p>
         </div>
         <div class="total">
             <p>
                 Total 
             </p>
             <p>
                300 (7 wkts, 50 Ov)
             </p>
         </div>
         <div class="notBat">
             <p>Did not Bat</p>
             <p>Chameera , D Wellalage , M Theekshana</p>
         </div>
         <div class="fall">
   
             <p>Fall of Wickets</p>
         </div>
         <p>115-1 (Gunathilaka, 19.4), 118-2 (Pathum Nissanka, 21.4), 134-3 (Dhananjaya de Silva, 25.5), 211-4 (Asalanka, 39.3), 240-5 (Shanaka, 43.3), 258-6 (C Karunaratne, 45.5), 300-7 (W Hasaranga, 49.6)</p>
        
        <table>
         <thead>
             <tr>
                 <th>Bowler</th>
                 <th>O</th>
                 <th>M</th>
                 <th>R</th>
                 <th>W</th>
                 <th>NB</th>
                 <th>WD</th>
                 <th>ECO</th>
             </tr>
         </thead>
         <tbody>
             <tr>
                 <td>Hazlewood</td>
                 <td>10</td>
                 <td>0</td>
                 <td>54</td>
                 <td>1</td>
                 <td>0</td>
                 <td>1</td>
                 <td>5.40</td>
             </tr>
             <tr>
                 <td>Maxwell</td>
                 <td>10</td>
                 <td>0</td>
                 <td>60</td>
                 <td>0</td>
                 <td>0</td>
                 <td>3</td>
                 <td>6.00</td>
             </tr>
             <tr>
                 <td>Cummins</td>
                 <td>8</td>
                 <td>1</td>
                 <td>48</td>
                 <td>0</td>
                 <td>0</td>
                 <td>1</td>
                 <td>6.00</td>
             </tr>
             <tr>
                 <td>Jhye Richardson</td>
                 <td>8</td>
                 <td>0</td>
                 <td>64</td>
                 <td>1</td>
                 <td>0</td>
                 <td>1</td>
                 <td>8.00</td>
             </tr>
             <tr>
                 <td>Agar</td>
                 <td>10</td>
                 <td>0</td>
                 <td>49</td>
                 <td>2</td>
                 <td>0</td>
                 <td>0</td>
                 <td>4.90</td>
             </tr>
             <tr>
                 <td>Stoinis</td>
                 <td>1</td>
                 <td>0</td>
                 <td>3</td>
                 <td>0</td>
                 <td>0</td>
                 <td>0</td>
                 <td>3.00</td>
             </tr>
             <tr>
                <td>Labuschagne</td>
                <td>3</td>
                <td>0</td>
                <td>19</td>
                <td>2</td>
                <td>0</td>
                <td>0</td>
                <td>6.30</td>
            </tr>
         </tbody>
        </table>
        <table>
         <thead>
             <tr>
                 <th>Powerplays</th>
                 <th>Overs</th>
                 <th>Runs</th>
             </tr>
         </thead>
         <tbody>
             <tr>
                 <td>Mandatory</td>
                 <td>0.1-6</td>
                 <td>56</td>
             </tr>
         </tbody>
        </table>
     
        <div class="teamsecond">
         <p>
            Australia Innings
         </p>
         <p>
            282-8 (42.3 Ov)
         </p>
     </div>
     <table>
         <thead>
             <tr>
                 <th>
                     Batter
                 </th>
                 <th>
                     R
                     
                 </th>
                 <th>
                     B
                 </th>
                 <th>
                     4s
                 </th>
                 <th>
                     6s
                 </th>
                 <th>
                     SR
                 </th>
             </tr>
         </thead>
         <tbody>
             <tr>
                 <td>
                    David Warner (lbw b M Theekshana)
                 </td>
                 <td>
                     0
                 </td>
                 <td>3</td>
                 <td>0</td>
                 <td>0</td>
                 <td>0.00</td>
             </tr>
             <tr>
                 <td>
                    Aaron Finch (c) (c Kusal Mendis b W Hasaranga)
                 </td>
                 <td>
                     44
                 </td>
                 <td>41</td>
                 <td>5</td>
                 <td>1</td>
                 <td>107.32</td>
             </tr>
             <tr>
                 <td>
                    Steven Smith (b D Wellalage)
                 </td>
                 <td>
                     53
                 </td>
                 <td>60</td>
                 <td>5</td>
                 <td>0</td>
                 <td>88.33</td>
             </tr>
             <tr>
                 <td>
                    Marnus Labuschagne (c D Wellalage b Shanaka)
                 </td>
                 <td>
                     24
                 </td>
                 <td>31</td>
                 <td>1</td>
                 <td>0</td>
                 <td>77.42</td>
             </tr>
             <tr>
                 <td>
                    Marcus Stoinis (b W Hasaranga)
                 </td>
                 <td>
                     44
                 </td>
                 <td>31</td>
                 <td>4</td>
                 <td>2</td>
                 <td>141.94</td>
             </tr>
             <tr>
                 <td>
                    Alex Carey (wk) (lbw b W Hasaranga)
                 </td>
                 <td>
                     21
                 </td>
                 <td>22</td>
                 <td>1</td>
                 <td>0</td>
                 <td>95.45</td>
             </tr>
             <tr>
                 <td>
                    Glenn Maxwell(not out)
                 </td>
                 <td>
                     80
                 </td>
                 <td>51</td>
                 <td>6</td>
                 <td>6</td>
                 <td>156.86</td>
             </tr>
             <tr>
                 <td>
                    Pat Cummins (b W Hasaranga)
                 </td>
                 <td>
                     0
                 </td>
                 <td>2</td>
                 <td>0</td>
                 <td>0</td>
                 <td>0.00</td>
             </tr>
             <tr>
                 <td>
                    Ashton Agar (lbw b D Wellalage)
                 </td>
                 <td>
                     3
                 </td>
                 <td>11</td>
                 <td>0</td>
                 <td>0</td>
                 <td>27.27</td>
             </tr>
             <tr>
                 <td>
                    Jhye Richardson (not out)
                 </td>
                 <td>
                     1
                 </td>
                 <td>3</td>
                 <td>0</td>
                 <td>0</td>
                 <td>33.33</td>
             </tr>
           
             
         </tbody>
     </table>
     <div class="extra">
         <p>
             Extras 
         </p>
         <p>
            12 (b 6, lb 1, w 5, nb 0, p 0)
         </p>
     </div>
     <div class="total">
         <p>
             Total 
         </p>
         <p>
            282 (8 wkts, 42.3 Ov)
         </p>
     </div>
     <div class="notBat"> 
        <p>Did not Bat</p>
         <p>Josh Hazlewood</p>
     </div>
     <div  class="fall">
   
         <p>Fall of Wickets</p>
     </div>
     <p>5-1 (David Warner, 1.1), 72-2 (Aaron Finch, 12.3), 126-3 (Marnus Labuschagne, 21.4), 141-4 (Steven Smith, 24.3), 189-5 (Marcus Stoinis, 29.6), 228-6 (Alex Carey, 35.1), 228-7 (Pat Cummins, 35.3), 254-8 (Ashton Agar, 39.3)</p>
   
     <table>
         <thead>
             <tr>
                 <th>Bowler</th>
                 <th>O</th>
                 <th>M</th>
                 <th>R</th>
                 <th>W</th>
                 <th>NB</th>
                 <th>WD</th>
                 <th>ECO</th>
             </tr>
         </thead>
         <tbody>
             <tr>
                 <td>Dushmantha Chameera</td>
                 <td>7.3</td>
                 <td>0</td>
                 <td>60</td>
                 <td>0</td>
                 <td>0</td>
                 <td>4</td>
                 <td>8.00</td>
             </tr>
             <tr>
                 <td>Maheesh Theekshana</td>
                 <td>8</td>
                 <td>0</td>
                 <td>51</td>
                 <td>1</td>
                 <td>0</td>
                 <td>1</td>
                 <td>6.40</td>
             </tr>
             <tr>
                 <td>Chamika Karunaratne</td>
                 <td>4</td>
                 <td>0</td>
                 <td>16</td>
                 <td>0</td>
                 <td>0</td>
                 <td>0</td>
                 <td>4.00</td>
             </tr>
             <tr>
                 <td>Wanindu Hasaranga</td>
                 <td>9</td>
                 <td>0</td>
                 <td>58</td>
                 <td>4</td>
                 <td>0</td>
                 <td>0</td>
                 <td>6.40</td>
             </tr>
             <tr>
                 <td>Dunith Wellalage</td>
                 <td>7</td>
                 <td>0</td>
                 <td>49</td>
                 <td>4</td>
                 <td>0</td>
                 <td>0</td>
                 <td>7.00</td>
             </tr>
             <tr>
                <td>Dhananjaya de Silva</td>
                <td>3</td>
                <td>0</td>
                <td>14</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>4.70</td>
            </tr>
            <tr>
                <td>Dasun Shanaka (c)</td>
                <td>4</td>
                <td>0</td>
                <td>27</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>6.80</td>
            </tr>
   
         </tbody>
        </table>
        <table>
         <thead>
             <tr>
                 <th>Powerplays</th>
                 <th>Overs</th>
                 <th>Runs</th>
             </tr>
         </thead>
         <tbody>
             <tr>
                 <td>Mandatory</td>
                 <td>0.1-10</td>
                 <td>57</td>
             </tr>
         </tbody>
        </table>`;
    }
    document.getElementById("para").innerHTML= score();
    
    
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
    let score = ()=>{
        return ` <p id="won">Nepal won by 7 wkts</p>
        <div id="teams">
         <div class="teamfirst">
             <p>
                Oman Innings
             </p>
             <p>
                163-10 (46.5 Ov)
             </p>
         </div>
         <table>
             <thead>
                 <tr>
                     <th>
                         Batter
                     </th>
                     <th>
                         R
                         
                     </th>
                     <th>
                         B
                     </th>
                     <th>
                         4s
                     </th>
                     <th>
                         6s
                     </th>
                     <th>
                         SR
                     </th>
                 </tr>
                 
             </thead>
             <tbody>
                 <tr>
                     <td>
                        Jatinder Singh (b Lamichhane)
                     </td>
                     <td>
                         23
                     </td>
                     <td>36</td>
                     <td>3</td>
                     <td>0</td>
                     <td>63.89</td>
                 </tr>
                
                 <tr>
                     <td>
                        Kashyap (b Karan KC)
                     </td>
                     <td>
                         2
                     </td>
                     <td>9</td>
                     <td>0</td>
                     <td>0</td>
                     <td>22.22</td>
                 </tr>
                 <tr>
                    <td>
                        Shoaib Khan (c Dev Khanal b Karan KC)
                    </td>
                    <td>
                        2
                    </td>
                    <td>9</td>
                    <td>0</td>
                    <td>0</td>
                    <td>22.22</td>
                </tr>
                 <tr>
                     <td>
                        Zeeshan Maqsood (c) (lbw b Dipendra Singh)
                     </td>
                     <td>
                         52
                     </td>
                     <td>100</td>
                     <td>3</td>
                     <td>0</td>
                     <td>52.00</td>
                 </tr>
                 <tr>
                     <td>
                        Ayaan Khan (b Lamichhane)
                     </td>
                     <td>
                         0
                     </td>
                     <td>2</td>
                     <td>0</td>
                     <td>0</td>
                     <td>0.00</td>
                 </tr>
                 <tr>
                     <td>
                        Khawar Ali (lbw b Lamichhane)
                     </td>
                     <td>
                         1
                     </td>
                     <td>6</td>
                     <td>0</td>
                     <td>0</td>
                     <td>16.67</td>
                 </tr>
                 <tr>
                     <td>
                        Sandeep Goud (c Lamichhane b Karan KC)
                     </td>
                     <td>
                         47
                     </td>
                     <td>91</td>
                     <td>3</td>
                     <td>1</td>
                     <td>51.65</td>
                 </tr>
                 <tr>
                     <td>
                        Naseem Khushi (wk) (c Sompal Kami b Karan KC)
                     </td>
                     <td>
                         10
                     </td>
                     <td>11</td>
                     <td>1</td>
                     <td>0</td>
                     <td>90.91</td>
                 </tr>
                 <tr>
                    <td>
                        Fayyaz Butt (not out)
                    </td>
                    <td>
                        13
                    </td>
                    <td>12</td>
                    <td>2</td>
                    <td>0</td>
                    <td>108.33</td>
                </tr>
                <tr>
                    <td>
                        Kaleemullah (lbw b Karan KC)
                    </td>
                    <td>
                        1
                    </td>
                    <td>3</td>
                    <td>0</td>
                    <td>0</td>
                    <td>33.33</td>
                </tr>
                <tr>
                    <td>
                        Bilal Khan (b Sompal Kami)
                    </td>
                    <td>
                        0
                    </td>
                    <td>3</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0.00</td>
                </tr>
               
                 
             </tbody>
         </table>
         <div class="extra">
             <p>
                 Extras 
             </p>
             <p>
                12 (b 0, lb 1, w 10, nb 1, p 0)
             </p>
         </div>
         <div class="total">
             <p>
                 Total 
             </p>
             <p>
                163 (10 wkts, 46.5 Ov)
             </p>
         </div>
         
         
         <div class="fall">
   
             <p>Fall of Wickets</p>
         </div>
         <p>11-1 (Kashyap, 4.2), 15-2 (Shoaib Khan, 6.2), 40-3 (Jatinder Singh, 12.5), 47-4 (Ayaan Khan, 14.3), 49-5 (Khawar Ali, 16.1), 132-6 (Zeeshan Maqsood, 40.2), 146-7 (Sandeep Goud, 43.1), 157-8 (Naseem Khushi, 45.2), 160-9 (Kaleemullah, 45.6), 163-10 (Bilal Khan, 46.5)</p>
        
        <table>
         <thead>
             <tr>
                 <th>Bowler</th>
                 <th>O</th>
                 <th>M</th>
                 <th>R</th>
                 <th>W</th>
                 <th>NB</th>
                 <th>WD</th>
                 <th>ECO</th>
             </tr>
         </thead>
         <tbody>
             <tr>
                 <td>Karan KC</td>
                 <td>9</td>
                 <td>0</td>
                 <td>33</td>
                 <td>5</td>
                 <td>0</td>
                 <td>1</td>
                 <td>3.70</td>
             </tr>
             <tr>
                 <td>Sompal Kami</td>
                 <td>7.5</td>
                 <td>1</td>
                 <td>24</td>
                 <td>1</td>
                 <td>0</td>
                 <td>0</td>
                 <td>3.10</td>
             </tr>
             <tr>
                 <td>Lamichhane (c)</td>
                 <td>10</td>
                 <td>0</td>
                 <td>47</td>
                 <td>3</td>
                 <td>0</td>
                 <td>6</td>
                 <td>4.70</td>
             </tr>
             <tr>
                 <td>Mohammad Aadil Alam</td>
                 <td>10</td>
                 <td>2</td>
                 <td>22</td>
                 <td>0</td>
                 <td>1</td>
                 <td>1</td>
                 <td>2.20</td>
             </tr>
             <tr>
                 <td>Sagar Dhakal</td>
                 <td>5</td>
                 <td>0</td>
                 <td>20</td>
                 <td>0</td>
                 <td>0</td>
                 <td>0</td>
                 <td>4.00</td>
             </tr>
             <tr>
                 <td>Dipendra Singh</td>
                 <td>3</td>
                 <td>0</td>
                 <td>9</td>
                 <td>1</td>
                 <td>0</td>
                 <td>0</td>
                 <td>3.00</td>
             </tr>
             <tr>
                <td>Aarif Sheikh (wk)</td>
                <td>2</td>
                <td>0</td>
                <td>7</td>
                <td>0</td>
                <td>0</td>
                <td>2</td>
                <td>3.50</td>
            </tr>
         </tbody>
        </table>
        <table>
         <thead>
             <tr>
                 <th>Powerplays</th>
                 <th>Overs</th>
                 <th>Runs</th>
             </tr>
         </thead>
         <tbody>
             <tr>
                 <td>Mandatory</td>
                 <td>0.1-10</td>
                 <td>32</td>
             </tr>
         </tbody>
        </table>
     
        <div class="teamsecond">
         <p>
            Nepal Innings
         </p>
         <p>
            167-3 (33.1 Ov)
         </p>
     </div>
     <table>
         <thead>
             <tr>
                 <th>
                     Batter
                 </th>
                 <th>
                     R
                     
                 </th>
                 <th>
                     B
                 </th>
                 <th>
                     4s
                 </th>
                 <th>
                     6s
                 </th>
                 <th>
                     SR
                 </th>
             </tr>
         </thead>
         <tbody>
             <tr>
                 <td>
                    Kushal Bhurtel (c Zeeshan Maqsood b Fayyaz Butt)
                 </td>
                 <td>
                     56
                 </td>
                 <td>75</td>
                 <td>5</td>
                 <td>0</td>
                 <td>74.67</td>
             </tr>
             <tr>
                 <td>
                    Aasif Sheikh (c Shoaib Khan b Fayyaz Butt)
                 </td>
                 <td>
                     62
                 </td>
                 <td>86</td>
                 <td>7</td>
                 <td>1</td>
                 <td>72.09</td>
             </tr>
             <tr>
                 <td>
                    Dev Khanal (lbw b Khawar Ali)
                 </td>
                 <td>
                     10
                 </td>
                 <td>12</td>
                 <td>1</td>
                 <td>0</td>
                 <td>83.33</td>
             </tr>
             <tr>
                 <td>
                    Rohit Paudel (not out)
                 </td>
                 <td>
                     26
                 </td>
                 <td>21</td>
                 <td>1</td>
                 <td>1</td>
                 <td>123.81</td>
             </tr>
             <tr>
                 <td>
                    Dipendra Singh Airee (not out)
                 </td>
                 <td>
                     6
                 </td>
                 <td>5</td>
                 <td>1</td>
                 <td>0</td>
                 <td>120.00</td>
             </tr>
           
           
             
         </tbody>
     </table>
     <div class="extra">
         <p>
             Extras 
         </p>
         <p>
            7 (b 0, lb 2, w 5, nb 0, p 0)
         </p>
     </div>
     <div class="total">
         <p>
             Total 
         </p>
         <p>
            167 (3 wkts, 33.1 Ov)
         </p>
     </div>
     <div class="notBat"> 
        <p>Did not Bat</p>
         <p>Mohammad Aadil Alam , Aarif Sheikh (wk) , Karan KC , Sandeep Lamichhane (c) , Sompal Kami , Sagar Dhakal</p>
     </div>
     <div  class="fall">
   
         <p>Fall of Wickets</p>
     </div>
     <p>114-1 (Kushal Bhurtel, 23.5), 127-2 (Dev Khanal, 26.6), 138-3 (Aasif Sheikh, 29.4)</p>
   
     <table>
         <thead>
             <tr>
                 <th>Bowler</th>
                 <th>O</th>
                 <th>M</th>
                 <th>R</th>
                 <th>W</th>
                 <th>NB</th>
                 <th>WD</th>
                 <th>ECO</th>
             </tr>
         </thead>
         <tbody>
             <tr>
                 <td>Bilal Khan</td>
                 <td>4.1</td>
                 <td>0</td>
                 <td>28</td>
                 <td>0</td>
                 <td>0</td>
                 <td>2</td>
                 <td>6.70</td>
             </tr>
             <tr>
                 <td>Kaleemullah</td>
                 <td>3</td>
                 <td>0</td>
                 <td>17</td>
                 <td>0</td>
                 <td>0</td>
                 <td>0</td>
                 <td>5.70</td>
             </tr>
             <tr>
                 <td>Zeeshan Maqsood (c)</td>
                 <td>5</td>
                 <td>1</td>
                 <td>19</td>
                 <td>0</td>
                 <td>0</td>
                 <td>0</td>
                 <td>3.80</td>
             </tr>
             <tr>
                 <td>Ayaan Khan</td>
                 <td>5</td>
                 <td>1</td>
                 <td>21</td>
                 <td>0</td>
                 <td>0</td>
                 <td>0</td>
                 <td>4.20</td>
             </tr>
             <tr>
                 <td>Khawar Ali</td>
                 <td>9</td>
                 <td>1</td>
                 <td>47</td>
                 <td>1</td>
                 <td>0</td>
                 <td>0</td>
                 <td>5.20</td>
             </tr>
             <tr>
                <td>Fayyaz Butt</td>
                <td>7</td>
                <td>0</td>
                <td>33</td>
                <td>2</td>
                <td>0</td>
                <td>3</td>
                <td>4.70</td>
            </tr>
           
   
         </tbody>
        </table>
        <table>
         <thead>
             <tr>
                 <th>Powerplays</th>
                 <th>Overs</th>
                 <th>Runs</th>
             </tr>
         </thead>
         <tbody>
             <tr>
                 <td>Mandatory</td>
                 <td>0.1-10</td>
                 <td>47</td>
             </tr>
         </tbody>
        </table> `;
    }
   

    document.getElementById("para").innerHTML= score();
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

   let score=()=>{
    return `<p id="won">Belgium won by 122 runs</p>
    <div id="teams">
     <div class="teamfirst">
         <p>
           BEL Innings
         </p>
         <p>
            162-10 (20 Ov)
         </p>
     </div>
     <table>
         <thead>
             <tr>
                 <th>
                     Batter
                 </th>
                 <th>
                     R
                     
                 </th>
                 <th>
                     B
                 </th>
                 <th>
                     4s
                 </th>
                 <th>
                     6s
                 </th>
                 <th>
                     SR
                 </th>
             </tr>
             
         </thead>
         <tbody>
             <tr>
                 <td>
                    Muhammad Muneeb (c Aaftab Alam Khan b Bilal Muhammad)
                 </td>
                 <td>
                     11
                 </td>
                 <td>12</td>
                 <td>2</td>
                 <td>0</td>
                 <td>91.67</td>
             </tr>
            
             <tr>
                 <td>
                    Aziz Mohammad (lbw b Bikram Arora)
                 </td>
                 <td>
                     35
                 </td>
                 <td>31</td>
                 <td>6</td>
                 <td>0</td>
                 <td>112.90</td>
             </tr>
             <tr>
                <td>
                    Maqsood Ahmad (c Gopal Chaturvedi b Imran Ameer)
                </td>
                <td>
                    29
                </td>
                <td>21</td>
                <td>5</td>
                <td>0</td>
                <td>138.10</td>
            </tr>
             <tr>
                 <td>
                    Shaheryar Butt (wk) (c Aaftab Alam Khan b Imran Ameer)
                 </td>
                 <td>
                     2
                 </td>
                 <td>4</td>
                 <td>0</td>
                 <td>0</td>
                 <td>50.00</td>
             </tr>
             <tr>
                 <td>
                    Sunny Sheikh (c) (c Gopal Chaturvedi b Bilal Muhammad)
                 </td>
                 <td>
                     16
                 </td>
                 <td>11</td>
                 <td>2</td>
                 <td>0</td>
                 <td>145.45</td>
             </tr>
             <tr>
                 <td>
                    Saber Zakhil (b Bilal Muhammad)
                 </td>
                 <td>
                     30
                 </td>
                 <td>14</td>
                 <td>2</td>
                 <td>3</td>
                 <td>214.29</td>
             </tr>
             <tr>
                 <td>
                    Shagharai Sefat (c Gopal Chaturvedi b Varun Thamotharam)
                 </td>
                 <td>
                     2
                 </td>
                 <td>4</td>
                 <td>0</td>
                 <td>0</td>
                 <td>50.00</td>
             </tr>
             <tr>
                 <td>
                    Burhan Niaz (b Bilal Muhammad)
                 </td>
                 <td>
                     0
                 </td>
                 <td>3</td>
                 <td>0</td>
                 <td>0</td>
                 <td>0.00</td>
             </tr>
             <tr>
                <td>
                    Khalid Ahmadi (run out (Aaftab Alam Khan))
                </td>
                <td>
                    11
                </td>
                <td>14</td>
                <td>0</td>
                <td>0</td>
                <td>78.57</td>
            </tr>
            <tr>
                <td>
                    Murid Ekrami (c Ryan Bastiansz b Jitesh Patel)
                </td>
                <td>
                    0
                </td>
                <td>2</td>
                <td>0</td>
                <td>0</td>
                <td>0.00</td>
            </tr>
            <tr>
                <td>
                    Sajad Ahmadzai (not out)
                </td>
                <td>
                    3
                </td>
                <td>4</td>
                <td>0</td>
                <td>0</td>
                <td>75.00</td>
            </tr>
           
             
         </tbody>
     </table>
     <div class="extra">
         <p>
             Extras 
         </p>
         <p>
            23 (b 0, lb 4, w 19, nb 0, p 0)
         </p>
     </div>
     <div class="total">
         <p>
             Total 
         </p>
         <p>
            162 (10 wkts, 20 Ov)
         </p>
     </div>
     
     
     <div class="fall">

         <p>Fall of Wickets</p>
     </div>
     <p>15-1 (Muhammad Muneeb, 2.5), 84-2 (Aziz Mohammad, 9.4), 87-3 (Shaheryar Butt, 10.4), 97-4 (Maqsood Ahmad, 12.1), 125-5 (Sunny Sheikh, 14.4), 133-6 (Shagharai Sefat, 15.3), 144-7 (Burhan Niaz, 16.3), 145-8 (Saber Zakhil, 16.5), 147-9 (Murid Ekrami, 17.2), 162-10 (Khalid Ahmadi, 20)</p>
    
    <table>
     <thead>
         <tr>
             <th>Bowler</th>
             <th>O</th>
             <th>M</th>
             <th>R</th>
             <th>W</th>
             <th>NB</th>
             <th>WD</th>
             <th>ECO</th>
         </tr>
     </thead>
     <tbody>
         <tr>
             <td>Bilal Muhammad</td>
             <td>4</td>
             <td>0</td>
             <td>18</td>
             <td>4</td>
             <td>0</td>
             <td>0</td>
             <td>4.50</td>
         </tr>
         <tr>
             <td>Jaison Jerome</td>
             <td>4</td>
             <td>0</td>
             <td>30</td>
             <td>0</td>
             <td>0</td>
             <td>0</td>
             <td>7.50</td>
         </tr>
         <tr>
             <td>Jitesh Patel</td>
             <td>4</td>
             <td>0</td>
             <td>29</td>
             <td>1</td>
             <td>0</td>
             <td>0</td>
             <td>7.20</td>
         </tr>
         <tr>
             <td>Amar Sharma</td>
             <td>1</td>
             <td>0</td>
             <td>12</td>
             <td>0</td>
             <td>0</td>
             <td>0</td>
             <td>12.00</td>
         </tr>
         <tr>
             <td>Imran Ameer</td>
             <td>3</td>
             <td>0</td>
             <td>22</td>
             <td>2</td>
             <td>0</td>
             <td>0</td>
             <td>7.30</td>
         </tr>
         <tr>
             <td>Bikram Arora (c)</td>
             <td>3</td>
             <td>0</td>
             <td>30</td>
             <td>1</td>
             <td>0</td>
             <td>0</td>
             <td>10.00</td>
         </tr>
         <tr>
            <td>Varun Thamotharam</td>
            <td>1</td>
            <td>0</td>
            <td>17</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>17.00</td>
        </tr>
     </tbody>
    </table>
   
 
    <div class="teamsecond">
     <p>
        Nepal Innings
     </p>
     <p>
        40-10 (13.3 Ov)
     </p>
 </div>
 <table>
     <thead>
         <tr>
             <th>
                 Batter
             </th>
             <th>
                 R
                 
             </th>
             <th>
                 B
             </th>
             <th>
                 4s
             </th>
             <th>
                 6s
             </th>
             <th>
                 SR
             </th>
         </tr>
     </thead>
     <tbody>
         <tr>
             <td>
                Ryan Bastiansz (c Aziz Mohammad b Murid Ekrami)
             </td>
             <td>
                 4
             </td>
             <td>5</td>
             <td>1</td>
             <td>0</td>
             <td>80.00</td>
         </tr>
         <tr>
             <td>
                Imran Ameer (b Khalid Ahmadi)
             </td>
             <td>
                 6
             </td>
             <td>9</td>
             <td>1</td>
             <td>0</td>
             <td>66.67</td>
         </tr>
         <tr>
             <td>
                Gopal Chaturvedi (lbw b Sajad Ahmadzai)
             </td>
             <td>
                 0
             </td>
             <td>2</td>
             <td>0</td>
             <td>0</td>
             <td>0.00</td>
         </tr>
         <tr>
             <td>
                Basil George (b Shagharai Sefat)
             </td>
             <td>
                 9
             </td>
             <td>12</td>
             <td>1</td>
             <td>0</td>
             <td>75.00</td>
         </tr>
         <tr>
             <td>
                Aaftab Alam Khan (wk) (b Khalid Ahmadi)
             </td>
             <td>
                 0
             </td>
             <td>1</td>
             <td>0</td>
             <td>0</td>
             <td>0.00</td>
         </tr>
          <tr>
             <td>
                Varun Thamotharam (b Khalid Ahmadi)
             </td>
             <td>
                 0
             </td>
             <td>1</td>
             <td>0</td>
             <td>0</td>
             <td>0.00</td>
         </tr>
         <tr>
             <td>
               Bikram Arora (c) (c Shaheryar Butt b Khalid Ahmadi)
             </td>
             <td>
                 1
             </td>
             <td>8</td>
             <td>0</td>
             <td>0</td>
             <td>12.50</td>
         </tr>
          <tr>
             <td>
               Amar Sharma (b Shagharai Sefat)
             </td>
             <td>
                 0
             </td>
             <td>5</td>
             <td>0</td>
             <td>0</td>
             <td>0.00</td>
         </tr>
          <tr>
             <td>
               Bilal Muhammad (b Sajad Ahmadzai)
             </td>
             <td>
                 9
             </td>
             <td>24</td>
             <td>0</td>
             <td>0</td>
             <td>37.50</td>
         </tr>
         <tr>
             <td>
               Jitesh Patel (b Shagharai Sefat)
             </td>
             <td>
                 1
             </td>
             <td>6</td>
             <td>0</td>
             <td>0</td>
             <td>16.67</td>
         </tr>

         <tr>
             <td>
               Jaison Jerome (not out)
             </td>
             <td>
                 1
             </td>
             <td>8</td>
             <td>0</td>
             <td>0</td>
             <td>12.50</td>
         </tr>
       
       
         
     </tbody>
 </table>
 <div class="extra">
     <p>
         Extras 
     </p>
     <p>
        9 (b 0, lb 0, w 9, nb 0, p 0)
     </p>
 </div>
 <div class="total">
     <p>
         Total 
     </p>
     <p>
        40 (10 wkts, 13.3 Ov)
     </p>
 </div>
 
 <div  class="fall">

     <p>Fall of Wickets</p>
 </div>
 <p>4-1 (Ryan Bastiansz, 0.5), 4-2 (Gopal Chaturvedi, 1.2), 18-3 (Imran Ameer, 4.1), 18-4 (Aaftab Alam Khan, 4.2), 18-5 (Varun Thamotharam, 4.3), 21-6 (Basil George, 5.4), 21-7 (Bikram Arora, 6.4), 22-8 (Amar Sharma, 7.3), 26-9 (Jitesh Patel, 9.5), 40-10 (Bilal Muhammad, 13.3)</p>

 <table>
     <thead>
         <tr>
             <th>Bowler</th>
             <th>O</th>
             <th>M</th>
             <th>R</th>
             <th>W</th>
             <th>NB</th>
             <th>WD</th>
             <th>ECO</th>
         </tr>
     </thead>
     <tbody>
         <tr>
             <td>Murid Ekrami</td>
             <td>2</td>
             <td>0</td>
             <td>10</td>
             <td>1</td>
             <td>0</td>
             <td>0</td>
             <td>5.00</td>
         </tr>
         <tr>
             <td>Sajad Ahmadzai</td>
             <td>2.3</td>
             <td>0</td>
             <td>9</td>
             <td>2</td>
             <td>0</td>
             <td>0</td>
             <td>3.60</td>
         </tr>
         <tr>
             <td>Khalid Ahmadi</td>
             <td>4</td>
             <td>1</td>
             <td>5</td>
             <td>4</td>
             <td>0</td>
             <td>0</td>
             <td>1.20</td>
         </tr>
         <tr>
             <td>Shagharai Sefat</td>
             <td>4</td>
             <td>0</td>
             <td>3</td>
             <td>0</td>
             <td>0</td>
             <td>0</td>
             <td>3.00</td>
         </tr>
         <tr>
             <td>Burhan Niaz</td>
             <td>1</td>
             <td>0</td>
             <td>3</td>
             <td>0</td>
             <td>0</td>
             <td>0</td>
             <td>3.00</td>
         </tr>
        
       

     </tbody>
    </table> `;
   }
   document.getElementById("para").innerHTML= score();
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
   let score = ()=>{
    return ` <p id="won">Germany won by 3 wkts</p>
    <div id="teams">
     <div class="teamfirst">
         <p>
           AUT Innings
         </p>
         <p>
           122-7 (20 Ov)
         </p>
     </div>
     <table>
         <thead>
             <tr>
                 <th>
                     Batter
                 </th>
                 <th>
                     R
                     
                 </th>
                 <th>
                     B
                 </th>
                 <th>
                     4s
                 </th>
                 <th>
                     6s
                 </th>
                 <th>
                     SR
                 </th>
             </tr>
             
         </thead>
         <tbody>
             <tr>
                 <td>
                    Iqbal Hossain (c Abdul Rahimzei b Muslim Yar)
                 </td>
                 <td>
                     8
                 </td>
                 <td>10</td>
                 <td>0</td>
                 <td>1</td>
                 <td>80.00</td>
             </tr>
            
             <tr>
                 <td>
                    Mark Simpson Parker (c and b Muslim Yar)
                 </td>
                 <td>
                     10
                 </td>
                 <td>18</td>
                 <td>1</td>
                 <td>0</td>
                 <td>55.56</td>
             </tr>
             <tr>
                <td>
                    Razmal Shigiwal (c) (c Muslim Yar b Walter Behr)
                </td>
                <td>
                    5
                </td>
                <td>4</td>
                <td>1</td>
                <td>0</td>
                <td>125.00</td>
            </tr>
             <tr>
                 <td>
                    Armaan Randhawa (run out (Abdul Samad Stanikzai/Elam Bharathi))
                 </td>
                 <td>
                     31
                 </td>
                 <td>38</td>
                 <td>1</td>
                 <td>0</td>
                 <td>81.58</td>
             </tr>
             <tr>
                 <td>
                    Mehar Cheema (wk) (c Abdul Rahimzei b Ghulam Ahmadi)
                 </td>
                 <td>
                     15
                 </td>
                 <td>17</td>
                 <td>0</td>
                 <td>0</td>
                 <td>88.24</td>
             </tr>
             <tr>
                 <td>
                    Aqib Javed Iqbal (not out)
                 </td>
                 <td>
                     42
                 </td>
                 <td>30</td>
                 <td>3</td>
                 <td>2</td>
                 <td>140.00</td>
             </tr>
             <tr>
                 <td>
                    Sahel Zadran (c Muslim Yar b Walter Behr)
                 </td>
                 <td>
                     0
                 </td>
                 <td>2</td>
                 <td>0</td>
                 <td>0</td>
                 <td>0.00</td>
             </tr>
             <tr>
                 <td>
                    Abdullah Akbarjan (c Sachin Mandy Gangareddy b Walter Behr)
                 </td>
                 <td>
                     0
                 </td>
                 <td>1</td>
                 <td>0</td>
                 <td>0</td>
                 <td>0.00</td>
             </tr>
         
           
             
         </tbody>
     </table>
     <div class="extra">
         <p>
             Extras 
         </p>
         <p>
            11 (b 5, lb 2, w 4, nb 0, p 0)
         </p>
     </div>
     <div class="total">
         <p>
             Total 
         </p>
         <p>
            122 (7 wkts, 20 Ov)
         </p>
     </div>
     <div class="notBat">
        <p>Did not Bat</p>
        <p>Itibarshah Deedar , Shahil Momin , Amit Nathwani</p>
     </div>
     
     
     <div class="fall">

         <p>Fall of Wickets</p>
     </div>
     <p>13-1 (Iqbal Hossain, 3.5), 19-2 (Razmal Shigiwal, 4.5), 25-3 (Mark Simpson Parker, 5.3), 52-4 (Mehar Cheema, 10.4), 103-5 (Armaan Randhawa, 18.1), 121-6 (Sahel Zadran, 19.3), 122-7 (Abdullah Akbarjan, 19.6)</p>
    
    <table>
     <thead>
         <tr>
             <th>Bowler</th>
             <th>O</th>
             <th>M</th>
             <th>R</th>
             <th>W</th>
             <th>NB</th>
             <th>WD</th>
             <th>ECO</th>
         </tr>
     </thead>
     <tbody>
         <tr>
             <td>Bilal Muhammad</td>
             <td>4</td>
             <td>0</td>
             <td>18</td>
             <td>4</td>
             <td>0</td>
             <td>0</td>
             <td>4.50</td>
         </tr>
         <tr>
             <td>Walter Behr</td>
             <td>4</td>
             <td>0</td>
             <td>17</td>
             <td>3</td>
             <td>0</td>
             <td>0</td>
             <td>4.20</td>
         </tr>
         <tr>
             <td>Muslim Yar</td>
             <td>4</td>
             <td>0</td>
             <td>15</td>
             <td>2</td>
             <td>0</td>
             <td>0</td>
             <td>3.80</td>
         </tr>
         <tr>
             <td>Nooruddin Mujadady</td>
             <td>2</td>
             <td>0</td>
             <td>14</td>
             <td>0</td>
             <td>0</td>
             <td>0</td>
             <td>7.00</td>
         </tr>
         <tr>
             <td>Ghulam Ahmadi</td>
             <td>3</td>
             <td>0</td>
             <td>14</td>
             <td>1</td>
             <td>0</td>
             <td>0</td>
             <td>4.70</td>
         </tr>
         <tr>
             <td>Venkatraman Ganesan (c)</td>
             <td>4</td>
             <td>0</td>
             <td>24</td>
             <td>0</td>
             <td>0</td>
             <td>0</td>
             <td>6.00</td>
         </tr>
         <tr>
            <td>Elam Bharathi</td>
            <td>3</td>
            <td>0</td>
            <td>31</td>
            <td>0</td>
            <td>0</td>
            <td>4</td>
            <td>10.30</td>
        </tr>
     </tbody>
    </table>
   
 
    <div class="teamsecond">
     <p>
        GER Innings
     </p>
     <p>
        125-7 (19.4 Ov)
     </p>
 </div>
 <table>
     <thead>
         <tr>
             <th>
                 Batter
             </th>
             <th>
                 R
                 
             </th>
             <th>
                 B
             </th>
             <th>
                 4s
             </th>
             <th>
                 6s
             </th>
             <th>
                 SR
             </th>
         </tr>
     </thead>
     <tbody>
         <tr>
             <td>
                Sachin Mandy Gangareddy (wk) (b Shahil Momin)
             </td>
             <td>
                 34
             </td>
             <td>32</td>
             <td>2</td>
             <td>2</td>
             <td>106.25</td>
         </tr>
         <tr>
             <td>
                Talha Khan (c Mark Simpson Parker b Amit Nathwani)
             </td>
             <td>
                 6
             </td>
             <td>3</td>
             <td>0</td>
             <td>1</td>
             <td>200.00</td>
         </tr>
         <tr>
             <td>
                Abdul Samad Stanikzai (c Mehar Cheema b Amit Nathwani)
             </td>
             <td>
                 0
             </td>
             <td>2</td>
             <td>0</td>
             <td>0</td>
             <td>0.00</td>
         </tr>
         <tr>
             <td>
                Abdul Rahimzei (c Aqib Javed Iqbal b Amit Nathwani)
             </td>
             <td>
                 11
             </td>
             <td>16</td>
             <td>0</td>
             <td>0</td>
             <td>68.75</td>
         </tr>
         <tr>
             <td>
                Venkatraman Ganesan (c) (c and b Abdullah Akbarjan)
             </td>
             <td>
                 5
             </td>
             <td>8</td>
             <td>0</td>
             <td>0</td>
             <td>68.50</td>
         </tr>
          <tr>
             <td>
               Walter Behr (b Iqbal Hossain)
             </td>
             <td>
                 22
             </td>
             <td>20</td>
             <td>0</td>
             <td>2</td>
             <td>110.00</td>
         </tr>
         <tr>
             <td>
               Shoaib Azam Khan (c Itibarshah Deedar b Abdullah Akbarjan)
             </td>
             <td>
                 4
             </td>
             <td>7</td>
             <td>1</td>
             <td>0</td>
             <td>57.14</td>
         </tr>
          <tr>
             <td>
               Muslim Yar (not out)
             </td>
             <td>
                 24
             </td>
             <td>17</td>
             <td>2</td>
             <td>0</td>
             <td>141.18</td>
         </tr>
          <tr>
             <td>
               Ghulam Ahmadi (not out)
             </td>
             <td>
                 15
             </td>
             <td>13</td>
             <td>1</td>
             <td>0</td>
             <td>115.38</td>
         </tr>
   
       
       
         
     </tbody>
 </table>
 <div class="extra">
     <p>
         Extras 
     </p>
     <p>
        4 (b 1, lb 0, w 3, nb 0, p 0)
     </p>
 </div>
 <div class="total">
     <p>
         Total 
     </p>
     <p>
        125 (7 wkts, 19.4 Ov)
     </p>
 </div>
 <div class="notBat">
    <p>Did not Bat</p>
    <p>Nooruddin Mujadady , Vishnu Elam Bharathi</p>
 </div>
 
 <div  class="fall">

     <p>Fall of Wickets</p>
 </div>
 <p>9-1 (Talha Khan, 0.4), 9-2 (Abdul Samad Stanikzai, 0.6), 32-3 (Abdul Rahimzei, 6.1), 48-4 (Venkatraman Ganesan, 8.5), 61-5 (Sachin Mandy Gangareddy, 11.2), 66-6 (Shoaib Azam Khan, 12.6), 90-7 (Walter Behr, 15.1)</p>

 <table>
     <thead>
         <tr>
             <th>Bowler</th>
             <th>O</th>
             <th>M</th>
             <th>R</th>
             <th>W</th>
             <th>NB</th>
             <th>WD</th>
             <th>ECO</th>
         </tr>
     </thead>
     <tbody>
         <tr>
             <td>Amit Nathwani</td>
             <td>4</td>
             <td>0</td>
             <td>21</td>
             <td>3</td>
             <td>0</td>
             <td>0</td>
             <td>5.20</td>
         </tr>
         <tr>
             <td>Aqib Javed Iqbal</td>
             <td>4</td>
             <td>0</td>
             <td>21</td>
             <td>0</td>
             <td>0</td>
             <td>1</td>
             <td>5.20</td>
         </tr>
         <tr>
             <td>Shahil Momin</td>
             <td>4</td>
             <td>0</td>
             <td>38</td>
             <td>1</td>
             <td>0</td>
             <td>1</td>
             <td>9.50</td>
         </tr>
         <tr>
             <td>Abdullah Akbarjan</td>
             <td>4</td>
             <td>0</td>
             <td>15</td>
             <td>2</td>
             <td>0</td>
             <td>1</td>
             <td>3.80</td>
         </tr>
         <tr>
             <td>Sahel Zadran</td>
             <td>1</td>
             <td>0</td>
             <td>8</td>
             <td>0</td>
             <td>0</td>
             <td>0</td>
             <td>8.00</td>
         </tr>
           <tr>
             <td>Iqbal Hossain</td>
             <td>2</td>
             <td>0</td>
             <td>12</td>
             <td>1</td>
             <td>0</td>
             <td>0</td>
             <td>6.00</td>
         </tr>
           <tr>
             <td>Itibarshah Deedar</td>
             <td>0.4</td>
             <td>0</td>
             <td>9</td>
             <td>0</td>
             <td>0</td>
             <td>0</td>
             <td>13.50</td>
         </tr>
        
       

     </tbody>
    </table>`;
   }
   document.getElementById("para").innerHTML= score();
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
    let score=()=>{
        return `<p id="won">Pakistan won by 53 runs (DLS method)</p>
        <div id="teams">
         <div class="teamfirst">
             <p>
               Pakistan Innings
             </p>
             <p>
              269-9 (48 Ov)
             </p>
         </div>
         <table>
             <thead>
                 <tr>
                     <th>
                         Batter
                     </th>
                     <th>
                         R
                         
                     </th>
                     <th>
                         B
                     </th>
                     <th>
                         4s
                     </th>
                     <th>
                         6s
                     </th>
                     <th>
                         SR
                     </th>
                 </tr>
                 
             </thead>
             <tbody>
                 <tr>
                     <td>
                        Fakhar Zaman (b Pooran)
                     </td>
                     <td>
                         35
                     </td>
                     <td>48</td>
                     <td>4</td>
                     <td>0</td>
                     <td>72.92</td>
                 </tr>
                
                 <tr>
                     <td>
                       Imam-ul-Haq (c Shai Hope b Pooran)
                     </td>
                     <td>
                         62
                     </td>
                     <td>68</td>
                     <td>7</td>
                     <td>1</td>
                     <td>91.18</td>
                 </tr>
                 <tr>
                    <td>
                        Babar Azam (c) (lbw b Hayden Walsh)
                    </td>
                    <td>
                        1
                    </td>
                    <td>3</td>
                    <td>0</td>
                    <td>0</td>
                    <td>33.33</td>
                </tr>
                 <tr>
                     <td>
                        Rizwan (c Shai Hope b Pooran)
                     </td>
                     <td>
                         11
                     </td>
                     <td>21</td>
                     <td>0</td>
                     <td>0</td>
                     <td>52.38</td>
                 </tr>
                 <tr>
                     <td>
                        Mohammad Haris (wk) (c Akeal Hosein b Pooran)
                     </td>
                     <td>
                         0
                     </td>
                     <td>2</td>
                     <td>0</td>
                     <td>0</td>
                     <td>0.00</td>
                 </tr>
                 <tr>
                     <td>
                        Khushdil (b Akeal Hosein)
                     </td>
                     <td>
                         34
                     </td>
                     <td>43</td>
                     <td>3</td>
                     <td>0</td>
                     <td>79.07</td>
                 </tr>
                 <tr>
                     <td>
                        Shadab Khan (b Jayden Seales)
                     </td>
                     <td>
                         86
                     </td>
                     <td>78</td>
                     <td>4</td>
                     <td>3</td>
                     <td>110.26</td>
                 </tr>
                 <tr>
                     <td>
                        Nawaz (c Akeal Hosein b Keemo Paul)
                     </td>
                     <td>
                         8
                     </td>
                     <td>13</td>
                     <td>0</td>
                     <td>0</td>
                     <td>61.54</td>
                 </tr>
                 <tr>
                     <td>
                       Mohammad Wasim Jr (b Keemo Paul)
                     </td>
                     <td>
                         6
                     </td>
                     <td>7</td>
                     <td>1</td>
                     <td>0</td>
                     <td>85.71</td>
                 </tr>

                  <tr>
                     <td>
                       Hasan Ali (not out)
                     </td>
                     <td>
                         8
                     </td>
                     <td>4</td>
                     <td>1</td>
                     <td>0</td>
                     <td>200.00</td>
                 </tr>
                   <tr>
                     <td>
                       S Dahani (not out)
                     </td>
                     <td>
                         4
                     </td>
                     <td>3</td>
                     <td>0</td>
                     <td>0</td>
                     <td>133.33</td>
                 </tr>
             
               
                 
             </tbody>
         </table>
         <div class="extra">
             <p>
                 Extras 
             </p>
             <p>
                14 (b 1, lb 2, w 9, nb 2, p 0)
             </p>
         </div>
         <div class="total">
             <p>
                 Total 
             </p>
             <p>
                269 (9 wkts, 48 Ov)
             </p>
         </div>
        
         
         
         <div class="fall">
   
             <p>Fall of Wickets</p>
         </div>
         <p>85-1 (Fakhar Zaman, 16.4), 88-2 (Babar Azam, 17.2), 113-3 (Imam-ul-Haq, 22.3), 113-4 (Mohammad Haris, 22.5), 117-5 (Rizwan, 24.4), 201-6 (Khushdil, 39.4), 217-7 (Nawaz, 42.6), 257-8 (Mohammad Wasim Jr, 46.4), 263-9 (Shadab Khan, 47.1)</p>
        
        <table>
         <thead>
             <tr>
                 <th>Bowler</th>
                 <th>O</th>
                 <th>M</th>
                 <th>R</th>
                 <th>W</th>
                 <th>NB</th>
                 <th>WD</th>
                 <th>ECO</th>
             </tr>
         </thead>
         <tbody>
             <tr>
                 <td>Jayden Seales</td>
                 <td>6</td>
                 <td>1</td>
                 <td>39</td>
                 <td>1</td>
                 <td>1</td>
                 <td>1</td>
                 <td>6.50</td>
             </tr>
             <tr>
                 <td>Keemo Paul</td>
                 <td>9</td>
                 <td>0</td>
                 <td>57</td>
                 <td>2</td>
                 <td>0</td>
                 <td>3</td>
                 <td>6.30</td>
             </tr>
             <tr>
                 <td>Romario Shepherd</td>
                 <td>3</td>
                 <td>0</td>
                 <td>13</td>
                 <td>0</td>
                 <td>0</td>
                 <td>0</td>
                 <td>4.30</td>
             </tr>
             <tr>
                 <td>Hayden Walsh</td>
                 <td>10</td>
                 <td>0</td>
                 <td>66</td>
                 <td>1</td>
                 <td>0</td>
                 <td>1</td>
                 <td>6.60</td>
             </tr>
             <tr>
                 <td>Pooran (c)</td>
                 <td>10</td>
                 <td>0</td>
                 <td>48</td>
                 <td>4</td>
                 <td>0</td>
                 <td>3</td>
                 <td>4.80</td>
             </tr>
             <tr>
                 <td>Akeal Hosein</td>
                 <td>10</td>
                 <td>0</td>
                 <td>43</td>
                 <td>1</td>
                 <td>1</td>
                 <td>1</td>
                 <td>4.30</td>
             </tr>
             
         </tbody>
        </table>
       <table>
        <thead>
            <tr>
                <th>Powerplays</th>
                <th>Overs</th>
                <th>Runs</th>
                 
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Powerplays</td>
                <td>Overs</td>
                <td>Runs</td>
                 
            </tr>
        </tbody>

     
        <div class="teamsecond">
         <p>
            West Indies Innings
         </p>
         <p>
            216-10 (37.2 Ov)
         </p>
     </div>
     <table>
         <thead>
             <tr>
                 <th>
                     Batter
                 </th>
                 <th>
                     R
                     
                 </th>
                 <th>
                     B
                 </th>
                 <th>
                     4s
                 </th>
                 <th>
                     6s
                 </th>
                 <th>
                     SR
                 </th>
             </tr>
         </thead>
         <tbody>
             <tr>
                 <td>
                    Shai Hope (wk) (c Khushdil b Hasan Ali)
                 </td>
                 <td>
                     21
                 </td>
                 <td>25</td>
                 <td>4</td>
                 <td>0</td>
                 <td>84.00</td>
             </tr>
             <tr>
                 <td>
                    Kyle Mayers (c Imam-ul-Haq b S Dahani)
                 </td>
                 <td>
                     5
                 </td>
                 <td>12</td>
                 <td>1</td>
                 <td>0</td>
                 <td>41.67</td>
             </tr>
             <tr>
                 <td>
                    Shamarh Brooks (b Mohammad Wasim Jr)
                 </td>
                 <td>
                     18
                 </td>
                 <td>26</td>
                 <td>1</td>
                 <td>1</td>
                 <td>69.23</td>
             </tr>
             <tr>
                 <td>
                   Keacy Carty (st Mohammad Haris b Shadab Khan)
                 </td>
                 <td>
                     33
                 </td>
                 <td>45</td>
                 <td>2</td>
                 <td>1</td>
                 <td>73.33</td>
             </tr>
             <tr>
                 <td>
                    Nicholas Pooran (c) (c Khushdil b Nawaz)
                 </td>
                 <td>
                     11
                 </td>
                 <td>13</td>
                 <td>1</td>
                 <td>0</td>
                 <td>84.62</td>
             </tr>
              <tr>
                 <td>
                   Rovman Powell (c Fakhar Zaman b Shadab Khan)
                 </td>
                 <td>
                     10
                 </td>
                 <td>19</td>
                 <td>1</td>
                 <td>0</td>
                 <td>52.63</td>
             </tr>
             <tr>
                 <td>
                  Akeal Hosein (st Mohammad Haris b Shadab Khan)
                 </td>
                 <td>
                     60
                 </td>
                 <td>37</td>
                 <td>2</td>
                 <td>6</td>
                 <td>162.16</td>
             </tr>
              <tr>
                 <td>
                   Keemo Paul (c Mohammad Haris b Nawaz)
                 </td>
                 <td>
                     21
                 </td>
                 <td>11</td>
                 <td>2</td>
                 <td>1</td>
                 <td>190.91</td>
             </tr>
              <tr>
                 <td>
                   Romario Shepherd (c Babar Azam b Hasan Ali)
                 </td>
                 <td>
                     16
                 </td>
                 <td>25</td>
                 <td>1</td>
                 <td>1</td>
                 <td>64.00</td>
             </tr>
              <tr>
                 <td>
                   Hayden Walsh (lbw b Shadab Khan)
                 </td>
                 <td>
                     3
                 </td>
                 <td>10</td>
                 <td>0</td>
                 <td>0</td>
                 <td>30.00</td>
             </tr>
              <tr>
                 <td>
                   Jayden Seales (not out)
                 </td>
                 <td>
                     0
                 </td>
                 <td>2</td>
                 <td>0</td>
                 <td>0</td>
                 <td>0.00</td>
             </tr>
       
           
           
             
         </tbody>
     </table>
     <div class="extra">
         <p>
             Extras 
         </p>
         <p>
            18 (b 8, lb 4, w 5, nb 1, p 0)
         </p>
     </div>
     <div class="total">
         <p>
             Total 
         </p>
         <p>
            216 (10 wkts, 37.2 Ov)
         </p>
     </div>
     
     
     <div  class="fall">
   
         <p>Fall of Wickets</p>
     </div>
     <p>25-1 (Kyle Mayers, 3.2), 52-2 (Shai Hope, 9.5), 52-3 (Shamarh Brooks, 10.3), 69-4 (Nicholas Pooran, 15.1), 93-5 (Rovman Powell, 20.3), 129-6 (Keacy Carty, 24.4), 155-7 (Keemo Paul, 27.3), 204-8 (Akeal Hosein, 34.2), 216-9 (Hayden Walsh, 36.4), 216-10 (Romario Shepherd, 37.2)</p>
   
     <table>
         <thead>
             <tr>
                 <th>Bowler</th>
                 <th>O</th>
                 <th>M</th>
                 <th>R</th>
                 <th>W</th>
                 <th>NB</th>
                 <th>WD</th>
                 <th>ECO</th>
             </tr>
         </thead>
         <tbody>
             <tr>
                 <td>Hasan Ali</td>
                 <td>5.2</td>
                 <td>0</td>
                 <td>29</td>
                 <td>2</td>
                 <td>1</td>
                 <td>2</td>
                 <td>5.40</td>
             </tr>
             <tr>
                 <td>Shahnawaz Dahani</td>
                 <td>6</td>
                 <td>0</td>
                 <td>36</td>
                 <td>1</td>
                 <td>0</td>
                 <td>2</td>
                 <td>6.00</td>
             </tr>
             <tr>
                 <td>Mohammad Wasim Jr</td>
                 <td>7</td>
                 <td>1</td>
                 <td>21</td>
                 <td>1</td>
                 <td>0</td>
                 <td>1</td>
                 <td>3.00</td>
             </tr>
             <tr>
                 <td>Mohammad Nawaz</td>
                 <td>10</td>
                 <td>1</td>
                 <td>56</td>
                 <td>2</td>
                 <td>0</td>
                 <td>0</td>
                 <td>5.60</td>
             </tr>
             <tr>
                 <td>Shadab Khan</td>
                 <td>9</td>
                 <td>1</td>
                 <td>62</td>
                 <td>4</td>
                 <td>0</td>
                 <td>0</td>
                 <td>6.90</td>
             </tr>
              
              
           
   
         </tbody>
        </table> 

        <table>
            <thead>
                <tr>
                    <th>
                        Powerplays
                    </th>
                     <th>
                        Overs
                    </th>
                    <th>
                        Runs
                    </th>
                </tr>
            </thead>
            <tbody>
                  <tr>
                    <td>
                        Mandatory
                    </td>
                     <td>
                        0.1-10
                    </td>
                    <td>
                        52
                    </td>
                </tr>
            </tbody>
        </table>
        
`;
    }
    document.getElementById("para").innerHTML= score();
       
}
