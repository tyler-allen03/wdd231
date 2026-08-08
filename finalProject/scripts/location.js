document.getElementById("currentyear").innerHTML = new Date().getFullYear()
document.getElementById("lastModified").innerHTML = document.lastModified;


const navbutton = document.querySelector('#navBTN');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
})


const animatronicUrl = 'https://tyler-allen03.github.io/wdd231/finalProject/data/animatronics.json';
const cards = document.querySelector('#locationsContainer');


async function getAnimatronicData() {
    const response = await fetch(animatronicUrl);
    const data = await response.json();
    // console.table(data.animatronics);
    displayAnimatronics(data.animatronics);

}

getAnimatronicData();



const displayAnimatronics = (animatronics) => {
    animatronics.forEach(animatronic => {
        let card = document.createElement("section");

        card.innerHTML = `
        <h3>${animatronic.name}</h3>
        <p><strong>Appearance:</strong> ${animatronic.appearance}</p>
        <p><strong>Mechanic:</strong> ${animatronic.mechanic}</p>
        <h4>Featured Games:</h4>
        <ul>
            ${animatronic.games.map(game => `<li>${game}</li>`).join('')}
         </ul>`

        cards.appendChild(card);

    });
}



