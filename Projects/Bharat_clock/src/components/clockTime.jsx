import { useEffect, useState } from "react";

let ClockTime = () => {
  const [time, setTime] = useState(0);
  const [date, setDate] = useState(0);

  // useEffect(() => {
  //   setTime(new Date().toLocaleTimeString());
  //   setDate(new Date().toLocaleDateString());
  // }, [time])
  
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
    setDate(new Date().toLocaleDateString());
  }, 1000);

  return (
    <>
      <p> The current time is : {time} </p> 
      <p> The current date is : {date} </p>
    </>
  );
};

export default ClockTime;
