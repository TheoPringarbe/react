import React, { Component } from 'react';
import Bouton from '../../component/Bouton/Bouton';
import Titre from '../../component/Titre/Titre';
import Formulaire from './Fomulaire/Formulaire';




class Contact extends Component {
    state = {
        clicForm: false
    }
    HandleFormulaire = () => {
        this.setState((AncienneValeur, props) => {
            return { clicForm: !AncienneValeur.clicForm }
        })
    }

    render() {
        return (
            <>

                <Titre>Contactez-nous</Titre>
                <h3> Adresse </h3>
                <p>xxxxxxxxxx</p>
                <h3>Telephone</h3>
                <p>03 21 21 21 21</p>
                <h3>Vous Preferez nous ecrire</h3>
                <br />
                <Bouton clic={this.HandleFormulaire} styleBtn = "btn-primary">
                    {!this.state.clicForm ? "Formulaire de contact" : "Revenir"} </Bouton>
                {this.state.clicForm && <Formulaire />}
            </>
        )
    }
}
export default Contact;