const express = require("express");
const {register ,login,registerNumber} = require("../controllers/user");
const router = express.Router();


router.get("/genrate", registerNumber);
router.post("/register", register);
router.post("/login", login);




module.exports = router;
