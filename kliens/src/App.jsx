import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { createContext } from 'react'
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Kiiratas from './components/Kiiratas';
import Feltolt from './components/Feltolt';
import NavigaciosSav from './components/NavigaciosSav';

export const BookContext = createContext();

function App() {
  
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:5000/book') 
      .then((response) => {
        setBookList(response.data)
      })
      .catch(error => console.log(error.message));
  }, []);
  
  return (
    <BookContext.Provider value={{ bookList, setBookList }}>
      <Router>
        <NavigaciosSav />
        <Routes>
          <Route exact path='/' element={<Kiiratas />} />
          <Route path='/feltolt' element={<Feltolt />} />
        </Routes>
      </Router>
    </BookContext.Provider>
  );
}

export default App;