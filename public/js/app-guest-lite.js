/* global OT API_KEY TOKEN SESSION_ID SAMPLE_SERVER_BASE_URL */

var apiKey;
var sessionId;
var token;


/* global AccCore */
var OT_videoelement ; 
let otCore;

var publisherInt = 0;

 
  
  var body_append_rgbaValue  = ""; 
   var socket = io();
  
  
  
  function changeCss(className, classValue) {
    // we need invisible container to store additional css definitions
    var cssMainContainer = $('#css-modifier-container');
    if (cssMainContainer.length == 0) {
        var cssMainContainer = $('<div id="css-modifier-container"></div>');
        cssMainContainer.hide();
        cssMainContainer.appendTo($('body'));
    }

    // and we need one div for each class
    var classContainer = cssMainContainer.find('div[data-class="' + className + '"]');
    if (classContainer.length == 0) {
        classContainer = $('<div data-class="' + className + '"></div>');
        classContainer.appendTo(cssMainContainer);
    }

    // append additional style
    classContainer.html('<style>' + className + ' {' + classValue + '}</style>');
    
    classContainer.html(classValue);
}
  
  
  
  
function draw(c,w,h) {
	 //if(v.paused || v.ended)	return false;
	//c.drawImage(v,0,0,w,h);
 // background =     
// .App-main:before, .App-main:after 
  
  
  
      this.video = OT_videoelement; 
  
      this.c1 = document.getElementById("c1");
      this.ctx1 = this.c1.getContext("2d");
      this.c2 = document.getElementById("c2");
      this.ctx2 = this.c2.getContext("2d");
  
  this.ctx1.drawImage(this.video, 0, 0, 100, 100);
    var imageData = this.ctx1.getImageData(0, 0, 1, 1);
    var data = imageData.data;

  
    //if (data[0] >= 128  && (data[1] >= 128  && (data[3] >= 128) ) 
    //const rgba = `rgba(255, ${data[1]}, ${data[2]}, 1)`; // '${data[3] / 255})`;
    const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, 1)`; // '${data[3] / 255})`;
    //destination.style.background = rgba;
    //destination.textContent = rgba;

     // let frame = this.ctx1.getImageData(0, 0, 100, 100);
       //   let l = frame.data.length / 4;
  

  
  var newValue = rgba;//'#fb0094';//coming from somewhere background: ; 
 // if (body_append_rgbaValue != "")
   // $('body').remove(body_append_rgbaValue);
  
  $('span.orphan').remove();
  //$('.App-main style').remove()
  
   body_append_rgbaValue = '<style>.App-main:before, .App-main:after {background:'+newValue+';} </style>';
  
  changeCss(".App-main:before, .App-main:after", body_append_rgbaValue); 
   //$('body').append(body_append_rgbaValue);
      
      
      /*this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
      let frame = this.ctx1.getImageData(0, 0, this.width, this.height);
          let l = frame.data.length / 4;
  
      for (let i = 0; i < l; i++) {
        let r = frame.data[i * 4 + 0];
        let g = frame.data[i * 4 + 1];
        let b = frame.data[i * 4 + 2];
        if (g > 100 && r > 100 && b < 43)
          frame.data[i * 4 + 3] = 0;
      }
      this.ctx2.putImageData(frame, 0, 0);
      return;
    
    }
    */
  
                //$('#mainvideoContainer').css('background', '#ccc'); 
                //$('#mainvideoContainer').css('background', '#ccc'); 
                //$('#mainvideoContainer').text("Background Color Changed!"); 
  
	setTimeout(draw,200,c,w,h);
  
  
  
  
  
  
}



/* ********************** */




