window.addEventListener('load', (event) => {

    const hamburger = document.querySelector('.menubutton');
    const homenav = document.querySelector('.navigation');

    hamburger.addEventListener('click', () => {
        homenav.classList.toggle('responsive')
    }, false);

    const lu = document.querySelector('#lastUpdated');
    lu.textContent = document.lastModified;

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();

    // banner js
    let banner = document.querySelector('.banner');
    let day = new Date().getDay();

    if (day == 5) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }


    const prestonURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=1bce53e79e74fa83e4a14612f4b195a1';

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
            } else {
                document.getElementById("windchill").innerHTML = "N/A";
            }
        })


    const fiveday = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=1bce53e79e74fa83e4a14612f4b195a1';

    fetch(fiveday)
        .then(fiveday)
        .then((response) => response.json())
        .then((jsObject) => {
            const list = jsObject['list'];
            let x = 1;
            for (let i = 0; i < list.length; i++) {
                if (list[i].dt_txt.includes('18:00:00')) {
                    document.querySelector("#day" + x + "high").textContent = Math.round(list[i].main.temp_max);
                    let weatherimg = "https://openweathermap.org/img/wn/" + list[i].weather[0].icon + "@2x.png";
                    document.querySelector('#day' + x + 'img').setAttribute('src', weatherimg);
                    x++;
                }
            }
        });


    for (let i = 0; i < 5; i++) {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let today = new Date().getDay();
        var count = today + i;
        if (count > 6) {
            count -= 7;
        }
        document.querySelector('#day' + (i + 1)).innerHTML = days[count];
    }

    const events = "https://byui-cit230.github.io/weather/data/towndata.json";

    fetch(events)
        .then(function (response) {
            return response.json();
        })
        .then((jsObject) => {
            console.log(jsObject)
            const townevents = jsObject["towns"];
            for (let i = 0; i < townevents.length; i++) {
                if (townevents[i].name == "Soda Springs") {
                    for (let j = 0; j < townevents[i].events.length; j++) {
                        let theevent = document.createElement("p");
                        theevent.textContent = townevents[i].events[j];
                        document.querySelector("#events").appendChild(theevent);
                    }
                }
            }

        })
})