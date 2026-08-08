document.getElementById("currentyear").innerHTML = new Date().getFullYear()
document.getElementById("lastModified").innerHTML = document.lastModified;


const navbutton = document.querySelector('#navBTN');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
})


const getString = window.location.search;
console.log(getString);

const submitedInfo = new URLSearchParams(getString);
console.log(submitedInfo);


document.querySelector("#thankText").innerHTML = `
<p>Thank you ${submitedInfo.get("first")} ${submitedInfo.get("last")} for suggesting I add ${submitedInfo.get("missingAnimatronic")} to the encyclopedia! I will email you at ${submitedInfo.get("email")} when and/or if I add the character.</p>`