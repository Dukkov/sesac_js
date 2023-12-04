const username = document.getElementById("usernameInput");
const password = document.getElementById("passwordInput");

const userLogin = (event) => {
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
        .catch((err) => {
            alert(err.message);
            initForm();
        });
};

const userLogout = (event) => {
    fetch("/api/auth/logout")
        .then(resp => resp.json())
        .then(data => {
            alert(data.message);
            window.location.href = "/";
        })
        .catch((err) => {
            alert(err.message);
        });
};

const initForm = () => {
    username.value = "";
    password.value = "";
};