const express = require('express');
const router = express.Router();

router
.route('/new_build')
.get((req, res) => {
  res.status(200).json({ message: 'New build created' });
})

module.exports = router;