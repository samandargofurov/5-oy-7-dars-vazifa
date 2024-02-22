import { validateRegister, getData } from "./functions.js";

const name = document.getElementById('name');
const surname = document.getElementById('surname');
const age = document.getElementById('age');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const form = document.getElementById('form');
const button = document.getElementById('button');

button &&  button.addEventListener('click', function(e) {
    e.preventDefault();
    let isValid = validateRegister(name, surname, age, email, username, password, repassword);

    if (isValid) {
        let user = {
            name: name.value,
            surname: surname.value,
            age: age.value,
            email: email.value,
            username: username.value,
            password: password.value,
            repassword: repassword.value
        }

        let users = getData();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        form.reset();

            
        let index = window.location.href.search('/pages');
        let baseUrl = window.location.href.substring(0, index);
        window.location.assign(`${baseUrl}/pages/login.html`);
    }
})