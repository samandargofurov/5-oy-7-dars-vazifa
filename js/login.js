import { validateLogin, getData } from "./functions.js";

const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button');
const error = document.getElementById("error")
const form = document.getElementById('form');

button &&  button.addEventListener('click', function(e) {
    e.preventDefault();
    let isValid = validateLogin(username, password);

    if (isValid) {
        let users = getData();
        let user = users.find((el) => {
            return el.username == username.value && el.password == password.value
        });
        
        if (user?.name) {
            error.classList = 'd-none text-danger';
            let fullUrl = window.location.href
            let index = fullUrl.search('/pages');
            let baseUrl = fullUrl.substring(0, index);
            window.location.assign(`${baseUrl}/index.html`);
        } else {
            error.classList = `d-block text-danger`;
            error.innerHTML = 'The password or username was entered incorrectly'
        }

    }
});