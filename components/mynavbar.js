let mynavbar =()=>{
    return ` <nav class="navbar">
    <a
      class="Current_Matches"
      href="live.html"
      title="Cricbuzz Live Scores"
      target="_self"
      >Current Matches</a
    >
    <a
      class="Current_future_series"
      href="shedule.html"
      title="Series Schedule"
      target="_self"
      >Current &amp; Future Series</a
    ><a
      class="Matches"
      href="shedule.html"
      title="Cricket Schedule"
      target="_self"
      >Matches By Day</a
    ><a
      class="Series"
      href="archives.html"
      title="Cricket Scorecard Archives"
      target="_self"
      >Series Archive</a
    >
  </nav>`
}


let options=()=>{
    return `<nav class="opt">
    <a
      title="Live Matches"
      href="live.html"
      id="live"
      >Live</
    ><a
      title="Recent Matches"
      href="recent.html"
      id="recent"
      >Recent</
    ><a
      title="Upcoming Matches"
      href="upcoming.html"
      id="upcoming"
     >Upcoming</
    >
  </nav>`
}
export {mynavbar,options}