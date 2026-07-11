const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

document.getElementById("currentyear").innerHTML = new Date().getFullYear()
document.getElementById("lastModified").innerHTML = document.lastModified;
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
})



const url = 'https://tyler-allen03.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.companies);
    if (cards.innerHTML.trim() === '') {
        displaymembers(data.companies);
    }
    
}

getMemberData();

const displaymembers = (members) => {
    cards.textContent = "";
    members.forEach(member => {
        let card = document.createElement("section");
        let companyName = document.createElement("h2");
        let companyLogo = document.createElement("img");
        let companyAddress = document.createElement("p");
        let companyEmail = document.createElement("p");
        let companyPhone = document.createElement("p");
        let companyURL = document.createElement("a");

        companyName.textContent = member.name;
        companyEmail.textContent = member.email;
        companyPhone.textContent = member.phoneNumber;
        companyAddress.textContent = member.address;
        companyURL.textContent = member.url;

        companyLogo.setAttribute("src", member.image);
        companyLogo.setAttribute("alt", `The Logo for ${member.name}`);
        companyLogo.setAttribute("loading", "lazy");
        companyLogo.setAttribute("width", "auto");
        companyLogo.setAttribute("height", "100");

        card.appendChild(companyName);
        card.appendChild(companyLogo);
        card.appendChild(companyAddress);
        card.appendChild(companyEmail)
        card.appendChild(companyPhone);
        card.appendChild(companyURL);

        cards.appendChild(card);
    });
}



const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");


gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
