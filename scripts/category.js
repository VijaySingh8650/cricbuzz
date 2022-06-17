import navbar from "../components/navbar.js";
let navbarAppend = document.getElementById("navbar1");
navbarAppend.innerHTML=navbar();

import navbar2 from "../components/navbar2.js";
let navbarAppend2 = document.getElementById("navbar2");
navbarAppend2.innerHTML=navbar2();

import footer from "../components/footer.js";
let footerOfCricbuzz = document.getElementById("footer_div");
footerOfCricbuzz.innerHTML=footer();

let all_vidios = document.getElementById('all_vidios')
    all_vidios.addEventListener('click',f1)
    function f1(){
        window.location.href='video.html'
    }

    let category = document.getElementById('category')
    category.addEventListener('click',f2)
    function f2(){
        window.location.href='category.html'
    }

    let playlist = document.getElementById('playlist')
    playlist.addEventListener('click',f3)
    function f3(){
        window.location.href='playlist.html'
    }
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=cricket&key=
    async function fun(x,){
    let	url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=Cricbuzz&key=AIzaSyBnsR-JK6HvJZdxlvwDoxPRadrP4EIuS_8'
    
    let	res = await fetch(url)
    let	data = await res.json()
        console.log(data.items)
          video1(data.items)
    }
    
    fun('Cricbuzz')
    

    function video1(data){

        let no1 = document.querySelector('#no1')
        data.forEach(function({id:{videoId},snippet:{title}}){
            let div = document.createElement('div')
            div.setAttribute('class','carousel-cell')
            let iframe = document.createElement('iframe')
            iframe.src='https://www.youtube.com/embed/'+ videoId
            let h3 = document.createElement('p')
            h3.innerText = title
    
            div.append(iframe,h3)
            no1.append(div)            
        })
    
    }