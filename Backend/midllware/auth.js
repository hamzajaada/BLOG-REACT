const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try {
        console.log(req.body);
        const user = req.body.username;
        const password = req.body.password;

        if (user === "admin" && password === "123") {
            req.session.username = user;
            req.session.password = password;
            next();
        } else {
            console.log("Erreur d'authentification");
            res.status(401).json({ error: "Authentification échouée" });
        }
    } catch (err) {
        console.log("Erreur lors de l'authentification");
        res.status(500).json({ error: "Erreur serveur" });
    }
};

module.exports = { auth };
