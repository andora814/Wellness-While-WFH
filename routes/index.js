const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/', (req, res) => res.send('This is root!'));

router.get('/tips', controllers.getAllTips);
router.get('/tips/:id', controllers.getTipById);
router.post('/addtip', controllers.createTip);
router.put('/tips/:id', controllers.updateTip);
router.delete('/tips/:id', controllers.deleteTip);

module.exports = router;