/** Application Logic */
const app = function() {
  const state = {
    connected: false,
    active: false,
    publishers: null,
    subscribers: null,
    meta: null,
    localAudioEnabled: true,
    localVideoEnabled: true,
  };






function handleError(error) {
  if (error) {
    console.error(error);
  }
  else {console.log("sucess");}
}
var subsNum = 1 ;
var subVal = 'subscriber'; 
  var session; 

  
  
  
  
    const updateVideoContainers = () => {
    const { meta } = state;
    const sharingScreen = meta ? !!meta.publisher.screen : false;
    const viewingSharedScreen = meta ? meta.subscriber.screen : false;
    const activeCameraSubscribers = meta ? meta.subscriber.camera : 0;

    const videoContainerClass = `App-video-container ${(sharingScreen || viewingSharedScreen) ? 'center' : ''}`;
    document.getElementById('appVideoContainer').setAttribute('class', videoContainerClass);

  //  const cameraPublisherClass =
     // `video-container ${!!activeCameraSubscribers || sharingScreen ? 'small' : ''} ${!!activeCameraSubscribers || sharingScreen ? 'small' : ''} ${sharingScreen || viewingSharedScreen ? 'left' : ''}`;
   
  const cameraPublisherClass = `video-container` ; 
    document.getElementById('cameraGuestPublisherContainer').setAttribute('class', cameraPublisherClass);

    const screenPublisherClass = `video-container ${!sharingScreen ? 'hidden' : ''}`;
    document.getElementById('screenPublisherContainer').setAttribute('class', screenPublisherClass);

    const cameraSubscriberClass =
      `video-container ${!activeCameraSubscribers ? 'hidden' : ''} active-${activeCameraSubscribers} ${viewingSharedScreen || sharingScreen ? 'small' : ''}`;
    document.getElementById('cameraSubscriberContainer').setAttribute('class', cameraSubscriberClass);

    const screenSubscriberClass = `video-container ${!viewingSharedScreen ? 'hidden' : ''}`;
    document.getElementById('screenSubscriberContainer').setAttribute('class', screenSubscriberClass);
  };

  
  
    const updateSubscribersUI = (update) => {
    const { connected, active } = state;

    switch (update) {
      case 'connected':
        if (connected) {
          document.getElementById('connecting-mask').classList.add('hidden');
          document.getElementById('start-mask').classList.remove('hidden');
        }
        break;
      case 'active':
        if (active) {
          
          document.getElementById('start-mask').classList.add('hidden');
      //    document.getElementById('controls').classList.remove('hidden');
          
         OT_videoelement =  document.getElementsByClassName('OT_video-element')[0] ; 
          draw(this,100,100);
          
          
        }
        break;
      case 'meta':
        updateVideoContainers();
        break;
      default:
        console.log('nothing to do, nowhere to go');
    }
  };

  
  
  
  
var   NumberOfStreams = 0;
  
function initializeSession() {
  session = OT.initSession(apiKey, sessionId);

  
  
  
  // Subscribe to a newly created stream
     session.on('streamCreated', function streamCreated(event) {
     
      
      console.log( "executeStreamCreated initialization");
    var subscriberOptions = {
      insertMode: 'append',
              audioLevelDisplayMode : 'off', 
     // backgroundImageURI : 'https://tokbox.com/developer/img/Vonage_VideoAPI.svg', 
      buttonDisplayMode : 'off', 
      nameDisplayMode :'off', 
      width: '100%',
      height: '100%'
    };
    if (event.stream.name == 'host')
    {
            subVal = 'cameraSubscriberContainer'; 
       
        console.log( subVal);
      
      //if (NumberOfStreams == ) 
          publisherInt = NumberOfStreams; 
      
      
     const videoContainerClass = `App-video-container `; //${(sharingScreen || viewingSharedScreen) ? 'center' : ''}`;
    document.getElementById('appVideoContainer').setAttribute('class', videoContainerClass);
    const cameraSubscriberClass = `video-container`;
   //   `video-container ${!activeCameraSubscribers ? 'hidden' : ''} active-${activeCameraSubscribers} ${viewingSharedScreen || sharingScreen ? 'small' : ''}`;
    document.getElementById('cameraSubscriberContainer').setAttribute('class', cameraSubscriberClass);
        var subscriber = session.subscribe(event.stream, subVal, subscriberOptions,  function callback(error) {
    if (error) {
      handleError(error);
    } else {
      // If the connection is successful, publish the publisher to the session
      
       subscriber.setStyle({  audioLevelDisplayMode : 'off', 
     // backgroundImageURI : 'https://tokbox.com/developer/img/Vonage_VideoAPI.svg', 
      buttonDisplayMode : 'off', 
      nameDisplayMode :'off', });
      
          document.getElementById('connecting-mask').classList.add('hidden');
          document.getElementById('start-mask').classList.add('hidden');
      //    document.getElementById('controls').classList.remove('hidden');
       var arr = document.getElementsByClassName('OT_video-element')
          
         OT_videoelement =  arr[publisherInt] ; 
          draw(this,100,100);
      
 
      
      
      
  }
        });
      
      
      
      
      
       }
      
  });

  
  session.on('sessionDisconnected', function sessionDisconnected(event) {
    console.log('You were disconnected from the session.', event.reason);
  });

  
 
 
  
  // Connect to the session
  session.connect(token, function callback(error) {
    if (error) {
      handleError(error);
    } else {
    }
  });

}

  
  
const startShowNow= function() {
  
/*
  // Connect to the session
  session.connect(token, function callback(error) {
    if (error) {
      handleError(error);
    } else {
      // If the connection is successful, publish the publisher to the session
      
        
    }
  });
  */
}
  


const startGuestVideo= function() {
  
   // initialize the publisher
  var publisherOptions = {
    insertMode: 'append',
      'name': 'x-cameraGuestPublisherContainer',
    width: '100%',
    height: '100%'
  };
 
  
   var publisher = OT.initPublisher('cameraGuestPublisherContainer', publisherOptions, handleError);
    publisher.setStyle({  audioLevelDisplayMode : 'off', 
      backgroundImageURI : 'https://tokbox.com/developer/img/Vonage_VideoAPI.svg', 
      buttonDisplayMode : 'off', 
      nameDisplayMode :'off', });
    
      console.log( "initialization");
    

      // If the connection is successful, publish the publisher to the session
      
        
  const cameraPublisherClass = `video-container` ; 
      
          document.getElementById('startGuest-mask').classList.add('hidden');
          document.getElementById('cameraGuestPublisherContainer').classList.remove('hidden');
    document.getElementById('cameraGuestPublisherContainer').setAttribute('class', cameraPublisherClass);
  
      session.publish(publisher, handleError);
   NumberOfStreams = NumberOfStreams + 1; 
  
}
  


  




  /**
   * Subscribe to otCore and UI events
   */
  const createEventListeners = function() {
    const events = [
      'subscribeToCamera',
      'unsubscribeFromCamera',
      'subscribeToScreen',
      'unsubscribeFromScreen',
      'startScreenShare',
      'endScreenShare',
    ];
   // events.forEach(event => otCore.on(event, ({ publishers, subscribers, meta }) => {
    //  updateState({ publishers, subscribers, meta });
      
       // updateSubscribersState({ subscribers });
        //updatePublishersState({ publishers, meta});
      
    //}));

    document.getElementById('startGuest').addEventListener('click', startGuestVideo);
  };

  /**
   * Initialize otCore, connect to the session, and listen to events
   */
  const init = function() {
    //otCore = new AccCore(options);
    //otCore.connect().then(function() { updatePublishersState({ connected: true }); });
    
    
    
    
    
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

  }).catch(function catchErr(error) {
    handleError(error);
    alert('Failed to get opentok sessionId and token. Make sure you have updated the config.js file.');
  });
}
    
    createEventListeners();
    
    
 
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
      startShowNow();
     // startCall();
      
    });
    
  };

  init();
};

document.addEventListener('DOMContentLoaded', app);

