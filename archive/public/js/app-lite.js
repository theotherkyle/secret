/* global OT API_KEY TOKEN SESSION_ID SAMPLE_SERVER_BASE_URL */

var apiKey;
var sessionId;
var token;

function handleError(error) {
  if (error) {
    console.error(error);
  }
}
var subsNum = 1 ;
var subVal = 'subscriber'; 

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
     session.on('streamCreated', function streamCreated(event) {
      
    
      
      console.log( "executeStreamCreated initialization");
    var subscriberOptions = {
      insertMode: 'append',
              audioLevelDisplayMode : 'off', 
      backgroundImageURI : 'https://tokbox.com/developer/img/Vonage_VideoAPI.svg', 
      buttonDisplayMode : 'off', 
      nameDisplayMode :'off', 
      width: '100%',
      height: '100%'
    };
         if (event.stream.name == 'host')
          {
            subVal = 'subscriber'; 
          }
       else 
         { 
         subVal = 'subscriber' + subsNum;
         }
       
       
       
      console.log( subVal);
    var subscriber = session.subscribe(event.stream, subVal, subscriberOptions, handleError);
      
        subscriber.setStyle({  audioLevelDisplayMode : 'off', 
      backgroundImageURI : 'https://tokbox.com/developer/img/Vonage_VideoAPI.svg', 
      buttonDisplayMode : 'off', 
      nameDisplayMode :'off', });
         subsNum += 1; 
      
  });

  session.on('sessionDisconnected', function sessionDisconnected(event) {
    console.log('You were disconnected from the session.', event.reason);
  });

  // initialize the publisher
  var publisherOptions = {
    insertMode: 'append',
      'name': 'host',
    width: '100%',
    height: '100%'
  };
  var publisher = OT.initPublisher('mainvideoContainerGuest', publisherOptions, handleError);
    publisher.setStyle({  audioLevelDisplayMode : 'off', 
      backgroundImageURI : 'https://tokbox.com/developer/img/Vonage_VideoAPI.svg', 
      buttonDisplayMode : 'off', 
      nameDisplayMode :'off', });
    
      console.log( "initialization");
    

  // Connect to the session
  session.connect(token, function callback(error) {
    if (error) {
      handleError(error);
    } else {
      // If the connection is successful, publish the publisher to the session
      session.publish(publisher, handleError);
    }
  });
}

// See the config.js file.
if (API_KEY && TOKEN && SESSION_ID) {
  apiKey = API_KEY;
  sessionId = SESSION_ID;
  token = TOKEN;
  initializeSession();
} else if (SAMPLE_SERVER_BASE_URL) {
  // Make an Ajax request to get the OpenTok API key, session ID, and token from the server
  fetch(SAMPLE_SERVER_BASE_URL + '/session').then(function fetch(res) {
    return res.json();
  }).then(function fetchJson(json) {
    apiKey = json.apiKey;
    sessionId = json.sessionId;
    token = json.token;

    initializeSession();
  }).catch(function catchErr(error) {
    handleError(error);
    alert('Failed to get opentok sessionId and token. Make sure you have updated the config.js file.');
  });
}
