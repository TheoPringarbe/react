import React from "react";


const Titre = (props) => {
    const monCSS = ` border border-dark p-2 m-2 bg-primary rounded text-center text-white`
return (
<h1 className={monCSS}>{props.children}</h1> 
)
}





export default Titre