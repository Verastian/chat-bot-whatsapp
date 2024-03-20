const fs = require("fs");;
const myConsole = new console.Console(fs.createWriteStream(".logs.txt"))

const verifyToken = (req, res) => {
    try {
        const accessToken = "affadfsuf9af9sdf!sSJkijjkDKSJ8i9h9hsd9u767sd8SHuSI";
        const token = req.query["hub.verify_token"];
        const challenge = req.query["hub.challenge"];

        if (challenge !== null && token !== null && token === accessToken) {
            res.send(challenge);
        } else {
            res.status(400).json({ message: 'error al verificar token' });
        }

    } catch (error) {
        res.status(400).json({ message: 'no se pudo verificar token' });
    }
}

const receivedMessage = (req, res) => {
    // res.send("received message")
    try {
        const entry = (req.body["entry"])[0];
        const changes = (entry["changes"])[0];
        const value = changes["value"];
        const messageObject = value["messages"]

        myConsole.log(messageObject);

        res.send("EVENT_RECEIVED");
    } catch (error) {
        myConsole(error)
        res.send("EVENT_RECEIVED");
    }
}

module.exports = {
    verifyToken, receivedMessage
}