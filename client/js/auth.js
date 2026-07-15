const authType = document.getElementById("authType");

const usernameBox = document.getElementById("usernameBox");
const passwordBox = document.getElementById("passwordBox");


function getAuthHeaders() {

    const authType = document.getElementById("authType").value;
    const authHeaders = {};

    if (authType === "bearer") {

        const token = document.getElementById("authUsername").value.trim();

        if (token) {
            authHeaders["Authorization"] = "Bearer " + token;
        }

    } else if (authType === "basic") {

        const username = document.getElementById("authUsername").value.trim();
        const password = document.getElementById("authPassword").value.trim();

        if (username || password) {

            const token = btoa(username + ":" + password);

            authHeaders["Authorization"] = "Basic " + token;
        }

    } else if (authType === "apikey") {

        const apiKey = document.getElementById("authUsername").value.trim();

        if (apiKey) {
            authHeaders["x-api-key"] = apiKey;
        }

    }

    return authHeaders;

}
authType.addEventListener("change", () => {

    if (authType.value === "none") {

        usernameBox.style.display = "none";
        passwordBox.style.display = "none";

    }

    else if (authType.value === "bearer") {

        usernameBox.style.display = "block";
        passwordBox.style.display = "none";

    }

    else if (authType.value === "basic") {

        usernameBox.style.display = "block";
        passwordBox.style.display = "block";

    }

    else if (authType.value === "apikey") {

        usernameBox.style.display = "block";
        passwordBox.style.display = "none";

    }

});

authType.dispatchEvent(new Event("change"));