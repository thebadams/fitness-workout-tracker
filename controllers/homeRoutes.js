const router = require('express').Router();
const path = require('path');

router.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

router.get('/exercise', async (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

module.exports = router;
