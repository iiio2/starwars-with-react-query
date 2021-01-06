import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Planets from "./components/Planets";
import People from "./components/People";

import { QueryClient, QueryClientProvider } from 'react-query'; 

const queryClient = new QueryClient(); 


function App() {
  const [page, setPage] = useState('planets'); 
  return (
    <div>
      <QueryClientProvider client={queryClient} >
        <h3 className="text-center">Star Wars Info</h3> 
        <Navbar setPage={setPage} />     
        {page === 'planets' ? <Planets /> : <People /> }
      </QueryClientProvider>
    </div>
  
  );
}

export default App;
