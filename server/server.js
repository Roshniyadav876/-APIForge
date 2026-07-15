const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/request", async (req, res) => {

    try {

        const { url, method } = req.body;

        const apiResponse = await fetch(url, {
            method: method
        });

        const data = await apiResponse.json();

        const headers = Object.fromEntries(apiResponse.headers.entries());

        res.json({
            status: apiResponse.status,
            headers: headers,
            body: data
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

app.listen(5000, () => {
    console.log("Server Running On Port 5000");
});