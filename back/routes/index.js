const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Estoy en Home");
});

router.get('/detail-product', function(req, res, next) {
  res.send("Estoy en detalle de producto");
});

router.get('/registrarme', function(req, res, next) {
  res.send("Estoy en registrarme");
});

router.get('/cart', function(req, res, next) {
  res.send("Estoy en cart");
});

router.get('/inicio-sesion', function(req, res, next) {
  res.send("Estoy en inisio de sesion");
});

module.exports = router;
