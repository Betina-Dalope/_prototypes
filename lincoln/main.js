$( document ).ready(function() {
	realTimeCamera.getUserMedia();
});

var realTimeCamera = {

	getUserMedia: function() {

		//user correct .getUserMedia for browser
		navigator.getUserMedia  = navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia;

		var video = document.querySelector('video');

		if (navigator.getUserMedia) {
			navigator.getUserMedia({
				video: true 					//options
			}, function(stream) { 				//success
			  	var videoTracks = stream.getVideoTracks();
			  	$("#log").append('Using video device: ' + videoTracks[0].label);

				video.src = window.URL.createObjectURL(stream);
			}, function(error) {				//error
				if (error.name === 'ConstraintNotSatisfiedError') {
    				$("#log").append('The resolution ' + constraints.video.width.exact + 'x' + constraints.video.width.exact + ' px is not supported by your device.');
  				} else if (error.name === 'PermissionDeniedError') {
    				$("#log").append('Permissions have not been granted to use your camera and ' +
      				'microphone, you need to allow the page access to your devices in ' +
      				'order for the demo to work.');
  				}
  				$("#log").append('getUserMedia error: ' + error.name, error);
			});
		} else {
			$("#log").append("Using a fallback because getUserMedia isn't supported");
			video.src = 'somevideo.webm'; // fallback.
		}
	}
}
