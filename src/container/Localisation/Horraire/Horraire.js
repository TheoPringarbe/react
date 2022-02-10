import React from "react";
const Horaire = (props) => {
    
// FONCTION STATELESS POUR RECUPERER LES HEURES ETANT GARDER DANS UN TABLEAU
//en effet les horraires sont sous forme de tableau dans les properties

    let contenu = props.horaires.map((horaire, index) => {
        return (
                <li key={index}>
                    {horaire.du === horaire.au ? ` Le ${horaire.du}` : `Du ${horaire.du} au ${horaire.au}`}
                    - De {horaire.heures[0].de} au {horaire.heures[0].a}
                </li>
        )
    });

    return (
        <>
            <ul>
                {contenu}
            </ul>
        </>

    )
}
export default Horaire