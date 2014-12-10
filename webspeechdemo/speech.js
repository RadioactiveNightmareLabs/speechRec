// get last word said element
var strongEl = document.getElementById('latest-word');

// new instance of speech recognition
var recognition = new webkitSpeechRecognition();
// set params
recognition.continuous = true;
recognition.interimResults = true;
// recognition.start();
var resultObject = {};
var lastLength = 0;

recognition.onresult = function(event){

  //test output event results

  // delve into words detected results & get the latest
  // total results detected
  var resultsLength = event.results.length -1 ;
  // get length of latest results
  var ArrayLength = event.results[resultsLength].length -1;



  if(event.results[resultsLength][ArrayLength].confidence > .85){
    var saidWord = event.results[resultsLength][ArrayLength].transcript.split(' ');

    var result = saidWord.slice(lastLength);
    lastLength = saidWord.length;
    // console.log(saidWord);
    resultObject[(new Date()).toUTCString()] = result;
    // console.log(new Date());
  }
}

recognition.onend = function(){
  console.log(resultObject);
}

// speech error handling
recognition.onerror = function(event){
  console.log('error?');
  console.log(event);
}
