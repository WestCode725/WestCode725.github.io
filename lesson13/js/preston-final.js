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