document.addEventListener("DOMContentLoaded", async () => {
    const tableBody = document.getElementsByTagName("tbody")[0];

    window.addToCart = (id) => {
        fetch(`addCart/${id}`, { method: "POST"})
            .then(resp => resp.json())
            .then(data => {
                alert(data.message);
                fetch("/cart")
                    .then(resp => resp.json())
                    .then(cart => displayCart(cart));
            });
    };

    window.displayCart = (cart) => {
        const cartTableBody = document.getElementById("cartTable").getElementsByTagName("tbody")[0];
        cartTableBody.innerHTML = "";
        cart.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
            `
            cartTableBody.appendChild(row);
        });
    };

    fetch("/products")
        .then(resp => resp.json())
        .then(data => {
            for (row of data) {
                console.log(row);
                const tableRow = document.createElement("tr");
                const tdId = document.createElement("td");
                const tdName = document.createElement("td");
                const tdPrice = document.createElement("td");
                const tdButton = document.createElement("td");

                tdId.textContent = row.id;
                tdName.textContent = row.name;
                tdPrice.textContent = row.price;
                tdButton.innerHTML = `<input type="button" value="담기" class="addCartBtn" onclick="addToCart(${row.id})">`

                tableBody.appendChild(tableRow);
                tableRow.appendChild(tdId);
                tableRow.appendChild(tdName);
                tableRow.appendChild(tdPrice);
                tableRow.appendChild(tdButton);
            }
        })
        .catch(err => {
            console.error(err);
        })
});