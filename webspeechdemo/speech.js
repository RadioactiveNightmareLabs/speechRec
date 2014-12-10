// get last word said element
var strongEl = document.getElementById('latest-word');

// new instance of speech recognition
var recognition = new webkitSpeechRecognition();
// set params
recognition.continuous = true;
recognition.interimResults = true;
// recognition.start();

recognition.onresult = function(event){

  //test output event results
  console.log(event.results);

  // delve into words detected results & get the latest
  // total results detected
  var resultsLength = event.results.length -1 ;
  // get length of latest results
  var ArrayLength = event.results[resultsLength].length -1;
  // get last word detected
  var saidWord = event.results[resultsLength][ArrayLength].transcript;

  console.log(saidWord);
  console.log(new Date());
}

// speech error handling
recognition.onerror = function(event){
  console.log('error?');
  console.log(event);
}
