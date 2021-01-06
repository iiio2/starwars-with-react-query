import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

const Planets = () => {
  const [page, setPage] = useState(1);

  const fetchPlanets = async (page) => {
    console.log(page);

    const res = await fetch('http://swapi.dev/api/planets/?page=' + page);
    return res.json();
  };

  const { data, status, isFetching, isPreviousData } = useQuery(
    ['planets', page],
    () => fetchPlanets(page),
    {
      keepPreviousData: true,
    }
  );

  console.log(data);
  return (
    <div className='container'>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>Error occured!</p>}

      {status === 'success' && (
        <div className='planet'>
          {data.results.map((planet) => (
            <Planet planet={planet} key={planet.name} />
          ))}
        </div>
      )}
      {status === 'success' && (
        <div>
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            className='btn btn-sm btn-info'
            disabled={page === 1}
          >
            Previous Page
          </button>
          <span className='badge badge-success m-5'>{page}</span>
          <button
            className='btn btn-sm btn-info'
            onClick={() => {
              if (!isPreviousData && data.next) {
                setPage((old) => old + 1);
              }
            }}
            disabled={isPreviousData || !data.next}
          >
            Next Page
          </button>
          {isFetching ? <span> Loading...</span> : null}{' '}
        </div>
      )}
    </div>
  );
};

export default Planets;
