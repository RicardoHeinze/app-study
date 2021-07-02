import useInterval from '../../customHooks/useInterval';
import React from 'react';

const Pooling = () => {
  const handleMessage = () => {
    console.log('hey');
  };

  useInterval(handleMessage, 1000);

  return <></>;
};

export default Pooling;
