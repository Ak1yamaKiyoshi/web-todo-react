let express = require("express");
let router = express.Router();
const DBInterface = require("../database/interface");

router.post("/", function(req, res, next) {
    const {login, password, email, name, avatar} = req.query;
    console.log(req.query);
    let db = new DBInterface();
    db.createUser(login, password, email, name??"", avatar??"", (err, id) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error creating user");
        } else {
            res.status(200).send(`User created with ID: ${id}`);
        }
    });
});

/*
router.get("/", async function(req, res, next) {
    const {login, password} = req.query;
    let db = new DBInterface();
    let userid = await db.checkCredentials(`${login}`, `${password}`);
    res.status(200).send(`${userid}`);
});
*/

module.exports = router;