// Elements Select

const method = document.getElementById("method");
const url = document.getElementById("url");
const sendBtn = document.getElementById("sendBtn");
const responseBox = document.getElementById("responseBox");
const headersBox = document.getElementById("headersBox");
const status = document.getElementById("status");
const time = document.getElementById("time");
const size = document.getElementById("size");

sendBtn.addEventListener("click", async () => {

    // 👇 Yahan ye code aayega
    const queryParams = getQueryParams();

    const queryString = new URLSearchParams(queryParams).toString();

    let apiUrl = url.value;

    if (queryString) {
        apiUrl += "?" + queryString;
    }
    const requestHeaders = getHeaders();
    const authHeaders = getAuthHeaders();

    Object.assign(requestHeaders, authHeaders);
    const requestBody = document.getElementById("requestBody").value;
    const requestMethod = method.value;

    const startTime = performance.now();

    const response = await fetch("http://localhost:5000/api/request", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            url: apiUrl,
            method: requestMethod,
            headers: requestHeaders,
            body: requestBody
        })

    });

    const data = await response.json();

    const endTime = performance.now();

    status.textContent = data.status;
    time.textContent = (endTime - startTime).toFixed(2) + " ms";
    size.textContent = new Blob([JSON.stringify(data.body)]).size + " Bytes";

    headersBox.textContent = JSON.stringify(data.headers, null, 2);
    responseBox.textContent = JSON.stringify(data.body, null, 2);

});