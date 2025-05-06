import React, { useEffect, useState } from 'react';

const CountdownTimer = ({props}) => {

  const targetTime = new Date(props.general.matchTimeUTCDate).getTime(); // Target time (in UTC)

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference = targetTime - currentTime;

      if (timeDifference <= 0) {
        clearInterval(interval);
        setTimeLeft({
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft({
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [targetTime]);

  return (
    <div className = "container">
    
      <div style = {{width : "100%", textAlign : "center", fontSize : "1em"}}>
        {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}:
        {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}:
        {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
      </div>
    </div>
  );
};

export default CountdownTimer;
