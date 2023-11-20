const verifyToken = (req, res) => {
    console.log(req.query)
    console.log(req.body)
    try {
        const accessToken = "affadfsuf9af9sdf!sSJkijjkDKSJ8i9h9hsd9u767sd8SHuSI";
        const token = req.query["hub.verify_token"];
        const challenge = req.body["hub.challenge"];

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
    res.send("received message")
}

module.exports = {
    verifyToken, receivedMessage
}