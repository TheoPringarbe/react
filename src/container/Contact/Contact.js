import React, { Component } from 'react';
import Bouton from '../../component/Bouton/Bouton';
import Titre from '../../component/Titre/Titre';
import Formulaire from './Fomulaire/Formulaire';
import { Icon } from '@iconify/react';




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
                <div className='row text-center justify-content-around mt-5 pt-5'>
                <div className="card col-3">
  <div className="card-body">
    <h5 className="card-title"><Icon icon="entypo:home" width={50} height={50} color='#75CAEB'/></h5>
    <h6 className="card-subtitle mb-2 text-muted">Notre Adresse</h6>
    <p className="card-text"><strong>12 Rue Jean Sans Peur,<br />59800 Lille</strong></p>
  </div>
</div>
                <div className="card col-3">
  <div className="card-body">
    <h5 className="card-title"><Icon icon="carbon:phone-filled" width={50} height={50} color='#75CAEB'/></h5>
    <h6 className="card-subtitle mb-2 text-muted">Téléphone</h6>
    <p className="card-text"><strong>03 20 30 59 59</strong></p>
  </div>
</div>
                <div className="card col-3">
  <div className="card-body">
    <h5 className="card-title"><Icon icon="bx:bx-mail-send" width={50} height={50} color='#75CAEB'  /></h5>
    <h6 className="card-subtitle mb-2 text-muted">E-Mail</h6>
    <p className="card-text"><strong>contact@intradep.gouv.fr</strong> </p>
  </div>
</div>
</div>
               
                <h3 className='text-center mt-5 ' >Vous Preferez nous ecrire?</h3>
                <br />
                <p className='text-center'> <Bouton clic={this.HandleFormulaire} styleBtn = "btn-info ">
                    {!this.state.clicForm ? "Formulaire de contact" : "Revenir"} </Bouton>
                {this.state.clicForm && <Formulaire />}
                </p>
            </>
               
        )
    }
}
export default Contact;