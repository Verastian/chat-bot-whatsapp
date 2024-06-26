const config = require("../config")
const processMessage = require("../shared/processMessage");
// const fs = require("fs");;
// const myConsole = new console.Console(fs.createWriteStream(".logs.txt"))

const verifyToken = (req, res) => {
    try {
        const accessToken = config.ACCESS_TOKEN;
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
        const messageObject = value["messages"];

        if (messageObject) {
            const messages = messageObject[0];
            const number = messages["from"];

            const text = GetTextUser(messages);

            if (text !== "") processMessage.Process(text, number);

            console.log('TEXT: ', text);
            console.log('NUMBER: ', number);
        }


        res.send("EVENT_RECEIVED");
    } catch (error) {
        console.log(error)
        res.send("EVENT_RECEIVED");
    }
}

const GetTextUser = (messages) => {
    let text = "";
    const typeMessage = messages["type"];
    if (typeMessage === "text") {
        text = (messages["text"])["body"];
    } else if (typeMessage === "interactive") {
        const interactiveObject = messages["interactive"];
        const typeInteractive = interactiveObject["type"];

        console.log(interactiveObject);

        if (typeInteractive === "button_reply") {
            text = (interactiveObject["button_reply"])["title"];

        } else if (typeInteractive === "list_reply") {
            text = (interactiveObject["list_reply"])["title"];

        } else {
            console.log("sin mensaje")
        }
    } else {
        console.log("sin mensaje")

    }
    return text;
}

module.exports = {
    verifyToken, receivedMessage
}