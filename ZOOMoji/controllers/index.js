exports.index = function(req, res, next) {
  res.render('index', { about: 'Welcome to our ZOOMoji!' , animal_name:
 'all memojis'});
}

exports.zoom = function(req, res, next) {
  res.render('zoom', {about:'Zoom Time'});
}

exports.memojis = function(req, res, next) {
   res.render('index', { about: 'See our memojis.', animal_name:'memojis'}); 
}

exports.becca = function(req, res, next) {
   console.log("Clicked on becca button")
   res.render('becca', { about: 'Lover of ducks, root beer, sweatshirts and long walks. In no particular order.', animal_name:'becca'});
}

exports.lily = function(req, res, next) {
   console.log("Clicked on lily button")
   res.render('lily', { about: 'Lover of theater, all of the grandma things (knitting, sewing, reading), and coffee with lots of sugar. All number one.' , animal_name:'lily'}); 
}

exports.bridget = function(req, res, next) {
   console.log("Clicked on bridget button")
   res.render('bridget', { about: 'Lover of Jesus, Sam\'s Club pizza, a good tan and the color green. In that order.' , animal_name:'bridget'}); 
}

exports.dom = function(req, res, next) {
   console.log("Clicked on dom button")
   res.render('dom', { about: 'Monkeys live in trees, grasslands, mountains, forests, and on high plains. Each monkey has its own unique fingerprints.' , animal_name:'dom'}); 
}

//exports.map = function(req, res, next) {
//   res.render('map', { markers: 'Markers will go here.'}); 
//}

