const { User } = require("../models/users");

const testHome = (req, res) => {
    return res.send(" Home Page of Practice-app!");
};

module.exports = { testHome };


