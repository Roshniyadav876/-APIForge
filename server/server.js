const express = require("express");
const cors = require("cors");

const requestRoutes = require("./routes/requestRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", requestRoutes);

app.listen(5000, () => {
    console.log("Server Running On Port 5000");
});