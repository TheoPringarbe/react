import React, { Component } from 'react';
import Titre from '../../component/Titre/Titre';
import chateau from "../../asset/chateau.jpg"
class Accueil extends Component {
render() {
return (
<>
    <Titre>Bienvenue sur le site de l'Ariege </Titre>
    <img src= {chateau} alt='chateau' width="100%"/>
</>
)
}
}
export default Accueil;