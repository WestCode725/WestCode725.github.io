window.addEventListener('load', (event) => {

    const hamburger = document.querySelector('.menubutton');
    const homenav = document.querySelector('.navigation');

    hamburger.addEventListener('click', () => {
        homenav.classList.toggle('responsive')
    }, false);
    
    
    let updated = document.getElementById('lastUpdated');
    updated.textContent = document.lastModified;

    

 
});