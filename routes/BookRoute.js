const express = require('express');
const router = express.Router();
const BookAll = require('../controllers/BookAllGet');
const BookPostOne = require('../controllers/BookPost');
const upload = require('../helpers/multer');

// Mindent lekérünk az adatbázisból.
router.get('/', BookAll);

// Adat betöltése az adatbázisba
router.post('/tolt', upload.single('picture'), BookPostOne);

// Egy elem lekérdezése
// router.get('/:id', );

// Egy elem frissitése
// router.patch('/frissit/:id', );

// Egy elem törlése
// router.delete('/torol/:id', );

module.exports = router;