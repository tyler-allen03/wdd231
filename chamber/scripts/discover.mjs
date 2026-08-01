import { places } from '../data/places.mjs'
console.log(places);


const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

document.getElementById("currentyear").innerHTML = new Date().getFullYear()
document.getElementById("lastModified").innerHTML = document.lastModified;
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
})

const placeContainer = document.querySelector("#placeContainer");

function displayItems(places) {
    places.forEach(place => {
        const card = document.createElement('div');
        const photo = document.createElement('img');
        const title = document.createElement("h2");
        const address = document.createElement('addresss');
        const desc = document.createElement('p');
        const btn = document.createElement('button');

        photo.src = `images/${place.photo_url}`;
        photo.alt = place.name;
        
        title.innerText = place.name;

        address.innerText = place.address;

        desc.innerText = place.description;

        btn.textContent = "Learn More";

        card.appendChild(photo);
        card.appendChild(title);
        card.appendChild(address);
        card.appendChild(desc);
        card.appendChild(btn);

        placeContainer.appendChild(card);
    });
}

displayItems(places)

const message = document.querySelector("#dateMessage");
const msToDays = 86400000;
const today = Date.now();

let pastEntry = Number(localStorage.getItem("lastVisit")) || 0;

let dayDifference = today - pastEntry;

let daysPast = Math.floor(dayDifference / msToDays);


if (pastEntry == 0) {
    message.textContent = "Welcome! Let us know if you have any questions!"
}
else if (dayDifference < msToDays) {
    message.textContent = "Back so soon! Awesome!"
}
else {
    message.textContent = `You last visited ${daysPast} days ago.`
}

localStorage.setItem("lastVisit", today);

console.log(daysPast)
console.log(dayDifference);
console.log(today);