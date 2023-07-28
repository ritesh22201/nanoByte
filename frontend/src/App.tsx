import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import MainRoutes from './Routes/MainRoutes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <MainRoutes/>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
