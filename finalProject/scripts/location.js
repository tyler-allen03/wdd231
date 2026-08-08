document.getElementById("currentyear").innerHTML = new Date().getFullYear()
document.getElementById("lastModified").innerHTML = document.lastModified;


const navbutton = document.querySelector('#navBTN');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
})


const locationUrl = 'https://tyler-allen03.github.io/wdd231/finalProject/data/locations.json';
const cards = document.querySelector('#locationsContainer');


async function getLocationData() {
    try {
        const response = await fetch(locationUrl);
        const data = await response.json();
        // console.table(data.fnaf_locations);
        displayLocations(data.fnaf_locations);
    } catch (error) {
        console.log(error);
    }

}

getLocationData();



const displayLocations = (locations) => {
    locations.forEach(location => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let map = document.createElement("img");
        let lore = document.createElement("p");
        let player = document.createElement('p');
        let mechanic = document.createElement("p");

        name.textContent = location.location;
        lore.textContent = location.lore_significance;
        player.textContent = location.why_player_is_there;
        mechanic.textContent = location.gameplay_mechanics;


        map.setAttribute("src", location.image);
        map.setAttribute("alt", `The map for ${location.location}`);
        map.setAttribute("loading", "lazy");
        map.setAttribute("width", "auto");


        card.appendChild(name);
        card.appendChild(map);
        card.appendChild(lore);
        card.appendChild(player);
        card.appendChild(mechanic);

        cards.appendChild(card);

    });
}



