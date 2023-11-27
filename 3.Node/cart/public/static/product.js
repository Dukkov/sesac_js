const productTableBody = document.getElementById("productTableBody");

fetch("/api/products")
    .then(resp => resp.json())
    .then(data => {
        for (row of data) {
            const productTableRow = document.createElement("tr");
            const productTableId = createTableCell(row.id);
            const productTableName = createTableCell(row.name);
            const productTablePrice = createTableCell(row.price);
            const productTableBtn = createTableBtn("담기", row.id);

            productTableRow.appendChild(productTableId);
            productTableRow.appendChild(productTableName);
            productTableRow.appendChild(productTablePrice);
            productTableRow.appendChild(productTableBtn);
            productTableBody.appendChild(productTableRow);
        }
    })
    .catch (err => {
        console.error(err);
    });

window.createTableCell = (content) => {
    const td = document.createElement("td");
    td.textContent = content;
    return (td);
};

window.createTableBtn = (value, btnId) => {
    const td = document.createElement("td");
    const btn = document.createElement("input");
    btn.type = "button";
    btn.value = value;
    btn.onclick = () => addToCart(btnId);
    td.appendChild(btn);
    return (td);
};

window.addToCart = (id) => {
    fetch(`/api/addCart/${id}`, { method: "POST" })
        .then(resp => resp.json())
        .then(data => {
            alert(data.message);
        })
        .catch(err => console.error(err));
};

const logout = async () => {
    const resp = await fetch("/api/logout");
    const data = await resp.json();
    alert("Logout done");
    window.location = "/";
};