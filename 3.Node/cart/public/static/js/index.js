const username = document.getElementById("inputUsername");
const password = document.getElementById("inputPassword");
const mainArticle = document.getElementById("mainArticle");
const loginForm = document.getElementById("loginForm");

const loginToCvs = (event) => {
    event.preventDefault();

    fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.value, password: password.value })
    })
        .then(resp => resp.json())
        .then(data => {
            alert(data.message);
            initForm();
            window.location.href = "/";
        })
        .catch(err => {
            alert(err.message);
            initForm();
        });
};

const initForm = () => {
    username.value = "";
    password.value = "";
};