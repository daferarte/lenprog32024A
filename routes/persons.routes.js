const {Router} = require('express');

const { addPerson, ShowPersons, UpdatePerson, DeletePerson, ShowPerson} = require('../controllers/persons.controller');

const router = Router();

router.get('/', ShowPersons);
router.post('/', addPerson);
router.put('/:id', UpdatePerson);
router.delete('/:id', DeletePerson);
router.get('/:id', ShowPerson);

module.exports = router;