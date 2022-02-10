import React, { Component } from "react";
import Bouton from "../../component/Bouton/Bouton";
import Titre from "../../component/Titre/Titre";
import axios from "axios"
import Etablissement from "./Etablissement/Etablissement";

//CLASSE QUI GERE L'AFFICHAGE DE LA PAGE LOCALISATION

class Localisation extends Component {

    state = {
        recherche: '',
        numeroPageActuel: 1
    }
    // FONCTION PERMETTANT DE CONSULTER L'API ET DE RECUPERER LES INFORMATIONS DE CELLE-CI

    HandleSelectionEtablissement = (type) => {

        axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/59/${type}`)
            .then(reponse => {
                this.setState({
                    recherche: reponse.data.features
                })
            })

        // .catch(error => {
        //     console.log(error)
        // })
    }

    render() {

        // INFORMATION

        let ListageDesEtablissement = "";
        let pagination = [];
        if (this.state.recherche) {
            let fin = this.state.recherche.length / 10;
            if (this.state.recherche.length % 10 !== 0) fin++;
            for (let index = 1; index <= fin; index++) {
                pagination.push(
                    <Bouton
                        key={index} estSelection={this.state.numeroPageActuel === index}
                        clic={() => this.setState({ numeroPageActuel: index })}>
                        {index}</Bouton>);

                const debutListe = (this.state.numeroPageActuel - 1) * 10;
                const finListe = (this.state.numeroPageActuel) * 10;
                const listeReduite = this.state.recherche.slice(debutListe, finListe);
                console.log(listeReduite)

                ListageDesEtablissement = listeReduite.map(etablissement => {
                    return (
                        <div className=' col-md-6' key={etablissement.properties.id}>
                            <Etablissement
                                nom={etablissement.properties.nom}
                                telephone={etablissement.properties.telephone}
                                email={etablissement.properties.email}
                                adresses={etablissement.properties.adresses}
                                url={etablissement.properties.url}
                                horaires={etablissement.properties.horaires} />
                        </div>
                    )
                })

            }
        }

        //AFFICHAGE

        return (<>
            <Titre>Recherche d'un etablissement</Titre>
            <Bouton clic={() => this.HandleSelectionEtablissement("mairie")}
                styleBtn="btn-dark">Mairie</Bouton>
            <Bouton clic={() => this.HandleSelectionEtablissement("gendarmerie")}
                styleBtn="btn-dark">Commissariat de Police</Bouton>
            <Bouton clic={() => this.HandleSelectionEtablissement("pole_emploi")}
                styleBtn="btn-dark">Pole emploi</Bouton>
            <Bouton clic={() => this.HandleSelectionEtablissement("prefecture")}
                styleBtn="btn-dark">Prefecture</Bouton>
                <div className='row no-gutters'>{ListageDesEtablissement}</div>
                <div>{pagination}</div>


        </>
        )
    }
}
export default Localisation