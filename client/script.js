// Elements Select

const method = document.getElementById("method");
const url = document.getElementById("url");
const sendBtn = document.getElementById("sendBtn");
const responseBox = document.getElementById("responseBox");

sendBtn.addEventListener("click", async () => {

    const apiUrl = url.value;
    const requestMethod = method.value;

    const response = await fetch("http://localhost:5000/api/request", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            url: apiUrl,
            method: requestMethod
        })

    });


    const data = await response.json();

responseBox.textContent = JSON.stringify(data, null, 2);

});