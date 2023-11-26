import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={
          <React.Suspense fallback={<div>loading</div>}>
              <PageOne />
          </React.Suspense>
        }/>
        <Route path='/two' element={
          <React.Suspense fallback={<div>loading</div>}>
              <PageTwo />
          </React.Suspense>
        }/>
        <Route path='/three' element={
          <React.Suspense fallback={<div>loading</div>}>
              <PageThree />
          </React.Suspense>
        }/>
        <Route path='*' element={
          <React.Suspense fallback={<div>loading</div>}>
              <PageOne />
          </React.Suspense>
        }/>
    </Routes>
    </>
  );
}

export default App;
