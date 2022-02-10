import React, { Component } from 'react';
import Titre from '../../component/Titre/Titre';
import lille from "../../asset/igloo.jpg"
class Accueil extends Component {
render() {
return (
<>
    <Titre>Bienvenue sur le site de le Nord </Titre>
    <img src= {lille} alt='chateau' width="100%" />
</>
)
}
}
export default Accueil;