let navbar = ()=>{
    return `<img src="https://www.cricbuzz.com/images/cb_logo.svg" alt="">
    <a href="" title="Live Cricket Score">Live Scores</a>
    <a href="" title="Cricket Schedule">Schedule</a>
    <a href="" title="Cricket Scorecard Archives">Archives</a>
     <div title="News"  class="icon dropMenu">
        <a href="1news.html">News</a>
        <i class="fa-solid fa-caret-down"></i>
        <div id="news_drop">
           <a href="1news.html" title="Latest Cricket News">All Stories</a> 
           <a href="cricbuzz.html" title="Cricbuzz Plus Premium Articles">Cricbuzz</a>
           <a href="news.html" title="Latest Cricket News">latest News</a>
           <a href="topic.html" title="Latest Cricket Topics">Topics</a>
           <a href="spotlight.html" title="Cricket Editorials and Specials">Spotlight</a>
           <a href="opinions.html" title="Latest Cricket Opinions & Editorials">Opinions</a>
           <a href="special.html" title="Latest Cricket Specials">Specials</a>
           <a href="stat.html" title="Latest Cricket Stats & Analysis">Stats & Analysis</a>
           <a href="interview.html" title="Latest Cricket Player Interviews">Interviews</a>
           <a href="lives.html" title="Latest Cricket Match live blogs">Live Blogs</a>
           <a href="#" title="Articles and Videos by Harsha Bhogle">Harsh Bhogle</a>
        </div>
    </div>
    <div title="Cricket Series" class="icon dropMenu">
        <a href="">Series</a>
        <i class="fa-solid fa-caret-down"></i>
        <div id="series_drop">
           <a href="south.html" title="South Africa tour of India, 2022">South Africa tour of India, 2022</a> 
           <a href="sri.html" title="Australia tour of Sri Lanka, 2022">Australia tour of Sri Lanka, 2022</a>
           <a href="eng.html" title="New Zealand tour of England, 2022">New Zealand tour of England, 2022</a>
           <a href="west.html" title="Bangladesh tour of West Indies, 2022">Bangladesh tour of West Indies, 2022</a>
           <a href="eng.html" title="England tour of Netherlands, 2022">England tour of Netherlands, 2022</a>
          <a href="afgha.html" title="T20 Blast 2022">T20 Blast 2022</a>
           
           <a href="aus.html" title="Ranji Trophy 2021-22">Ranji Trophy 2021-22</a>
           <a href="ind.html" title="ICC Cricket World Cup League Two 2019-23">ICC Cricket World Cup League Two 2019-23</a>
           <a href="live.html" title="Latest Cricket Match live blogs">Live Blogs</a>
           <a href="special.html" style="color: blue;">All Series »</a>
        </div>
    </div>
    <div title="Cricket Teams" class="icon dropMenu">
        <a href="">Teams</a>
        <i class="fa-solid fa-caret-down"></i>
        <div >

       
        <div id="teams_Drop">
            <div>
           <h4>Test Teams</h4> 
           <a href="ind.html" title="India Cricket Team">India</a>

           <a href="ir.html" title="Ireland Cricket Team">Ireland</a>

           <a href="pak.html" title="Pakistan Cricket Team">Pakistan</a>

           <a href="aus.html" title="Australia Cricket Team">Australia</a>

           <a href="sri.html" title="Sri Lanka Cricket Team">Sri Lanka</a>

           <a href="bang.html" title="Bangladesh Cricket Team">Bangladesh</a>

           <a href="eng.html" title="England Cricket Team">England</a>

           <a href="west.html" title="West Indies Cricket Team">West Indies</a>

           <a href="south.html" title="South Africa Cricket Team">South Africa</a>

           <a href="zimb.html" title="Zimbabwe Cricket Team">Zimbabwe</a>

           <a href="newz.html" title="New Zealand Cricket Team">New Zealand</a>

           <a href="afgha.html" title="Afghanistan Cricket Team">Afghanistan</a>
        </div>
        <div>
            <h4>Associate</h4> 
            <a href="it.html" title="Italy Cricket Team">Italy</a>

            <a href="bot.html" title="Botswana Cricket Team">Botswana</a>

            <a href="bel.html" title="Belgium Cricket Team">Belgium</a>

            <a href="iron.html" title="Iran Cricket Team">Iran</a>

            <a href="den.html" title="Denmark Cricket Team">Denmark</a>

            <a href="singa.html" title="Singapore Cricket Team">Singapore</a>

            <a href="nami.html" title="Namibia Cricket Team">Namibia</a>

            <a href="ugan.html" title="Uganda Cricket Team">Uganda</a>

            <a href="mala.html" title="Malaysia Cricket Team">Malaysia</a>

            <a href="nep.html" title="Nepal Cricket Team">Nepal</a>

            <a href="ger.html" title="Germany Cricket Team">Germany</a>

            <a href="can.html" title="Canada Cricket Team">Canada</a>
         </div>
         <a href="" id="teams_Drop_more" title="Cricket teams" style="color: blue;">More...</a>
        </div>
    </div>
    </div>
    <div title="Cricket Videos" class="icon dropMenu">
       <a href="">Videos</a>
       <i class="fa-solid fa-caret-down"></i>
       <div id="videos_drop">
        <a href="" title="All Cricket Videos">All Videos</a>
        <a href="" title="Cricket Videos Categories">Categories</a>
        <a href="" title="Cricket Videos Playlists">Playlists</a>
       </div>
    </div>
    <div title="ICC Rankings" class="icon dropMenu">
        <a href="">Rankings</a>
        <i class="fa-solid fa-caret-down"></i>
        <div id="rankings_drop">
           <a href="" title="ICC Rankings Men">ICC Rankings - Men</a> 
           <a href="" title="ICC Rankings Women">ICC Rankings - Women</a> 
        </div>

    </div>
    <div class="icon dropMenu">
       <a>More</a> 
       <i class="fa-solid fa-caret-down"></i>
       <div id="more_drop">
        <a href="" title="World Test Championship">World Test Championship</a>
        <a href="" title="World Cup Super League">World Cup Super League</a>
        <a href="" title="Cricket Quiz">Quiz</a>
        <a href="" title="Photo Gallery">Photos</a>
        <a href="" title="Mobile Apps">Mobile Apps</a>
        <a href="" title="Careers">Careers</a>
        <a href="" title="Contact Us">Contact Us</a>
       </div>
    </div>
    <button id="navBar_btn">Cricbuzz Plus</button>
    <i class="fa fa-search changeOfNavi" ></i>
    <i class='far fa-user-circle changeOfNavi'></i>`;
}

export default navbar;