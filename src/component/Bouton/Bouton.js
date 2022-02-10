import React from "react";

const Bouton = (props) => {
    const btnCSS = `btn ${props.styleBtn} ${props.css} `
    return (
        <button className={btnCSS} onClick={props.clic}
        style = {props.estSelection ? {opacity : 1} : {opacity : 2.7}}
        >{props.children}</button>
    )

}
export default Bouton