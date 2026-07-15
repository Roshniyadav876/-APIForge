const saveRequestBtn = document.getElementById("saveRequestBtn");

saveRequestBtn.addEventListener("click", () => {

    const request = {

        method: document.getElementById("method").value,

        url: document.getElementById("url").value,

        body: document.getElementById("requestBody").value

    };

    localStorage.setItem("savedRequest", JSON.stringify(request));

    alert("Request Saved Successfully");

});

window.addEventListener("load", () => {

    const savedRequest = JSON.parse(localStorage.getItem("savedRequest"));

    if (!savedRequest) {
        return;
    }

    document.getElementById("method").value = savedRequest.method;
    document.getElementById("url").value = savedRequest.url;
    document.getElementById("requestBody").value = savedRequest.body;

});