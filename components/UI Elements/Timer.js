import { useState, useEffect } from "react";

const Timer = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const calculateTimeLeft = () => {
    // Parse the input date string
    const targetDateTime = new Date(+"T00:00:00Z");

    // Get the current date and time
    const now = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = targetDateTime - now;

    // Ensure the target date is in the future
    if (timeDifference < 0) {
      return "The target date is in the past.";
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
      <div className="timer_days">{days}</div>
      <div className="timer_hours">{hours}</div>
      <div className="timer_minutes">{minutes}</div>
    </div>
  );
};

export default Timer;
