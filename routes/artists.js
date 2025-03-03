var express = require('express');
var router = express.Router();

const {PrismaClient } = require('@prisma/client'); 
const prisma = new PrismaClient();



/* GET users listing. */
router.get('/', function(req, res, next) {
  const data = [];
  res.json(data);
});

router.post('/', (req, res, next) => {
  res.send("Just created new record");
})

module.exports = router;