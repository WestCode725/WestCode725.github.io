window.addEventListener('load', (event) => {

    const hamburger = document.querySelector('.menubutton');
    const homenav = document.querySelector('.navigation');

    hamburger.addEventListener('click', () => {
        homenav.classList.toggle('responsive')
    }, false);


    // banner js
    let banner = document.querySelector('.banner');
    let day = new Date().getDay();

    if (day == 5) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }



const prestonURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=1bce53e79e74fa83e4a14612f4b195a1';

fetch(prestonURL)
    .then(prestonURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        const days = prestonURL;
        document.querySelector("currentT").innerHTML = days.main.temp;
    
    //windchill

    let windspeed = parseInt(document.getElementById("windspeed").textContent);
    let airtemp = parseInt(document.getElementById("hightemp").textContent);
    let chill = Math.round((35.74 + (0.6215 * airtemp) - (35 * (windspeed ** 0.16)) + (0.4275 * airtemp * (windspeed ** 0.16))));

    if (airtemp < 50 && windspeed > 3) {
        document.getElementById("windchill").innerHTML = chill;
    }
    else{
        document.getElementById("windchill").innerHTML = "N/A";
    }
});
})