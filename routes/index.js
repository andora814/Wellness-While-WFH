const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/api', (req, res) => res.send('This is root!'));

router.get('/tips', controllers.getAllTips);
router.get('/tips/:id', controllers.getTipById);
router.post('/addtip', controllers.createTip);
router.put('/updatetip/:id', controllers.updateTip);
router.delete('/tips/:id', controllers.deleteTip);

router.get('/poses', controllers.getAllPoses);
router.post('/addpose', controllers.createPose);
router.delete('/poses/:id', controllers.deletePose);

module.exports = router;
