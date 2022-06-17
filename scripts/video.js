// no 4 data - https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=cricket&key=AIzaSyBLkxNO3Nb_0yhx15ZcArT_Ij_K2hCwgQo

import navbar from "../components/navbar.js";
let navbarAppend = document.getElementById("navbar1");
navbarAppend.innerHTML=navbar();

import navbar2 from "../components/navbar2.js";
let navbarAppend2 = document.getElementById("navbar2");
navbarAppend2.innerHTML=navbar2();

import footer from "../components/footer.js";
let footerOfCricbuzz = document.getElementById("footer_div");
footerOfCricbuzz.innerHTML=footer();



// async function fun(){
//     let	url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=cricket&key=AIzaSyBLkxNO3Nb_0yhx15ZcArT_Ij_K2hCwgQo`
    
//     let	res = await fetch(url)
//     let	data = await res.json()
//         console.log(data.items)
//          video1(data.items)
//     }
    
//     fun()
    
//     function video1(data){
//         let contener = document.querySelector('.main-carousel')
    
//         data.forEach(function({id:{videoId},snippet:{title}}){
//             let div = document.createElement('div')
//             div.setAttribute('class','carousel-cell')
//             let iframe = document.createElement('iframe')
//             iframe.src='https://www.youtube.com/embed/'+ videoId
//             let h3 = document.createElement('p')
//             h3.innerText = title
    
//             div.append(iframe,h3)
//             contener.append(div)
            
//         })
    
//     }


    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'left',
      contain: true,
      groupCells: true
    });

    var elem = document.querySelector('.main-carouselx');
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'left',
      contain: true,
      groupCells: true
    });

    var elem = document.querySelector('.main-carousel3');
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'left',
      contain: true,
      groupCells: true
    });

    var elem = document.querySelector('.main-carousel4');
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'left',
      contain: true,
      groupCells: true
    });

    var elem = document.querySelector('.main-carousel5');
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'left',
      contain: true,
      groupCells: true
    });

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

