const { sendRequest } = require("../services/requestService");

const handleRequest = async (req, res) => {

    try {

        const { url, method, headers, body } = req.body;

        const result = await sendRequest(url, method, headers, body);

        res.json(result);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

module.exports = {
    handleRequest
};