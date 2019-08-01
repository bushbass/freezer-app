const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Item = require('../models/items');

// GET -INDEX - LIST ALL ITEMS
router.get('/', (req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => console.log(err));
});

module.exports = router;
