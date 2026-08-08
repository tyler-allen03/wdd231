document.getElementById("currentyear").innerHTML = new Date().getFullYear()
document.getElementById("lastModified").innerHTML = document.lastModified;


const navbutton = document.querySelector('#navBTN');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
})


const animatronicUrl = 'https://tyler-allen03.github.io/wdd231/finalProject/data/animatronics.json';
const cards = document.querySelector('#characterContainer');


async function getAnimatronicData() {
    try {
        const response = await fetch(animatronicUrl);
        const data = await response.json();
        console.table(data.animatronics);
        displayAnimatronics(data.animatronics);
    } catch (error) {
        console.log(error);
    }


}

getAnimatronicData();



const displayAnimatronics = (animatronics) => {
    animatronics.forEach(animatronic => {
        let card = document.createElement("section");

        card.innerHTML = `
        <h2>${animatronic.name}</h2>
        <p><strong>Appearance:</strong> ${animatronic.appearance}</p>
        <p><strong>Mechanic:</strong> ${animatronic.mechanic}</p>
        <h3>Featured Games:</h3>
        <ul>
            ${animatronic.games.map(game => `<li>${game}</li>`).join('')}
         </ul>`

        cards.appendChild(card);

    });
}



const dialogBox = document.querySelector("#disclaimBOX");
const dialogBoxText = document.querySelector("#disclaimBOX div");
const closeBTN = document.querySelector("#closeBTN");
const dialogBTN = document.querySelector("#dialogBTN")

dialogBTN.addEventListener("click", () => {
    dialogBoxText.innerHTML = `
    <h2>Disclaimer</h2>
    <p>The suggestions you make here are not gaurunteed and will be reviewed before being implamented into the system.</p>
    <h2>Reminder</h2>
    <p>Certain characters are not going to be added to the list as they are not really relevant to the lore. Such characters would be Twisted Wolf, as he is only present in the twisted ones novel.</p>`;
    dialogBox.showModal();
})

closeBTN.addEventListener("click", () => {
    dialogBox.close();
});