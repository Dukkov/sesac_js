document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("inputUsername");
    const passwordInput = document.getElementById("inputPassword");
    const main = document.getElementById("mainArticle");
    const loginNav = document.getElementById("loginMenu");
    const loginView = document.getElementById("profile");
    const loginName = document.getElementById("usernameSpan");

    window.updateLoginPage = () => {
        fetch("/checkUser")
            .then(resp => resp.json())
            .then(data => {
                if (data.username) {
                    loginNav.innerHTML = "";
                    main.innerHTML= "";
                    loginView.style.display = "block";
                    loginName.innerText = data.username;
                }
            })
            .catch(err => {
                console.error("error", err);
            });
    }

    form.addEventListener("submit", async (ev) => {
        ev.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        try {
            const resp = await fetch("/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: username, password: password })
            });

            if (resp.ok) {
                updateLoginPage();
            }
            else {
                alert("Invalid information!");
                usernameInput.value = "";
                passwordInput.value = "";
            }
        } catch (err) {
            console.error(err.message);
        }
    });
});