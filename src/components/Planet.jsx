import React from 'react';

const Planet = ({ planet }) => {
  return (
    <div className='card p-2'>
      <h4>{planet.name}</h4>
      <p>Population: {planet.population}</p>
      <p>Terrian: {planet.terrain} </p>
    </div>
  );
};

export default Planet;
