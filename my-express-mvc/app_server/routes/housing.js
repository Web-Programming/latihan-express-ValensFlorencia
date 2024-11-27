const express = require("express");
const router = express.Router();
const housingController = require("../controllers/controllerHousing");
// Fungsi dan Rute Index Kita Gunakan Untuk Memanggil Semua Data Dalam Database MongoDB
router.get("/", housingController.Index);
// Router untuk mendapatkan data housing berdasarkam ID
router.get("/:id", housingController.getHousingById)
module.exports = router;