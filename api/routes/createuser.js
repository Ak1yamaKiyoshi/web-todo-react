let express = require("express");
let router = express.Router();
const DBInterface = require("../database/interface");

router.get("/", function(req, res, next) {
    const {login, password, email, name, avatar} = req.query;
    let db = new DBInterface();
    db.initializeDB()
    db.opendb();
    db.createUser(login, password, email, name??"", avatar??"", (err, id) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error creating user");
        } else {
            res.status(200).send(`User created with ID: ${id}`);
        }
    });
});

module.exports = router;