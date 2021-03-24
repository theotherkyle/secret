/* global OT */





/* global OT API_KEY TOKEN SESSION_ID SAMPLE_SERVER_BASE_URL */

var apiKey;
var sessionId;
var token;

var videoObject = function VideoObject() {
  
function handleError(error) {
  if (error) {
    console.error(error);
  }
}
var subsNum = 1 ;
var subVal = 'subscriber'; 
 var session;
function initializeSession() {
   session = OT.initSession(apiKey, sessionId);
  // Subscribe to a newly created stream
     session.on('streamCreated', function streamCreated(event) {
      
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

  // Connect to the session
  session.connect(token, function callback(error) {
    if (error) {
      handleError(error);
    } else {
      // If the connection is successful, publish the publisher to the session
      //session.publish(publisher, handleError);
 
      
      // If the connection is successful, publish the publisher to the session
      //session.publish(publisher, handleError);
      
 // var publisher = OT.initPublisher('publisher', publisherOptions, handleError);
   // publisher.setStyle({  audioLevelDisplayMode : 'off', 
     // backgroundImageURI : 'https://tokbox.com/developer/img/Vonage_VideoAPI.svg', 
     // buttonDisplayMode : 'off', 
      //nameDisplayMode :'off', });
    
      //console.log( "initialization");
    

      
      
      
      
      
    }
  });
}
  
  
   
   let publisher;
  let stream;
    var video;

const streamVideo = function() {
  
  
  //video.addEventListener('loadeddata', function() {
  //Create Stream object and change it if in mozilla
  //const stream = video.mozCaptureStream ? video.mozCaptureStream() : video.captureStream();
  //console.log(stream)
  //let publisher;

 
  //const publish = () => {
    const videoTracks = stream.getVideoTracks();
    const audioTracks = stream.getAudioTracks();
    if (!publisher && videoTracks.length > 0 && audioTracks.length > 0) {
     // stream.removeEventListener('addtrack', publish);
      publisher = OT.initPublisher('publisher', {
        videoSource: videoTracks[0],
        audioSource: audioTracks[0],
         'name': 'host',
        
         insertMode: 'append',publishAudio:true, publishVideo:true, 
       fitMode: 'contain',
     
    width: '320',
    height: '240', 
      }, (err) => {
        if (err) {
          video.pause();
          alert(err.message);
        } else {
          video.play();
      
      // If the connection is successful, publish the publisher to the session
        session.publish(publisher, handleError);
      
        }
      });
      publisher.on('destroyed', () => {
        video.pause();
      });
    }
 // };
};
  
  
//(function closure() {   
  this.initVideo  = function() { 
      video = document.querySelector('#video');
  if (!video.captureStream) {
    alert('This browser does not support VideoElement.captureStream(). You must use Google Chrome.');
    return;
  }
   stream = video.captureStream();
    streamVideo();
  
  //stream.addEventListener('addtrack', streamVideo);
  //publish();
//})();
};

  const init = function() {
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

  };

  //init();
  
document.addEventListener('DOMContentLoaded', init());
};

var appcore = new videoObject();
//appcore.initVideo();