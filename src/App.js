
import { useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { RegisterForm } from './components/RegisterForm';
import { LoginForm } from './components/LoginForm';
import AddForm from './components/AddForm';
import { ContextProvider } from './Context';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signin' element={<LoginForm />} />
              <Route path='/register' element={<RegisterForm />} />
              <Route path='/main' element={<AddForm />} />
            </Routes>

          </div>
        </ContextProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
