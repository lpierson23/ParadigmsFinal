exports.index = function(req, res, next) {
  res.render('index', { about: 'Welcome to our ZOOMoji!' , name:
 'all memojis'});
}

exports.zoom = function(req, res, next) {
  res.render('zoom', {about:'Zoom Time'});
}

exports.memojis = function(req, res, next) {
   res.render('index', { about: 'See our memojis.', name:'memojis'}); 
}

exports.becca = function(req, res, next) {
   console.log("Clicked on becca button")
   res.render('becca', { about: 'Lover of ducks, root beer, sweatshirts and long walks. In no particular order.', name:'becca'});
}

exports.lily = function(req, res, next) {
   console.log("Clicked on lily button")
   res.render('lily', { about: 'Lover of theater, all of the grandma things (knitting, sewing, reading), and coffee with lots of sugar. All number one.' , name:'lily'}); 
}

exports.bridget = function(req, res, next) {
   console.log("Clicked on bridget button")
   res.render('bridget', { about: 'Lover of Jesus, Sam\'s Club pizza, a good tan and the color green. In that order.' , name:'bridget'}); 
}

exports.dom = function(req, res, next) {
   console.log("Clicked on dom button")
   res.render('dom', { about: 'Lover of basic boy things: Star Wars, Game of Thrones, Mario Kart & going to football games.' , name:'dom'}); 
}


exports.quiz = function(req, res, next){
    console.log("Clicked on quiz button")
    res.render('quiz', {questions: 'Questions will go here.'});
}
//exports.map = function(req, res, next) {
//   res.render('map', { markers: 'Markers will go here.'}); 
//}

