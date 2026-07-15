const addHeaderBtn = document.getElementById("addHeaderBtn");
const headerContainer = document.getElementById("headerContainer");

addHeaderBtn.addEventListener("click", () => {

    const headerRow = document.createElement("div");

    headerRow.className = "header-row";

    headerRow.innerHTML = `
        <input type="text" placeholder="Header Name">
        <input type="text" placeholder="Header Value">
        <button class="delete-btn" type="button">❌</button>
    `;

    const deleteBtn = headerRow.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {
        headerRow.remove();
    });

    headerContainer.appendChild(headerRow);

});

function getHeaders() {

    const headers = {};

    const rows = document.querySelectorAll(".header-row");

    rows.forEach((row) => {

        const key = row.children[0].value.trim();
        const value = row.children[1].value.trim();

        if (key !== "") {
            headers[key] = value;
        }

    });

    return headers;

}
console.log(getHeaders());