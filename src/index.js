const express = require("express");
const config = require('./config.js');
const apiRoute = require("./routes/routes");

const app = express();

const PORT = config.PORT || 3000;

app.use(express.json());
app.use("/whatsapp", apiRoute);

app.listen(PORT, () => { console.log("⚡ servidor conectado!! en el puerto ", PORT) })
