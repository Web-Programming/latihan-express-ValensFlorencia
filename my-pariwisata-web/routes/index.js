var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/paketWisata', function(req, res, next) {
  res.render('paketW0isata', { title: 'Paket Wisata' });
});

router.get('/orderPaket', function(req, res, next) {
  res.render('orderPaket', { title: 'Form Pemesanan Paket' });
});

router.post('/orderDetail', function(req, res, next) {
  res.render('orderDetail', { title: 'Detail Pemesanan Tiket' });
});
module.exports = router;
