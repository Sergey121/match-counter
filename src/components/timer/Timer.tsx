import styles from "./Timer.module.css";
import { useCallback, useEffect, useRef, useState } from 'react';

const convertMStoMinutes = (value: number) => {
  if (value <= 0) return '00:00';
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  const mins = `${minutes}`.padStart(2, "0");
  const sec = `${seconds}`.padStart(2, "0");
  return `${mins}:${sec}`;
};

const Timer = () => {
  const [defaultTime, setDefaultTime] = useState(180);
  const [currentTime, setCurrentTime] = useState(defaultTime);
  const intervalRef = useRef<NodeJS.Timer>();

  const handleStart = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentTime((prev) => prev - 1);
    }, 1000);
  }, []);

  const handleStop = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  const handleReset = useCallback(() => {
    handleStop();
    setCurrentTime(defaultTime);
  }, [defaultTime, handleStop]);

  const handleSetTime = useCallback(() => {
    handleStop();
    const value = prompt('Set number of seconds');
    if (!value || Number.isNaN(+value)) {
      return alert('Incorrect number');
    }
    setDefaultTime(+value);
    setCurrentTime(+value);
  }, [handleStop]);

  useEffect(() => {
    if (currentTime < 0) {
      handleStop();
      alert('Time is over');
    }
  }, [currentTime, handleStop]);

  return (
    <div className={styles.timer}>
      <div className={styles.timerTime}>{convertMStoMinutes(currentTime)}</div>
      <div className={styles.controls}>
        <div onClick={handleStart}>Start</div>
        <div onClick={handleStop}>Stop</div>
        <div onClick={handleReset}>Reset</div>
        <div onClick={handleSetTime}>Set time</div>
      </div>
    </div>
  );
};

export default Timer;
