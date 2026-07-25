const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

document.getElementById("currentyear").innerHTML = new Date().getFullYear()
document.getElementById("lastModified").innerHTML = document.lastModified;
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
})

const subTime = document.getElementById("timestamp");
subTime.value = new Date().toString();

const nonProfitBTN = document.querySelector("#NPBTN");
const bronzeBTN = document.querySelector("#BBTN");
const silverBTN = document.querySelector("#SBTN");
const goldBTN = document.querySelector("#GBTN");

const dialogBox = document.querySelector("#memberDialog");
const dialogBoxText = document.querySelector("#memberDialog div");
const closeBTN = document.querySelector("#closeBTN");


nonProfitBTN.addEventListener("click", () => {
    dialogBoxText.innerHTML = `
    <h2>Non Profit Membership Level</h2>
    <p>The Non Profit Membership Level is free and comes with the basic perks.</p>
    <p>These benefits include hosting special events and training.</p>`;
    dialogBox.showModal();
})

bronzeBTN.addEventListener("click", () => {
    dialogBoxText.innerHTML = `
    <h2>Bronze Membership Level</h2>
    <p>The Bronze Membership Level costs just $100 a month and comes with slightly more perks then that of the Non Profit tier.</p>
    <p>These perks not only include hosting special events and training, but also add event discounts!</p>`;
    dialogBox.showModal();
})

silverBTN.addEventListener("click", () => {
    dialogBoxText.innerHTML = `
    <h2>Silver Membership Level</h2>
    <p>The Silver Membership Level costs $500 a month and adds even more benefits!</p>
    <p>These benefits are hosting special events, training, event discounts, and inclusion to the advertizing on our home page!</p>`;
    dialogBox.showModal();
})

goldBTN.addEventListener("click", () => {
    dialogBoxText.innerHTML = `
    <h2>Gold Membership Level</h2>
    <p>The Gold Membership Level is our highest Level for $1,000 a month and include every benefit we offer!</p>
    <p>The Gold Membership Level includes hosting special events, training, event discounts, advertizing on our home page, prime locations within our events, and access to our temporary work force.</p>`;
    dialogBox.showModal();
})

closeBTN.addEventListener("click", () => {
    dialogBox.close();
});