const username = document.getElementById("inputUsername");
const password = document.getElementById("inputPassword");
const mainArticle = document.getElementById("mainArticle");
const loginForm = document.getElementById("loginForm");

const loginToCvs = (event) => {
    event.preventDefault();

    fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.value, password: password.value })
    })
        .then(resp => resp.json())
        .then(data => {
            alert(data.message);
            updateLoginPage();
            initForm();
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

const updateLoginPage = async () => {
    await fetch("/api/userInfo")
        .then(resp => resp.json())
        .then(data => {
            if (data.username) {
                mainArticle.innerHTML = "";
                const greeting = document.createElement("h2");
                greeting.textContent = `Hello, ${data.username}!`;
                mainArticle.appendChild(greeting);
            }
            else {
                
            }
        });
};

updateLoginPage();