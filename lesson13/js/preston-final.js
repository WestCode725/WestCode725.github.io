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
        document.querySelector("#currentT").innerHTML = Math.round(jsObject.main.temp);
        document.querySelector("#hightemp").innerHTML = Math.round(jsObject.main.temp_max);
        document.querySelector("#low").innerHTML = Math.round(jsObject.main.temp_min);
        document.querySelector("#windspeed").innerHTML = Math.round(jsObject.wind.speed);

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


const fiveday = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=1bce53e79e74fa83e4a14612f4b195a1';

fetch(fiveday)
.then(fiveday)
.then((response) => response.json())
.then((jsObject) => {
    const list = jsObject['list'];  
    let x = 1;
    for (let i = 0; i < list.length; i++){
        if (list[i].dt_txt.includes('18:00:00')){
            document.querySelector("#day" + x + "high").textContent = Math.round(list[i].main.temp_max);
            x++;
        }
    }
})


for(let i = 0; i < 7; i++){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let today = new Date().getDay();
    let count = today + i;
    if(count > 6){
      count -= 7;
    }
    document.querySelector('#day'+ (i + 1)).textContent = days[count];
}
})