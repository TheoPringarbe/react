import React from 'react';
import {withFormik} from "formik"
import * as Yup from 'yup'


//CONCEPTION FORMULAIRE
const Formulaire = (props) => {
        return (
            <>
                <form>
  <div class="mb-3" id='mail'>
    <h5><label for="titre" className="form-label">Adresse Mail</label></h5>
    <input 
    type="email" 
    className="form-control"
      name='mail'
      onChange={props.handleChange}
      value = {props.values.name}
      onBlur = {props.handleBlur}
    />
    {
      props.touched.mail && props.errors.mail && <h5 className='alert alert-warning'>{props.errors.mail}</h5>
    }
  </div>
  <div className="form-group" id='message'>
      <h5><label for="exampleTextarea" className="form-label mt-4"><strong>Message</strong></label></h5>
      <textarea className="form-control" 
      id="exampleTextarea" 
      rows="3"
      name= 'message'
      onChange={props.handleChange}
      value = {props.values.name}
      onBlur = {props.handleBlur}
      >
      </textarea>
         {
      props.touched.message && props.errors.message && <h5 className='alert alert-warning'>{props.errors.message}</h5>
    }
    </div>
  <button  className="btn btn-info" onClick={props.handleSubmit}
  >Envoyer</button>
</form>
            </>
        );
    }

export default withFormik({
  // UTILISATION DE FORMIK
  mapPropsToValues: () => ({
    mail : '',
    message : ''
  }),
  // VERIFICATION DES CHAMPS AVEC Yup

  validationSchema : Yup.object().shape({
    nom: Yup.string()
    .min(5,"Le nom doit contenir 5 caractères")
    .required('ce champ est obligatoire'),
    mail: Yup.string()
    .email("L'email n'est pas valide")
    .required('ce champ est obligatoire'),
    message: Yup.string()
    .min(30,"Le nom doit contenir entre 30 et 200 caractères")
    .max(200,"Le nom doit contenir entre 30 et 200 caractères")

    .required('ce champ est obligatoire'),
  }),
  // validation au clic
  handleSubmit: (values,{props}) =>{
    alert("messag envoyé")
  }
})(Formulaire);