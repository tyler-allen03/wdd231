document.getElementById("currentyear").innerHTML = new Date().getFullYear()
document.getElementById("lastModified").innerHTML = document.lastModified;


const navbutton = document.querySelector('#navBTN');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
})


const message = document.querySelector("#dateMessage");
const msToDays = 86400000;
const today = Date.now();

let pastEntry = Number(localStorage.getItem("lastVisit")) || 0;

let dayDifference = today - pastEntry;

let daysPast = Math.floor(dayDifference / msToDays);


if (pastEntry == 0) {
    message.textContent = "Welcome to the FNaF Encyclopedia! I hope you enjoy your time here!"
}
else if (dayDifference < msToDays) {
    message.textContent = "Back so soon! Awesome!"
}
else {
    message.textContent = `You last visited ${daysPast} days ago.`
}

localStorage.setItem("lastVisit", today);
