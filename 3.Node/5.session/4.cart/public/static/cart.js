const cartTableBody = document.getElementById("cartTableBody");

fetch("/cartMap")
    .then(resp => resp.json())
    .then(data => {
        for (row of data) {
            if (parseInt(row.quantity) > 0) {
                const cartTableRow = document.createElement("tr");
                const cartTableId = createTableCell(row.id);
                const cartTableName = createTableCell(row.name);
                const cartTablePrice = createTableCell(row.price);
                const cartTableQty = createTableCell(row.quantity);
                const cartTableBtn = createTableBtn();

                cartTableRow.appendChild(cartTableId);
                cartTableRow.appendChild(cartTableName);
                cartTableRow.appendChild(cartTablePrice);
                cartTableRow.appendChild(cartTableQty);
                cartTableBody.appendChild(cartTableRow);
            }
        }
    })
    .catch(err => console.error(err));

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