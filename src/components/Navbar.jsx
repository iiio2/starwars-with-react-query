import React from 'react';

const Navbar = ({ setPage }) => {
  return (
    <div className='text-center'>
      <button
        className='btn btn-primary btn-lg'
        onClick={() => setPage('planets')}
      >
        Planets
      </button>
      <button
        className='btn btn-primary btn-lg m-2'
        onClick={() => setPage('people')}
      >
        People
      </button>
    </div>
  );
};

export default Navbar;
