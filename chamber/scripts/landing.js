const currentTemp = document.querySelector('#actTemp');
const captionDesc = document.querySelector('#actDesc');
const APIurl = 'https://api.openweathermap.org/data/2.5/weather?lat=39.08&lon=-94.41&units=imperial&appid=e3adef121382d7ee5146d19764b72b9c';

async function apiFetch() {
    try {
        const response = await fetch(APIurl);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    let desc = data.weather[0].description;
    captionDesc.textContent = `${desc}`;
}

apiFetch();


const forcastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=39.08&lon=-94.41&units=imperial&appid=e3adef121382d7ee5146d19764b72b9c";
const day1temp = document.querySelector("#day1Temp");
const day1Desc = document.querySelector("#day1Desc");
const day2temp = document.querySelector("#day2Temp");
const day2Desc = document.querySelector("#day2Desc");
const day3temp = document.querySelector("#day3Temp");
const day3Desc = document.querySelector("#day3Desc");


async function forcastApiFetch() {
    try {
        const response = await fetch(forcastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayForcast(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForcast(data) {
    day1temp.innerHTML = `${data.list[8].main.temp}&deg;F`
    day1Desc.textContent = `${data.list[8].weather[0].description}`

    day2temp.innerHTML = `${data.list[16].main.temp}&deg;F`
    day2Desc.textContent = `${data.list[16].weather[0].description}`

    day3temp.innerHTML = `${data.list[24].main.temp}&deg;F`
    day3Desc.textContent = `${data.list[24].weather[0].description}`
}

forcastApiFetch();

const url = 'https://tyler-allen03.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.companies);
    let filteredList = data.companies.filter(member => (member.membershipLevel == 2 || member.membershipLevel == 3));
    let index1 = getRandomInt(filteredList.length);
    let index2 = getRandomInt(filteredList.length);
    while (index1 == index2) {
        index2 = getRandomInt(filteredList.length);
    }
    displaymembers(filteredList[index1]);
    displaymembers(filteredList[index2]);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

getMemberData();

const displaymembers = (member) => {
    let card = document.createElement("section");
    let companyName = document.createElement("h2");
    let companyLogo = document.createElement("img");
    let companyAddress = document.createElement("p");
    let companymembershipLevel = document.createElement("p");
    let companyPhone = document.createElement("p");
    let companyURL = document.createElement("a");

    if (member.membershipLevel == 2) {
        companymembershipLevel.textContent = "Membership level: Silver"
        card.style.borderColor = "silver";
    }
    else if (member.membershipLevel == 3) {
        companymembershipLevel.textContent = "Membership level: Gold"
        card.style.borderColor = "gold";
    }

    companyName.textContent = member.name;
    // companymembershipLevel.textContent = `Membership level: ${member.membershipLevel}`;
    companymembershipLevel.classList.add("nonEssential");
    companyPhone.textContent = member.phoneNumber;
    companyPhone.classList.add("nonEssential");
    companyAddress.textContent = member.address;
    companyAddress.classList.add("nonEssential");
    companyURL.textContent = member.url;

    companyLogo.setAttribute("src", member.image);
    companyLogo.setAttribute("alt", `The Logo for ${member.name}`);
    companyLogo.setAttribute("loading", "lazy");
    companyLogo.setAttribute("width", "auto");
    companyLogo.setAttribute("height", "100");
    // companyLogo.classList.add("nonEssential");

    card.appendChild(companyName);
    card.appendChild(companyLogo);
    card.appendChild(companyAddress);
    card.appendChild(companymembershipLevel)
    card.appendChild(companyPhone);
    card.appendChild(companyURL);

    cards.appendChild(card);
}

const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

document.getElementById("currentyear").innerHTML = new Date().getFullYear()
document.getElementById("lastModified").innerHTML = document.lastModified;
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
})