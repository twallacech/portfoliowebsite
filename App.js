import React, { useState, useEffect } from 'react';

const CurrentAge = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const birthDate = new Date(1995, 9, 5); // September 5, 1995
      const currentDate = new Date();
      const ageInMilliseconds = currentDate - birthDate;
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // number of milliseconds in a year with leap years
      setAge(ageInYears.toFixed(20));
    }, 1000 / 60); // update every 60th of a second

    return () => clearInterval(interval);
  }, []);

  return (<div style={{ display: 'inline-block' }}>
    <div style={{ display: 'inline-block' }}>I'm&nbsp;</div>
    <div style={{ display: 'inline-block' }}>{age}</div>
    </div>);
};

export default CurrentAge;

export function App(props) {
  return (
    <div className='App'>
      <p><CurrentAge/></p>
    </div>
  );
}