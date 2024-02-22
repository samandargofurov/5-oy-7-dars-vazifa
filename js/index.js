import { getData } from "./functions,js";

const name = document.getElementById('name');
const surname = document.getElementById('surname');
const age = document.getElementById('age');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const logout = document.getElementById('logout');

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

        if (user) {
            name.innerHTML = user.name
            surname.innerHTML = user.surname
            age.innerHTML = user.age
            email.innerHTML = user.email
            username.innerHTML = user.username
            password.innerHTML = user.password
        } else {
            window.location.assign(`${baseUrl}pages/login.html`);
        }

    } else {
        window.location.assign(`${baseUrl}/pages/login.html`)
    }
});

logout && logout.addEventListener('click', function() {
    localStorage.removeItem('activeUser');
    window.location.assign(`${baseUrl}pages/login.html`);
});