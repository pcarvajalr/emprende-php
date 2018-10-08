
	var trasmitevideo = null;
		 var video = document.getElementById('video');
 
		 // Detectar navegador MS Edge, Chrome o Firefox
		 window.navigator = window.navigator || {};
		 navigator.getUserMedia = navigator.getUserMedia	   ||
								  navigator.webkitGetUserMedia ||											    navigator.mozGetUserMedia    ||
								  null;
		 if (navigator.getUserMedia === null) {
			 document.getElementById('btconectar').setAttribute('disabled', 'disabled');
		    document.getElementById('btdesconectar').setAttribute('disabled', 'disabled');
		 } else {
		   
		    var escena = window.URL ? window.URL.createObjectURL : function(stream) {return stream;};
		    var audio = window.AudioContext	   ||
							   window.webkitAudioContext ||
							   null;
		  
 
		    document.getElementById('btconectar').addEventListener('click', function() {
 
			   // Capturamos el audio y el video
			   navigator.getUserMedia({
				  video: true,
				  audio: true
			   },
			   
			   function(stream) {
				  trasmitevideo = stream;
				  // trasmitir datos de video
				  video.src = escena(stream);
				  video.play();
			   },
			   function(error) {
				  console.log('Error de video: ' + error.code);
			   });
		    });
		    document.getElementById('btdesconectar').addEventListener('click', function() {
			   // Pausar trasmision de video
			   video.pause();
			   // Detener transmision de video
			   trasmitevideo.stop();
		    });
		 }
