import React from 'react';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Error404 from './pages/404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path ="/" element ={<Home/>}/>
        <Route exact path ="/*" element={<Error404/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
