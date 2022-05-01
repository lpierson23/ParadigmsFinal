var express = require('express');
var router = express.Router();

let index = require('../controllers/index')

/* GET home page. */
router.get('/',index.index );
router.get('/zoom',index.zoom);
router.get('/memojis',index.memojis);

router.get('/becca',index.becca);
router.post('/becca', index.becca_like);

router.get('/dom',index.dom);
router.post('/dom', index.dom_like);

router.get('/bridget',index.bridget);
router.post('/bridget', index.bridget_like);

router.get('/lily',index.lily);
router.post('/lily', index.lily_like);

router.get('/quiz',index.quiz);

router.get('/results', index.results);

module.exports = router;
