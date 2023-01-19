import React, { useContext } from 'react';
import GeneralContext from '../contexts/GeneralContext';


const ArchivedCalls = () => {
  const { archivedCalls } = useContext(GeneralContext);
  console.log('halla2', archivedCalls);

  return (
    <div>ArchivedCalls</div>
  );
};

export default ArchivedCalls;