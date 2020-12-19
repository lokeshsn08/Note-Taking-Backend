const {createNote,getNote} = require('./note.controller')
const router = require('express').Router();

router.post('/',createNote);

router.get('/:id',getNote);

module.exports = router;