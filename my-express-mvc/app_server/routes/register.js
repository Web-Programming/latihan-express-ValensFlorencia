const express = require("express");
const router = express.Router();
const controllerRegister = require("../controllers/controllerRegister");
// Route untuk registrasi
router.post("/", controllerRegister.insert);
module.exports = router;