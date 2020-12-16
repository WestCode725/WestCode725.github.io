window.addEventListener('load', (event) => {

    const hamburger = document.querySelector('#menubutton');
    const homenav = document.querySelector('.navigation');

    hamburger.addEventListener('click', () => {
        homenav.classList.toggle('responsive')
    }, false);

    const lu = document.querySelector('#lastUpdated');
    lu.textContent = document.lastModified;

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();

});


const requestURL = 'https://westcode725.github.io/GrandSpires/Scripts/temples.json#';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const temples = jsonObject['temples'];
   
        for (i = 0; i < temples.length; i++) {
            if (temples[i].name == "Raleigh, North Carolina" || temples[i].name == "Philidelphia, Pennsylvnia" 
            || temples[i].name == "Washington D.C." || temples[i].name == "Richmond, Virginia"){
            var temple = document.createElement('section');
            var div = document.createElement('div');
            var h2 = document.createElement('h2'); 
            var picture = document.createElement('img');
            var p1 = document.createElement('p');
            var p2 = document.createElement('p');
            var p3 = document.createElement('p');
            var p4 = document.createElement('p');
            var p5 = document.createElement('p');
            var p6 = document.createElement('p');
            var p7 = document.createElement('p');
            var p8 = document.createElement('p');
            
            
            temple.id = temples[i].photo.substring(0, (temples[i]["photo"].length - 5));
            h2.textContent = temples[i].name;  
            picture.setAttribute("src", "images/" + temples[i].photo);
            picture.setAttribute("alt", temples[i].name);
            p1.textContent = "Address: " + temples[i].address; 
            p2.textContent = "Telephone: " + temples[i].telephone;
            p3.textContent = "Email Address: " + temples[i].email;  
            p4.textContent = "Ordinance Schedule: " + temples[i].ordinanceSchedule;
            p5.textContent = "Session Schedule: " + temples[i].sessionSchedule;
            p6.textContent =  temples[i].services[0];
            p7.textContent =  temples[i].services[1]; 
            p8.textContent =  temples[i].services[2]; 
           
        
            temple.appendChild(div);
            div.appendChild(h2);
            temple.appendChild(picture);
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            div.appendChild(p4);
            div.appendChild(p5);
            div.appendChild(p6);
            div.appendChild(p7);
            div.appendChild(p8);
            

            document.querySelector('div.temples').appendChild(temple);
        
        }}
})
