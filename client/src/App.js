import './App.css';
import React from 'react'
import { Box } from '@mui/material';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

//components
import Header from './Comonents/Header/Header';
import Home from './Comonents/home/Home';
import DetailView from './Comonents/details/DetailView';
import Cart from './Comonents/cart/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Box style={{marginTop:55}}>
          <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path='/product/:id' element={<DetailView/>}/>
            <Route path='/cart' element={<Cart/>} />    
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
      
  );
}

export default App;
