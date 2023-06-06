import React from 'react';
import './App.css';
import Login from './pages/Login';
//Configurar rutas
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Waiter from './pages/Waiter'
import Management from './pages/Management'
import Chef from './pages/Chef'
import NotFound404 from './pages/NotFound404'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/Login' element={<Login/>} />
        <Route exact path='/Waiter' element={<Waiter/>} />
        <Route exact path='/Management' element={<Management/>} />
        <Route exact path='/Chef' element={<Chef/>} />
        <Route path='*' element={<NotFound404/>} />
      </Routes>
    </Router>
  )
}

export default App;