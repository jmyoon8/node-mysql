import React,{ Suspense } from 'react';

import LandingPage from './components/LadingPage/LandingPage'


function App() {
  return (
    <Suspense fallback={(<div>loading....</div>)}>
      <LandingPage/>
    </Suspense>
   
  );
}

export default App;
