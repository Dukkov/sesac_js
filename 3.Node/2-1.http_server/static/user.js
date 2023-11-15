document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const userName = document.getElementById("username");

    form.addEventListener("submit", async (ev) => {
        ev.preventDefault();
        const name = userName.value;
        
        if (!name) {
            alert("input your name");
            return;
        }

        try {
            const response = await fetch("/user", {
                method: "POST",
                header: { "Content-Type": "application/json" },
                body: JSON.stringify({name}),
            });

            if (response.ok) {
                alert("registration done");
                updateTable();
            }
            else {
                const errorMessage = await response.text();
                alert("registration failed: " + errorMessage);
            }
        } catch (err) {
            alert("error occured");         
        }   
    });
});

async function updateTable() {
    await fetch("/user")
        .then(response => response.json())
        .then(users => displayUsers(users))
        .catch(err => console.error(err));
}

function displayUsers(users) {
    const userTable = document.getElementById("userTable");

    if (Object.keys(users).length === 0) {
        const messageRow = document.createElement("div");
        messageRow.textContent = "No user information available";
        userTable.appendChild(messageRow);
    }
    else {
        for (const key in users) {
            const row = document.createElement("div");
            row.innerHTML = `ID: ${key}, Name : ${users[key]}`;
            userTable.appendChild(row);
        }
    }
}