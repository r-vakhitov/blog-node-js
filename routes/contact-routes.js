const express = require('express');
const Contact = require('../models/contacts');
const createPath = require('../helpers/create-path');
const {getContacts} = require("../controllers/contact-controller");

const router = express.Router();

router.get('/contacts', getContacts);

module.exports = router;