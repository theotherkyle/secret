/* global OT */



   var socket = io();
  
//const getCanvasStream = () => {
var videoObject = function VideoObject() {
  
function handleError(error) {
  if (error) {
    console.error(error);
  }
}

  
  let canvas;
  let ctx;
  let cameraVideo;
  let filterVideo;
  let stopped = false;
  let filterCtx;
  let filterCanvas;
  let cameraCtx;
  let cameraCanvas;
  let videoElement;
  
  var bunnyVideoPlaying = true; 

  const drawFrame = () => {
    
    if (bunnyVideoPlaying)
      
      {
    filterCtx.drawImage(filterVideo, 0, 0, filterCanvas.width, filterCanvas.height);
        
    const filterData = filterCtx.getImageData(0, 0, filterCanvas.width, filterCanvas.height);
    ctx.putImageData(filterData, 0,0);
      }
    
    else 
      {
        cameraCtx.drawImage(videoElement, 0, 0, cameraCanvas.width, cameraCanvas.height);
       const filterData = cameraCtx.getImageData(0, 0, filterCanvas.width, filterCanvas.height);
         ctx.putImageData(filterData, 0,0);
        
      }
    //
    if (!stopped) {
      requestAnimationFrame(drawFrame);
    } else {
      ctx = null;
    }
  };
  
  
  
  
  this.switchBunnyVideo = 
function() { 
    bunnyVideoPlaying = ! bunnyVideoPlaying; 

  //this.switchBunnyVideo(); 
    
   // publisher.setVideoSource( videoElement.srcObject);
  
};
  
  this.startBunnyVideo = 
function() { 
    
    
    
    
  // Get the Camera video
  OT.getUserMedia({
    audioSource: null
  }).then((stream) => {
    
       videoElement = document.createElement('video');
    videoElement.srcObject = stream;
    videoElement.play();
    cameraCanvas = document.createElement('canvas');
    cameraCanvas.width = 640;
    cameraCanvas.height  = 480;
    cameraCtx = cameraCanvas.getContext('2d');

    requestAnimationFrame(drawFrame);
  });

  // Get the filter video
  filterVideo = document.createElement('video');
  filterVideo.setAttribute('loop', true);
  filterCanvas = document.createElement('canvas');
 // filterVideo.src = 'https://cdn.glitch.com/3449a598-1d95-42c8-a411-c9c72d4fadf2%2Fsnowflake-greenscreen.mp4?v=1616521007648'; // We do not own the rights to this video
  filterVideo.src = 'https://cdn.glitch.com/3449a598-1d95-42c8-a411-c9c72d4fadf2%2FBigBuckBunny_320x180.mp4?v=1616456553269'
    filterVideo.crossorigin="anonymous"
    filterVideo.crossOrigin="anonymous"
    filterVideo.setAttribute('crossOrigin', 'anonymous')
  
  filterCanvas.width = filterVideo.width = 640;
  filterCanvas.height = filterVideo.height = 480;
  filterVideo.play();
  filterCtx = filterCanvas.getContext('2d');
  
  
  
  filterVideo.addEventListener('loadeddata', function() {
  //Create Stream object and change it if in mozilla
  //const stream = video.mozCaptureStream ? video.mozCaptureStream() : video.captureStream();
  //console.log(stream)
  //let publisher;

  
   var stream = filterVideo.captureStream();
  
    publisher.setVideoSource( canvas.captureStream(30).getVideoTracks()[0]);
    
    //publisher.setVideoSource( OT.getUserMedia());
    
    const audioTracks = stream.getAudioTracks();
  publisher.setAudioSource(audioTracks[0]).then(() => console.log('Audio source updated'));
  });
  
  return {
    canvas,
    stop: () => {
      stopped = true;
    }
  };
    
    
    
    
    
    };
this.initBunnyVideo = function() { 
  
  
 publishVideo(); 
  this.startBunnyVideo(); 
  
};
  var session ;
  
  var  publisher
  
  const apiKey = '47165324';
const sessionId = '1_MX40NzE2NTMyNH5-MTYxNjA5MjI2Mzk5Nn5PYjBvYjFDNk9UdVh2MVpjbDVjb1VHU2J-fg';
const token = 'T1==cGFydG5lcl9pZD00NzE2NTMyNCZzaWc9NTc0Mjc5MGVkNDk3ZGYwZjBhNjQ5YjFiNTBiMGFjZWQ4MDdjMTYwOTpzZXNzaW9uX2lkPTFfTVg0ME56RTJOVE15Tkg1LU1UWXhOakE1TWpJMk16azVObjVQWWpCdllqRkROazlVZFZoMk1WcGpiRFZqYjFWSFUySi1mZyZjcmVhdGVfdGltZT0xNjE2MDkyMjk3Jm5vbmNlPTAuOTAzMTY2ODcwNTE0NjEzOSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjE4Njg0Mjk1JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';

  const publishVideo = function () {
    
    
 publisher = OT.initPublisher('publisher', { name : 'host', 
  videoSource: canvas.captureStream(30).getVideoTracks()[0],
});

session.on({
 streamCreated: event => {
   session.subscribe(event.stream);
 },
 sessionConnected: event => {
   session.publish(publisher);
 },
});

session.connect(token, (error) => {
 if (error) {
   console.log(`There was an error connecting to the session ${error.message}`);
 }
});

    
  }
  
 var startCall = function()
  {
    

  // initialize the publisher
  var publisherOptions = {
    insertMode: 'append',
      'name': 'host',
    width: '100%',
    height: '100%'
  };
   publisher = OT.initPublisher('publisher', publisherOptions, handleError);
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
  const init = function() {

  canvas = document.createElement('canvas');
  ctx = canvas.getContext('2d');
  canvas.width = 640;
  canvas.height = 480;
  

 session = OT.initSession(apiKey, sessionId);
  
 
  /*
   form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
      socket.emit('chat message', input.value);
      input.value = '';
    }
  });
  */
  
    socket.on('show-control', function(msg) {
        console.log(msg);
   
        
        switch(msg){
        case "start-show":
                startCall();
        break;
        case "initBunnyVideo":
               appcore.initBunnyVideo();
        break;
        case "switchBunnyVideo":
               appcore.switchBunnyVideo();
        break;
        default: 
            console.log('default');
        break;
    }
      
  
      
    });



};

document.addEventListener('DOMContentLoaded', init());
};



var appcore = new videoObject();