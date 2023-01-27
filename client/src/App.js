import React from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import MaConsommation from './pages/MaConsommation';
import Conseils from './pages/Conseils';
import Home from './pages/Home';
import MainLog from'./pages/MainLog';
import Register from './pages/Register';
import Login from './pages/Login'

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' element={<Home/>} />
  		<Route path='/home' element={<Home/>} />
  		<Route path='/maConsommation' element={<MaConsommation/>} />
		<Route path='/conseils' element={<Conseils/>} />
		<Route path='/about' element={<About/>} />	
		<Route path='/login' element={<Login/>} />	
		<Route path='/Register' element={<Register/>} />
	</Routes>
	</Router>
);
}

export default App;
