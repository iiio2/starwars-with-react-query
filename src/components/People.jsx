import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Person from './Person';

const People = () => {
  const [page, setPage] = useState(1);

  const fetchPeople = async (page) => {
    const res = await fetch('https://swapi.dev/api/people/?page=' + page);
    return res.json();
  };

  const { data, status, isFetching, isPreviousData } = useQuery(
    ['people', page],
    () => fetchPeople(page),
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
        <div className='people'>
          {data.results.map((person) => (
            <Person person={person} key={person.name} />
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

export default People;
