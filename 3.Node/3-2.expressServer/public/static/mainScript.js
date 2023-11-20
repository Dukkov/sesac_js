document.addEventListener("DOMContentLoaded", async () => {
    const form = document.getElementById("form");
    const inputBox = document.getElementById("inputBox");

    const updateTable = (async () => {
        await fetch("/user")
            .then(resp => resp.json())
            .then(users => displayUsers(users))
            .catch(err => console.error(err));
    });

    const displayUsers = (users) => {
        const userTable = document.getElementById("userTable");
        userTable.innerHTML = "";

        if (Object.keys(users).length === 0) {
            const row = document.createElement("div");
            row.textContent = "No user info available";
            userTable.appendChild(row);
        }
        else {
            for (const key in users) {
                const row = document.createElement("div");
                row.innerHTML = `<strong>ID</strong>: ${key}, <strong>Name</strong> : ${users[key]}
                <button onclick="editUser(${key})">수정</button>
                <button onclick="deleteUser(${key})">삭제</button>`;
                userTable.appendChild(row);
            }
        }
    };

    window.editUser = async (userId) => {
        const changedName = prompt("수정할 이름 입력");
        const resp = await fetch(`/user/${userId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: changedName })
        });

        if (resp.ok) {
            alert("수정 완료");
            await updateTable();
        }
        else {
            const errMessage = await resp.text();
            alert(errMessage);
        }
    };

    window.deleteUser = async (userId) => {
        const confirmDelete = confirm(`${userId}를 삭제합니까?`);
        if (confirmDelete) {
            const resp = await fetch(`/user/${userId}`, { method: "DELETE" });

            if (resp.ok) {
                alert("삭제 완료");
                await updateTable();
            }
            else
                throw new Error(`삭제 실패: ${response.text()}`);
        }
    };

    await updateTable();

    form.addEventListener("submit", async (ev) => {
        ev.preventDefault();
        const newName = inputBox.value;

        if (!newName) {
            alert("Please enter your name");
            return;
        }

        try {
            const resp = await fetch("/user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({newName : newName})
            });

            if (resp.ok) {
                alert("Post done");
                inputBox.value = "";
                updateTable();
            }
            else {
                const errMessage = await resp.text();
                alert("Post failed" + errMessage);
            }
        } catch (err) {
            alert("error occured!");
        }
    });
})