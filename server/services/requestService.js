const sendRequest = async (url, method, headers, body) => {

    const options = {
        method: method,
        headers: headers
    };

    if (method !== "GET" && method !== "DELETE") {

    try {

        options.body = JSON.stringify(JSON.parse(body));

    } catch {

        options.body = body;

    }

}

    const apiResponse = await fetch(url, options);

    const data = await apiResponse.json();

    return {
        status: apiResponse.status,
        headers: Object.fromEntries(apiResponse.headers.entries()),
        body: data
    };

};

module.exports = {
    sendRequest
};