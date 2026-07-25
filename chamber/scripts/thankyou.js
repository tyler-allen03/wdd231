const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

document.getElementById("currentyear").innerHTML = new Date().getFullYear()
document.getElementById("lastModified").innerHTML = document.lastModified;
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
})


const getString = window.location.search;
console.log(getString);

const submitedInfo = new URLSearchParams(getString);
console.log(submitedInfo);

console.log(submitedInfo.get("first"));
console.log(submitedInfo.get("last"));
console.log(submitedInfo.get("email"));
console.log(submitedInfo.get("phone"));
console.log(submitedInfo.get("title"));
console.log(submitedInfo.get("buisness"));
console.log(submitedInfo.get("desc"));
console.log(submitedInfo.get("membership"));
console.log(submitedInfo.get("timestamp"));
console.log(submitedInfo.get("submit"));

document.querySelector("#thankText").innerHTML = `
<p>Thank you, ${submitedInfo.get("first")} ${submitedInfo.get("last")}, for signing up ${submitedInfo.get("buisness")} for a ${submitedInfo.get("membership")} membership!</p>
<p>Please review the following information to ensure that it is correct, and feel free to reach out if something is wrong!</p>
<p>First Name: ${submitedInfo.get("first")}</p>
<p>Last Name: ${submitedInfo.get("last")}</p>
<p>Email: ${submitedInfo.get("email")}</p>
<p>Phone Number: ${submitedInfo.get("phone")}</p>
<p>Buisness Name: ${submitedInfo.get("buisness")}</p>
<p>Current Date: ${submitedInfo.get("timestamp")}</p>`;