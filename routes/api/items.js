const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Item = require('../../models/items');

// GET -INDEX - LIST ALL ITEMS
router.get('/', (req, res) => {
  Item.find()
    .then(items => {
      console.log('items here"', items);
      res.json(items);
    })
    .catch(err => console.log(err));
});

// POST - CREATE - CREATE NEW ITEM
router.post('/', (req, res) => {
  console.log('hi from post');
  const newItem = new Item({
    name: req.body.name,
    description: req.body.description,
    dateOnBag: req.body.dateOnBag
  });
  newItem
    .save()
    .then(item => res.json(item))
    .catch(err => console.log(err));
});

// GET - SHOW - ONE ITEM
router.get('/:id', (req, res) => {
  Item.findById(req.params.id).then(item => res.json(item));
});

// PUT - UPDATE - EDIT ITEM
router.put('/:id', (req, res) => {
  const updatedItem = {
    name: req.body.name,
    description: req.body.description,
    dateOnBag: req.body.dateOnBag
  };
  console.log(updatedItem);
  Item.findByIdAndUpdate(req.params.id, { new: true })
    .then(item => res.json(item))
    .catch(err => console.log(err));
});

// DELETE - DESTROY ONE ITEM
router.delete('/:id', (req, res) => {
  Item.findByIdAndRemove(req.params.id)
    .then(item => res.json(item))
    .catch(err => console.log(err));
});

module.exports = router;
