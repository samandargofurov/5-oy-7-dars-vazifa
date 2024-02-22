import { validateLogin, getData } from "./functions.js";

const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button');
const form = document.getElementById('form');

button &&  button.addEventListener('click', function(e) {
    e.preventDefault();
    let isValid = validateLogin(username, password);

    if (isValid) {
        let users = getData();
        let user = users.find((el) => {
            return el.username == username.value && el.password == password.value
        })

        if (user?.name) {

        } else {
            alert("sjdnvdvsdmkdc")
        }

    }
});