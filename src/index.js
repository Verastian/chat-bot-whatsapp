const express = require("express");
const router = require("./routers/routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/whatsapp", router);

app.listen(PORT, () => { console.log("⚡ servidor conectado!! en el puerto ", PORT) })
