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

});


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
   
        for (i = 0; i < towns.length; i++) {
            if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs"){
            var town = document.createElement('section');
            var div = document.createElement('div');
            var h2 = document.createElement('h2');
            var p1 = document.createElement('p');
            var p2 = document.createElement('p');
            var p3 = document.createElement('p');
            var p4 = document.createElement('p');
            var picture = document.createElement('img');
            
            
            town.id = towns[i].photo.substring(0, (towns[i]["photo"].length - 4));
            h2.textContent = towns[i].name;
            p1.textContent = towns[i].motto;
            p2.textContent = "Year founded: " + towns[i].yearFounded; 
            p3.textContent = "Population: " + towns[i].currentPopulation;
            p4.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;  
            picture.setAttribute("src", "images/" + towns[i].photo);
            picture.setAttribute("alt", towns[i].name);
           
        
            town.appendChild(div);
            div.appendChild(h2);
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            div.appendChild(p4);
            town.appendChild(picture);

            document.querySelector('div.towns').appendChild(town);
        
        }}

           window.addEventListener('load', (event) => {

           const fish = document.querySelector('#fishhaven');
        
            fish.addEventListener('click', () => {
                fish.classList.toggle('editable')
            }, false);
        });


        window.addEventListener('load', (event) => {

            const fish = document.querySelector('#preston');
        
            fish.addEventListener('click', () => {
                fish.classList.toggle('editable')
            }, false);
        });


        window.addEventListener('load', (event) => {

            const fish = document.querySelector('#sodasprings');
        
            fish.addEventListener('click', () => {
                fish.classList.toggle('editable')
            }, false);
        });
       
    })
