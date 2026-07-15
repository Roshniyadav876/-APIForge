// Elements Select

const method = document.getElementById("method");
const url = document.getElementById("url");
const sendBtn = document.getElementById("sendBtn");
const responseBox = document.getElementById("responseBox");
const status = document.getElementById("status");
const time = document.getElementById("time");
const size = document.getElementById("size");

sendBtn.addEventListener("click", async () => {

    const apiUrl = url.value;
    const requestMethod = method.value;

    const startTime = performance.now();
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

const endTime = performance.now();

const responseTime = (endTime - startTime).toFixed(2);

status.textContent = data.status;

time.textContent = responseTime + " ms";

const responseSize = new Blob([JSON.stringify(data.body)]).size;

size.textContent = responseSize + " Bytes";

headersBox.textContent = JSON.stringify(data.headers, null, 2);

responseBox.textContent = JSON.stringify(data.body, null, 2);
});