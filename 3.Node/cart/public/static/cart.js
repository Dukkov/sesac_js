const cartTableBody = document.getElementById("cartTableBody");

const updateCartPage = () => {
    cartTableBody.innerHTML = "";

    fetch("/api/cartInfo")
    .then(resp => resp.json())
    .then(data => {
        if (data.length === 0) {
            const cartTableRow = document.createElement("tr");
            const cartTableAlert = createTableCell("Your cart is currently empty!");
            cartTableAlert.colSpan = 5;
            cartTableAlert.style.padding = "10px 0";
            cartTableAlert.style.fontWeight = "bold";
            cartTableRow.appendChild(cartTableAlert);
            cartTableBody.appendChild(cartTableRow);
        }
        else {
            for (row of data) {
                if (parseInt(row.qty) > 0) {
                    const cartTableRow = document.createElement("tr");
                    const cartTableId = createTableCell(row.id);
                    const cartTableName = createTableCell(row.name);
                    const cartTablePrice = createTableCell(row.price);
                    const cartTableQty = createTableCell(row.qty);
                    const cartTablePlusQty = createAdjustBtn("+", plusQty, row.id);
                    const cartTableMinusQty = createAdjustBtn("-", minusQty, row.id);
                    const cartTableBtn = createTableBtn("Remove", rmFromCart, row.id);
    
                    cartTableQty.appendChild(cartTablePlusQty);
                    cartTableQty.appendChild(cartTableMinusQty);
                    cartTableRow.appendChild(cartTableId);
                    cartTableRow.appendChild(cartTableName);
                    cartTableRow.appendChild(cartTablePrice);
                    cartTableRow.appendChild(cartTableQty);
                    cartTableRow.appendChild(cartTableBtn);
                    cartTableBody.appendChild(cartTableRow);
                }
            }
            const cartTableTotal = document.getElementById("cartTableTotal");
            getCartTotal()
                .then(total => cartTableTotal.textContent = total);
        }
    })
    .catch(err => console.error(err));
}

const createTableCell = (content) => {
    const td = document.createElement("td");
    td.textContent = content;
    return (td);
};

const createTableBtn = (value, onclick, id) => {
    const td = document.createElement("td");
    const btn = document.createElement("input");
    btn.type = "button";
    btn.value = value;
    btn.onclick = () => onclick(id);
    td.appendChild(btn);
    return (td);
};

const createAdjustBtn = (value, onclick, id) => {
    const btn = document.createElement("input");
    btn.type = "button";
    btn.value = value;
    btn.className = "adjustBtn"
    btn.onclick = () => onclick(id);
    return (btn);
};

const plusQty = (id) => {
    fetch(`/api/adjustCart/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adjust : 1 })
    })
        .then(resp => resp.json())
        .then(data => {
            updateCartPage();
            console.log(data.message);
        })
}

const minusQty = (id) => {
    fetch(`/api/adjustCart/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adjust : -1 })
    })
        .then(resp => resp.json())
        .then(data => {
            updateCartPage();
            console.log(data.message);
        })
}

const rmFromCart = (id) => {
    if (confirm("Are you sure you want to remove the item from your cart?")) {
        fetch(`/api/dropCart/${id}`, { method: "DELETE" })
            .then(resp => resp.json())
            .then(data => {
                alert(data.message);
                updateCartPage();
            })
            .catch(err => console.error(err));
    }
};

const getCartTotal = () => {
    return fetch("/api/cartTotal")
        .then(resp => resp.json())
        .then(data => {
            console.log(data.total);
            return (data.total);
        })
};

updateCartPage();