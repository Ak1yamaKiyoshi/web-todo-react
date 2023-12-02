let express = require("express");
let router = express.Router();
const DBInterface = require("../database/interface");

router.get("/", async function(req, res, next) {
    const {login, password} = req.query;
    let db = new DBInterface();
    let userid = await db.checkCredentials(`${login}`, `${password}`);
    res.status(200).send(`${userid}`);
});


module.exports = router;