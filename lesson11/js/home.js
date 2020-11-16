window.addEventListener('load', (event) => {

    const hamburger = document.querySelector('.menubutton');
    const homenav = document.querySelector('.navigation');

    hamburger.addEventListener('click', () => {
        homenav.classList.toggle('responsive')
    }, false);
});


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        let threetowns = [1,4,5];
    
        for (i of threetowns) {
            var town = document.createElement('section');
            var h2 = document.createElement('h2');
            var p1 = document.createElement('p');
            var p2 = document.createElement('p');
            var p3 = document.createElement('p');
            var p4 = document.createElement('p');
            var picture = document.createElement('img');
            
            town.id = "townName" + i;
            h2.textContent = towns[i].name;
            p1.textContent = towns[i].motto;
            p2.textContent = "Year founded: " + towns[i].yearFounded; 
            p3.textContent = "Population: " + towns[i].currentPopulation;
            p4.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;  
            picture.setAttribute("src", "js/" + towns[i].photo);
            picture.setAttribute("alt", towns[i].name);
        

            town.appendChild(h2);
            town.appendChild(p1);
            town.appendChild(p2);
            town.appendChild(p3);
            town.appendChild(p4);
            town.appendChild(picture);

            document.querySelector('div.towns').appendChild(town);
            
        
        }

        window.addEventListener('load', (event) => {

            const fish = document.querySelector('#townName1');
        
            fish.addEventListener('click', () => {
                fish.classList.toggle('editable')
            }, false);
        });


        window.addEventListener('load', (event) => {

            const fish = document.querySelector('#townName4');
        
            fish.addEventListener('click', () => {
                fish.classList.toggle('editable')
            }, false);
        });


        window.addEventListener('load', (event) => {

            const fish = document.querySelector('#townName5');
        
            fish.addEventListener('click', () => {
                fish.classList.toggle('editable')
            }, false);
        });
        
    })