console.log('Client-side code running');
// LOCAL USE:
//const myURL = "http://localhost:3000";

// STUDENT 04 use:
const myURL = "http://localhost:51005";

const zoomButton = document.getElementById('zoomButton');
zoomButton.addEventListener('click', function(e) {
  console.log('Zoom button was clicked');
  location.href = myURL.concat("/zoom")
});

const quizButton = document.getElementById('quizButton');
quizButton.addEventListener('click', function(e) {
  console.log('quiz button was clicked');
  location.href = myURL.concat("/quiz");
});

const memojisButton = document.getElementById('memojisButton');
memojisButton.addEventListener('click', function(e) {
  console.log('memojis button was clicked');
  location.href = myURL;
});

const beccaButton = document.getElementById('beccaButton');
beccaButton.addEventListener('click', function(e) {
  console.log('becca button was clicked');
  location.href = myURL.concat("/becca")
  //document.getElementById("AnimalImage").src ="images/camel.jpg"
  //document.getElementById("p2").innerHTML = "Camels are mammals with long legs, a big-lipped snout and a humped back.!";
  //document.getElementById("p1").innerHTML = "Cherry Camel"; 
});

const domButton = document.getElementById('domButton');
domButton.addEventListener('click', function(e) {
  console.log('dom button was clicked');
  location.href = myURL.concat("/dom")
  //document.getElementById("AnimalImage").src ="images/monkey.jpg";
  //document.getElementById("p2").innerHTML = "Monkeys live in trees, grasslands, mountains, forests, and on high plains. Each monkey has its own unique fingerprints.";
  //document.getElementById("p1").innerHTML = "Mindy Monkey"; 
});

const lilyButton = document.getElementById('lilyButton');
lilyButton.addEventListener('click', function(e) {
  console.log('lily button was clicked');
  location.href = myURL.concat("/lily") ;
  //document.getElementById("AnimalImage").src ="images/crocodile.jpg";
  //document.getElementById("p2").innerHTML = "Crocodiles are repitles with sharp teeth.  They can run very fast over short distances.";
  //document.getElementById("p1").innerHTML = "Craig Crocodile"; 
});

const bridgetButton = document.getElementById('bridgetButton');
bridgetButton.addEventListener('click', function(e) {
  console.log('bridget button was clicked');
  location.href = myURL.concat("/bridget");
  //document.getElementById("AnimalImage").src ="images/cow.jpg"
  //document.getElementById("p2").innerHTML = "Cows are ruminants, which are cud chewing mammals. Sheep and camels also are ruminants. A cow chews her cud (regurgitated, partially digested food) for up to 8 hours each day.";
  //document.getElementById("p1").innerHTML = "Chloe Cow";  
});

const resultsButton = document.getElementById('resultsButton');
resultsButton.addEventListener('click', function(e) {
  console.log('results button was clicked');
  location.href = myURL.concat("/results");
  //document.getElementById("AnimalImage").src ="images/cow.jpg"
  //document.getElementById("p2").innerHTML = "Cows are ruminants, which are cud chewing mammals. Sheep and camels also are ruminants. A cow chews her cud (regurgitated, partially digested food) for up to 8 hours each day.";
  //document.getElementById("p1").innerHTML = "Chloe Cow";  
});

var map;

function initMap() {
   // Zoo center point
   var potowatami = {
     lat: 41.670241,
     lng: -86.218401
   };
   
   var map = new google.maps.Map(document.getElementById('map'), {
   center: potowatami,
   zoom: 18,
   mapTypeId: 'satellite'
   });
   
   // Animal locations
   var monkeyCage = {
     lat: 41.670768,
   	 lng: -86.217297
   };
   var camelCage = {
     lat: 41.670088,
   	 lng:  -86.218338
   };   
   var cowCage = {
     lat: 41.670850,
   	 lng: -86.219570
   };   
   var crocCage = {
     lat: 41.669926,
   	 lng: -86.220068
   };
   var marker = new google.maps.Marker({
	 position: monkeyCage,
	 label: { color: '#f7f7f7', fontWeight: 'bold', fontSize: '10px', text: 'Monkeys' },
     map: map
   });
   var marker = new google.maps.Marker({
     position: camelCage,
     label: { color: '#f7f7f7', fontWeight: 'bold', fontSize: '10px', text: 'Camels' },
     map: map
   });
   var marker = new google.maps.Marker({
     position: cowCage,
     label: { color: '#f7f7f7', fontWeight: 'bold', fontSize: '10px', text: 'Cows' },
     map: map
   });
   var marker = new google.maps.Marker({
     position: crocCage,
     label: { color: '#f7f7f7', fontWeight: 'bold', fontSize: '10px', text: 'Crocodiles' },
     map: map
   });

}


