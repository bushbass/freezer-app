const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Item = require('../models/items');

// GET -INDEX - LIST ALL ITEMS
router.get('/', (req, res) => {
  Item.find()
    .then(items => res.render('allItems', { items: items }))
    .catch(err => console.log(err));
});

// POST - CREATE - CREATE NEW ITEM
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    description: req.body.description,
    dateOnBag: req.body.dateOnBag
  });
  newItem
    .save()
    // .then(item=> res.json(item))// todo res.render single item page
    .then(item => res.render('singleItem', { item })) // todo res.render single item page
    .catch(err => console.log(err));
});

// GET - NEW - CREATE ITEM FORM
router.get('/new', (req, res) => {
  res.render('addItem', { title: 'Add New Item', item: '' });
});
// GET - SHOW - ONE ITEM
router.get('/:id', (req, res) => {
  Item.findById(req.params.id).then(item => res.render('singleItem', { item }));
});
// GET - EDIT FORM
router.get('/:id/edit', (req, res) => {
  Item.findById(req.params.id).then(item => res.render('editItem', { item }));
});
// PUT - UPDATE - EDIT ITEM
router.put('/:id', (req, res) => {
  const updatedItem = {
    name: req.body.name,
    description: req.body.description,
    dateOnBag: req.body.dateOnBag
  };
  console.log(updatedItem);
  Item.findByIdAndUpdate(req.params.id, updatedItem, { new: true })
    .then(item => res.render('singleItem', { item }))
    .catch(err => console.log(err));
});

// DELETE - DESTROY ONE ITEM
router.delete('/:id', (req, res) => {
  Item.findByIdAndRemove(req.params.id)
    .then(item =>
      res.render('addItem', { title: ' deleted - Add new item', item })
    )
    .catch(err => console.log(err));
});

module.exports = router;
