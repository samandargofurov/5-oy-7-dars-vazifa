const name = document.getElementById('name');
const surname = document.getElementById('surname');
const age = document.getElementById('age');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');

let fullUrl = window.location.href
let index = fullUrl.search('index');
let baseUrl = fullUrl.substring(0, index);

document.addEventListener('DOMContentLoaded', function() {
    let users = getData();
    let activeUser = localStorage.getItem("activeUser");

    if(activeUser) {
        let user = users.find(el => {
            return el.username == activeUser
        })

        console.log(user);
    } else {
        window.location.assign(`${baseUrl}/pages/login.html`)
    }
})