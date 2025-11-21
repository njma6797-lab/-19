fetch('data.json')
.then(response => response.json())
.then(data => {
    const conceptsContainer = document.getElementById('concepts');
    const platformsContainer = document.getElementById('platforms');
    const realestateContainer = document.getElementById('realestate');
    const casesContainer = document.getElementById('cases');

    data.concepts.forEach(item => { conceptsContainer.innerHTML += `<div class='card'><h3>${item.title}</h3><p>${item.desc}</p></div>`; });
    data.platforms.forEach(item => { platformsContainer.innerHTML += `<div class='card'><h3>${item.title}</h3><p>${item.desc}</p></div>`; });
    data.realestate.forEach(item => { realestateContainer.innerHTML += `<div class='card'><h3>${item.title}</h3><p>${item.desc}</p></div>`; });
    data.cases.forEach(item => { casesContainer.innerHTML += `<div class='card'><h3>${item.title}</h3><p>${item.desc}</p></div>`; });
});
