var express = require('express');
var router = express.Router();

let index = require('../controllers/index')

/* GET home page. */
router.get('/',index.index );
router.get('/zoom',index.zoom);
router.get('/memojis',index.memojis);
router.get('/becca',index.becca);
router.get('/dom',index.dom);
router.get('/bridget',index.bridget);
router.get('/lily',index.lily);
router.get('/quiz',index.quiz);


module.exports = router;
