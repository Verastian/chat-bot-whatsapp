// const fs = require("fs");
// const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const config = require('./config.js');
const https = require("https");
function SendMessageWhatsApp(data) {

    const options = {
        host: "graph.facebook.com",
        path: `/${config.APP_VERSION}/${config.APP_ID}/messages`,
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${config.TOKEN_WHATSAPP_API}`
        }
    };
    const req = https.request(options, res => {
        res.on("data", d => {
            process.stdout.write(d);
        });
    });

    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    SendMessageWhatsApp
};