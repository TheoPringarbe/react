import React from "react";
import Bouton from "../../../component/Bouton/Bouton";
import Horaire from "../Horraire/Horraire";
const Etablissement = (props) => {
    return (
            <div className="card border-secondary " key={props.id}>
                <div className="card-header bg-primary text-white"><strong>{props.nom}</strong></div>
                <div className="card-body">
                    <h4 className="card-title"><strong>Telephone :</strong> {props.telephone}</h4>
                    <p className="card-text"> {props.email && `email : ${props.email}`}</p>
                    <p className="card-text"><strong>Adresse : </strong>
                        <br />
                        {props.adresses[0].lignes[0]}
                        <br />
                        {props.adresses[0].codePostal} - {props.adresses[0].commune} </p>
                    <span className="card-text"><strong>Horaire : </strong>
                        <br />
                        {props.horaires ? <Horaire horaires={props.horaires} /> : "Les horaires d'ouvertures sont indisponible pour le moment."}</span>
                    {props.url && <Bouton
                        styleBtn="btn-white"
                        css="text-white"
                    ><a href={props.url} target="_blank">Visiter le site</a>
                    </Bouton>}
                </div>
            </div>
    )
}
export default Etablissement