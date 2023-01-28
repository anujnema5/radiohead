const tickets = document.querySelector("#tickets");
const ticketMenu = document.querySelector('#ticketMenu');
const main = document.querySelector("#main");
const responsiveMenu = document.querySelector('#responsiveMenu');
const resh4= document.querySelectorAll('.resh4');
var check = 0;
const overlay = document.querySelector('.overlay');
const h2 = document.querySelector('h2');

tickets.addEventListener("click", function () {
    if(check === 0) {
        ticketMenu.style.opacity = "1";
        ticketMenu.style.transition = "400ms";
        ticketMenu.style.transform = "400ms";
        check = 1;
        
        check2 = 0;
        tourMenu.style.opacity = "0";

    }

    else {
        check=0;
        ticketMenu.style.opacity = "0";

    }

});

const tour = document.querySelector('#tour');
const tourMenu = document.querySelector('#tourMenu');

var check2 = 0
tour.addEventListener("click", function () {
    if(check2 === 0) {
        tourMenu.style.opacity = "1";
        tourMenu.style.transition = "400ms";
        tourMenu.style.transform = "400ms";
        check2 = 1;  
        check = 0;      
        ticketMenu.style.opacity = "0";

    }

    else {
        check2=0;
        tourMenu.style.opacity = "0";

    }

});

var check3 = 0;

const menuTag = document.querySelector('.ri-menu-line');
menuTag.addEventListener("click", function () {
    if(check3 ===0) {
        menuTag.className = "ri-close-line"
        menuTag.style.fontSize = "20px";
        check3 = 1;
        responsiveMenu.style.opacity = "1";
        main.style.background = "url(https://c4.wallpaperflare.com/wallpaper/976/579/736/radiohead-music-album-covers-wallpaper-thumb.jpg)";
        main.style.backgroundSize = "cover";
        main.style.backgroundPosition = "center";
        overlay.style.backgroundColor = "";
        h2.style.color = "rgba(0, 0, 0, 0.532);"
    }

    else if(check3===1){
        check3 = 0;
        menuTag.className = "ri-menu-line"
        responsiveMenu.style.opacity = "0";
        main.style.background = 'url(https://thumbs.gfycat.com/ScaredGranularAstrangiacoral-max-1mb.gif)';
        main.style.backgroundSize = "cover";
        main.style.backgroundPosition = "center";
        // menuTag.style.fontSize = "30px";
    }
});

