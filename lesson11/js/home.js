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
            let town = document.createElement('section');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let image = document.createElement('img');
            
            h2.textContent = towns[i].name;
            p1.textContent = towns[i].motto;
            p2.textContent = "Year founded: " + towns[i].yearFounded; 
            p3.textContent = "Population: " + towns[i].currentPopulation;
            p4.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;  
            //image.setAttribute("src", [i].imageurl);
            //image.setAttribute("alt", prophets[i].name + " " +prophets[i].lastname);

            town.appendChild(h2);
            town.appendChild(p1);
            town.appendChild(p2);
            town.appendChild(p3);
            town.appendChild(p4);

            document.querySelector('div.towns').appendChild(town);
        }

    })