document.addEventListener("DOMContentLoaded", async () => {
    const form = document.getElementById("form");
    const userName = document.getElementById("username");

    await updateTable();

    form.addEventListener("submit", async (ev) => {
        //submit 이벤트가 발생하면 form 의 action, method 속성을 이용해 서버로 데이터 전송함
        //또한 페이지가 reload 되는데, 이 일련의 작동을 막기 위해 ev.preventDefault() 사용.
        ev.preventDefault();
        const name = userName.value;
        console.log("test:" + name);
        
        if (!name) {
            alert("input your name");
            return;
        }

        try {
            const response = await fetch("/user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({name})
            });

            if (response.ok) {
                alert("registration done");
                userName.value = "";
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
    userTable.innerHTML = "";

    if (Object.keys(users).length === 0) {
        const messageRow = document.createElement("div");
        messageRow.textContent = "No user information available";
        userTable.appendChild(messageRow);
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
}

async function editUser(userId) {
    const newName = prompt("수정할 이름 입력");
    const response = await fetch(`/user/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name: newName})
    });

    if (response.ok) {
        alert("Modify done");
        await updateTable();
    }
    else {
        const errorMessage = await response.text();
        alert(errorMessage);
    }
}

async function deleteUser(userId) {
    const confirmDelete = confirm(`${userId}를 삭제합니까?`);
    if (confirmDelete) {
        const response = await fetch(`/user/${userId}`, {
            method: "DELETE"
        });

        if (response.ok) {
            alert("Delete done");
            await updateTable();
        }
        else
            throw new Error(`삭제 실패: ${response.text()}`);
    }
}