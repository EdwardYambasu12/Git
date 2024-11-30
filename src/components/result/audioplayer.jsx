import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

const AudioPlayer = ({ streamUrl, language }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (Hls.isSupported() && streamUrl) {
      const hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(audioRef.current);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log(`${language} stream loaded`);
      });

      return () => hls.destroy();
    } else if (audioRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      audioRef.current.src = streamUrl;
    }
  }, [streamUrl, language]);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <h6>Language: {language}</h6>
      <button className='btn btn-success' onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      <audio ref={audioRef} controls={false} />
    </div>
  );
};

export default AudioPlayer;
