const verifyToken = (req, res) => {
    try {
        const accessToken = "affadfsuf9af9sdf!sSJkijjkDKSJ8i9h9hsd9u767sd8SHuSI";
        const token = req.query["hub.verify_token"];
        const challenge = req.body["hub.challenge"];

        if (challenge != null && token != null && token === accessToken) {
            res.send(challenge);
        } else {
            res.status(400).send();
        }

    } catch (error) {
        res.status(400).send();
    }
}

const receivedMessage = (req, res) => {
    res.send("received message")
}

module.exports = {
    verifyToken, receivedMessage
}