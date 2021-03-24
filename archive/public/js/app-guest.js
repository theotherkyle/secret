/* global AccCore */
var OT_videoelement ; 
let otCore;



  
  /*
document.addEventListener('DOMContentLoaded', function(){
	var v = document.getElementById('videoContainer');
	var canvas = document.getElementById('canvasContainer');
	var context = canvas.getContext('2d');
 
	var cw = Math.floor(canvas.clientWidth / 100);
	var ch = Math.floor(canvas.clientHeight / 100);
	canvas.width = cw;
	canvas.height = ch;
 
	v.addEventListener('play', function(){
		draw(this,context,cw,ch);
	},false);
 
},false);
 
 */ 
  
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














const options = {
  
  credentials: {
  apiKey: "47165324",
  sessionId: "1_MX40NzE2NTMyNH5-MTYxNjA5MjI2Mzk5Nn5PYjBvYjFDNk9UdVh2MVpjbDVjb1VHU2J-fg",
  token: "T1==cGFydG5lcl9pZD00NzE2NTMyNCZzaWc9NTc0Mjc5MGVkNDk3ZGYwZjBhNjQ5YjFiNTBiMGFjZWQ4MDdjMTYwOTpzZXNzaW9uX2lkPTFfTVg0ME56RTJOVE15Tkg1LU1UWXhOakE1TWpJMk16azVObjVQWWpCdllqRkROazlVZFZoMk1WcGpiRFZqYjFWSFUySi1mZyZjcmVhdGVfdGltZT0xNjE2MDkyMjk3Jm5vbmNlPTAuOTAzMTY2ODcwNTE0NjEzOSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjE4Njg0Mjk1JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9"
},
  
  
  // A container can either be a query selector or an HTMLElement
  // eslint-disable-next-line no-unused-vars
  streamContainers: function streamContainers(pubSub, type, data) {
    return {
      publisher: {
        camera: '#mainvideoContainerGuest',
        screen: '#screenPublisherContainer',
      },
      subscriber: {
        camera: '#cameraSubscriberContainer',
        screen: '#screenSubscriberContainer',
      },
    }[pubSub][type];
  },
  controlsContainer: '#controls',
  packages: ['textChat', 'screenSharing', 'annotation', 'archiving'],
  communication: {
    callProperties: null, // Using default
  },
  textChat: {
    name: ['David', 'Paul', 'Emma', 'George', 'Amanda'][Math.random() * 5 | 0], // eslint-disable-line no-bitwise
    waitingMessage: 'Messages will be delivered when other users arrive',
    container: '#chat',
  },
  screenSharing: {
    extensionID: 'plocfffmbcclpdifaikiikgplfnepkpo',
    annotation: true,
    externalWindow: false,
    dev: true,
    screenProperties: null, // Using default
  },
  annotation: {

  },
  archiving: {
    startURL: 'https://example.com/startArchive',
    stopURL: 'https://example.com/stopArchive',
  },
};

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

  /**
   * Update the size and position of video containers based on the number of
   * publishers and subscribers specified in the meta property returned by otCore.
   */
  const updateVideoContainers = () => {
    const { meta } = state;
    const sharingScreen = meta ? !!meta.publisher.screen : false;
    const viewingSharedScreen = meta ? meta.subscriber.screen : false;
    const activeCameraSubscribers = meta ? meta.subscriber.camera : 0;

    const videoContainerClass = `App-video-container ${(sharingScreen || viewingSharedScreen) ? 'center' : ''}`;
    document.getElementById('appVideoContainer').setAttribute('class', videoContainerClass);

    const cameraPublisherClass =
      `video-container ${!!activeCameraSubscribers || sharingScreen ? 'small' : ''} ${!!activeCameraSubscribers || sharingScreen ? 'small' : ''} ${sharingScreen || viewingSharedScreen ? 'left' : ''}`;
    document.getElementById('cameraGuestPublisherContainer').setAttribute('class', cameraPublisherClass);

    const screenPublisherClass = `video-container ${!sharingScreen ? 'hidden' : ''}`;
    document.getElementById('screenPublisherContainer').setAttribute('class', screenPublisherClass);

    const cameraSubscriberClass =
      `video-container ${!activeCameraSubscribers ? 'hidden' : ''} active-${activeCameraSubscribers} ${viewingSharedScreen || sharingScreen ? 'small' : ''}`;
    document.getElementById('cameraSubscriberContainer').setAttribute('class', cameraSubscriberClass);

    const screenSubscriberClass = `video-container ${!viewingSharedScreen ? 'hidden' : ''}`;
    document.getElementById('screenSubscriberContainer').setAttribute('class', screenSubscriberClass);
  };


  /**
   * Update the UI
   * @param {String} update - 'connected', 'active', or 'meta'
   */
  const updateUI = (update) => {
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
          document.getElementById('startGuest-mask').classList.add('hidden');
          document.getElementById('cameraGuestPublisherContainer').classList.remove('hidden');
          
          //document.getElementById('start-mask').classList.add('hidden');
         // document.getElementById('controls').classList.remove('hidden');
          
        //  OT_videoelement =  document.getElementsByClassName('OT_video-element')[0] ; 
         //  draw(this,100,100);
          
          
        }
        break;
      case 'meta':
        updateVideoContainers();
        break;
      default:
        console.log('nothing to do, nowhere to go');
    }
  };

  /**
   * Update the state and UI
   */
  const updateState = function(updates) {
    Object.assign(state, updates);
    Object.keys(updates).forEach(update => updateUI(update));
  };

const startGuestVideo= function() {
    otCore.startCall()
      .then(function({ publishers, subscribers, meta }) {
        updateState({ publishers, subscribers, meta, active: true });
      }).catch(function(error) { console.log(error); });
  };

 
  /**
   * Start publishing video/audio and subscribe to streams
   */
  const startCall = function() {
    otCore.startCall()
      .then(function({ publishers, subscribers, meta }) {
        updateState({ publishers, subscribers, meta, active: true });
      }).catch(function(error) { console.log(error); });
  };

  /**
   * Toggle publishing local audio
   */
  const toggleLocalAudio = function() {
    const enabled = state.localAudioEnabled;
    otCore.toggleLocalAudio(!enabled);
    updateState({ localAudioEnabled: !enabled });
    const action = enabled ? 'add' : 'remove';
    document.getElementById('toggleLocalAudio').classList[action]('muted');
  };

  /**
   * Toggle publishing local video
   */
  const toggleLocalVideo = function() {
    const enabled = state.localVideoEnabled;
    otCore.toggleLocalVideo(!enabled);
    updateState({ localVideoEnabled: !enabled });
    const action = enabled ? 'add' : 'remove';
    document.getElementById('toggleLocalVideo').classList[action]('muted');
  };

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
    events.forEach(event => otCore.on(event, ({ publishers, subscribers, meta }) => {
      updateState({ publishers, subscribers, meta });
    }));

    document.getElementById('start').addEventListener('click', startCall);
    document.getElementById('startGuest').addEventListener('click', startGuestVideo);
    document.getElementById('toggleLocalAudio').addEventListener('click', toggleLocalAudio);
    document.getElementById('toggleLocalVideo').addEventListener('click', toggleLocalVideo);
  };

  /**
   * Initialize otCore, connect to the session, and listen to events
   */
  const init = function() {
    otCore = new AccCore(options);
    otCore.connect().then(function() { updateState({ connected: true }); });
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
      
      startCall();
      
    });
    
  };

  init();
};

document.addEventListener('DOMContentLoaded', app);

