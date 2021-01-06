import React from 'react';

const Person = ({ person }) => {
  return (
    <div className='card p-2'>
      <h4>{person.name}</h4>
      <p>Gender: {person.gender}</p>
      <p>Birth Year: {person.birth_year} </p>
    </div>
  );
};

export default Person;
