import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Books from './Component/Books';
import  "./App.css"
import Form from './Component/Form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<Books/>} />
        <Route path='/Form' element={<Form/>}/>
      </Routes>
    </Router>
  );
}

export default App;
