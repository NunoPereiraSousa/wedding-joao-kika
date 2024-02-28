import { useState, useEffect } from "react";

const Timer = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const calculateTimeLeft = () => {
    // Parse the input date string
    const targetDateTime = new Date("6 July, 2024");

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
    console.log(days, hours, minutes);

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
      <div className="timer_info">
        <p>Dias</p>
        <div className="timer_days">{days}</div>
      </div>
      <div className="timer_vectors">
        <svg
          width="4"
          height="4"
          viewBox="0 0 4 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H4V4H0V0Z" fill="#FBF5E7" />
        </svg>
        <svg
          width="4"
          height="4"
          viewBox="0 0 4 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H4V4H0V0Z" fill="#FBF5E7" />
        </svg>
      </div>
      <div className="timer_info">
        <p>Horas</p>
        <div className="timer_hours">{hours}</div>
      </div>
      <div className="timer_vectors">
        <svg
          width="4"
          height="4"
          viewBox="0 0 4 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H4V4H0V0Z" fill="#FBF5E7" />
        </svg>
        <svg
          width="4"
          height="4"
          viewBox="0 0 4 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H4V4H0V0Z" fill="#FBF5E7" />
        </svg>
      </div>
      <div className="timer_info">
        <p>Minutos</p>
        <div className="timer_minutes">{minutes}</div>
      </div>
      <div className="timer_vectors">
        <svg
          width="4"
          height="4"
          viewBox="0 0 4 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H4V4H0V0Z" fill="#FBF5E7" />
        </svg>
        <svg
          width="4"
          height="4"
          viewBox="0 0 4 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H4V4H0V0Z" fill="#FBF5E7" />
        </svg>
      </div>
      <div className="timer_info">
        <p>Segundos</p>
        <div className="timer_minutes">{seconds}</div>
      </div>
    </div>
  );
};

export default Timer;
