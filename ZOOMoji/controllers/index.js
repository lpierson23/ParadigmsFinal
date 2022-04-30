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
    const all = 
[
   {
      "question":"What is your favorite dog?",
      "answers":{
         "a":"I\'m a cat person",
         "b":"My dog",
         "c":"Any dog that will let me pet it",
         "d":"Beagles"
      }
   },
   {
      "question":"What dorm do you live in?",
      "answers":{
         "a":"Off-campus",
         "b":"Cav",
         "c":"PE",
         "d":"Siggy, baby"
      }
   },
   {
      "question":"What is your favorite food to have on campus?",
      "answers":{
         "a":"Smashburger",
         "b":"Starbucks",
         "c":"Modern Market",
         "d":"Subway"
      }
   },
   {
      "question":"What is your favorite ND tradition?",
      "answers":{
         "a":"ND Day",
         "b":"Keenan Revue",
         "c":"The Meritocracy",
         "d":"Football Games"
      }
   },
   {
      "question":"What is your favorite Taylor Swift song?",
      "answers":{
         "a":"Paper Rings",
         "b":"Picture to Burn",
         "c":"London Boy",
         "d":"I Knew You Were Trouble"
      }
   }
]
    
    const questionCombos = ["012", "013", "014", "123", "124", "134", "023", "024", "234"];

    
    let questionNums = questionCombos[Math.floor(Math.random() * 9)];
    console.log(questionNums);
    var count = 0;
    var selected = [];

    for(var i=0; i < all.length; i++){
        if(questionNums.charAt(count) == i){
            console.log(questionNums.charAt(count));
            selected.push(all[i]);
            count += 1;
        }
    }

    res.render('quiz', {questions: selected});
}


exports.results = function(req, res, next) {
    console.log("Clicked on submit button")
        var aCount = 0;
        var bCount = 0;
        var cCount = 0;
        var dCount = 0;
            
            
        var answer = document.getElementById("result").innerHTML = "";
        var elements = document.getElementsByTagName('input');
            
        for (i = 0; i < elements.length; i++){
            if(elements[i].type = 'radio'){
                if(elements[i].checked){
                    switch(elements[i].value){
                        case 'a':
                            aCount += 1;
                            break;
                        case 'b':
                            bCount += 1;
                            break;
                        case 'c':
                            cCount += 1;
                            break;
                        case 'd':
                            dCount += 1;
                            break;
                        default:
                            break;
    
                    }
                }
            }
        } 
        
        let winner = Math.max(aCount, bCount, cCount, dCount);

        if(winner == aCount){
            console.log('Becca');
            res.render('results', {answer: 'You are most like Becca!'});
        }else if (winner == bCount){
            console.log('Bridget');
            res.render('results', {answer: 'You are most like Bridget!'});
        }else if (winner == cCount){
            console.log('Lily');
            res.render('results', {answer: 'You are most like Lily!'}); 
        }else if (winner == dCount){
            console.log('Dom');
            res.render('results', {answer: 'You are most like Dom!'});
        }else {
            res.render('results', {answer: 'There was an error, please retake the quiz'});
        } 
}

//exports.map = function(req, res, next) {
//   res.render('map', { markers: 'Markers will go here.'}); 
//}

