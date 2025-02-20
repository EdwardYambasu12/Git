import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js'; // Importing Hls.js

const VideoPlayer = ({props}) => {
  const videoRef = useRef(null); // Reference to the video element
  const videoSrc = props;

  useEffect(() => {

    if(videoSrc != null){
    // Check if Hls.js is supported by the browser
    if (Hls.isSupported()) {
      const hls = new Hls(); // Create a new HLS instance
      hls.loadSource(videoSrc); // Load the video stream
      hls.attachMedia(videoRef.current); // Attach HLS stream to video element

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current.play(); // Start playing the video once manifest is loaded
      });

      // Clean up the HLS instance when the component is unmounted
      return () => {
        hls.destroy();
      };
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      // If the browser is Safari (which natively supports HLS)
      videoRef.current.src = videoSrc;
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current.play(); // Play the video when metadata is loaded
      });
    } else {
      // If the browser does not support HLS natively and doesn't support hls.js
      console.log('HLS not supported in this browser');
      // Optionally, display a message or fallback content
    }
  }
  }, [videoSrc]); // Only run this effect if videoSrc changes

  return (
    <div className="container" style= {{width : "100%", background : " white"}}>
      <video ref={videoRef} style={{ height: '200px', width : "100%",}} controls>
        Your browser does not support the video tag, or HLS is not supported.
      </video>
    </div>
  );
};

export default VideoPlayer;
