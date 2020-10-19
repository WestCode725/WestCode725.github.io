window.addEventListener('load',(event)=>{

const hamburger = document.querySelector('.menubutton');
const homenav = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {homenav.classList.toggle('responsive')}, false);


let banner = document.querySelector('.banner');
let day = new Date().getDay();

if (day == 5){
    banner.style.display = 'block';
}
else{
    banner.style.display = 'none';
}

})


