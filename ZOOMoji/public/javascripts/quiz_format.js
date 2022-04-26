console.log('Quiz running')

const myURL = "http://student04.cse.nd.edu:51005";

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function(e) {
  console.log('Submit button was clicked');
  location.href = myURL;
  
});
