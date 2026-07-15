const addQueryBtn = document.getElementById("addQueryBtn");
const queryContainer = document.getElementById("queryContainer");

addQueryBtn.addEventListener("click", () => {

    const queryRow = document.createElement("div");

    queryRow.className = "query-row";

    queryRow.innerHTML = `
        <input type="text" placeholder="Key">
        <input type="text" placeholder="Value">
        <button class="delete-btn" type="button">❌</button>
    `;

    const deleteBtn = queryRow.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {
        queryRow.remove();
    });

    queryContainer.appendChild(queryRow);

});

function getQueryParams() {

    const queryRows = document.querySelectorAll(".query-row");

    const params = {};

    queryRows.forEach((row) => {

        const inputs = row.querySelectorAll("input");

        const key = inputs[0].value.trim();
        const value = inputs[1].value.trim();

        if (key !== "") {

            params[key] = value;

        }

    });

    return params;

}
window.getQueryParams = getQueryParams;