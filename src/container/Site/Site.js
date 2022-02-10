import React, { Component, Fragment } from 'react';
import Accueil from '../Accueil/Accueil';
import {Routes, BrowserRouter, Route} from "react-router-dom"
import NavBar from '../../component/NavBar/NavBar';
import Localisation from '../Localisation/Localisation';
import Contact from '../Contact/Contact';
class Site extends Component {
render() {
return (
    <>
        <div className='container'>
        <BrowserRouter>
    <Routes>
      <Route path="/localisation" exact  element={<NavBar />} />
      <Route path="/" element={<NavBar />} />
      <Route path="/contact" element={<NavBar />} />
    </Routes> 

    <Routes>
      <Route path="/"  element={<Accueil/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/localisation"  exact element={<Localisation/>} />
    </Routes>

  </BrowserRouter>
        </div>
    </>
)
}
}
export default Site;