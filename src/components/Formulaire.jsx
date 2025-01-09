import React, { useState } from 'react'
import Buttons from './Buttons'
// import { Link } from 'react-router-dom'

import Popup from './Popup';
import { useForm } from '@formspree/react';

function Formulaire({
  inputNomText,
  inputPrenomText,
  inputMailText,
  inputSujetText,
  inputMessageText,
  inputTextColor,
  inputBgColor,
  inputBorder,
  inputBorderRadius, }) {

  const [state, handleSubmit] = useForm("mlddovov"); 

  const [userData, setUserData] = useState({
    nom: '',
    prenom: '',
    mail: '',
    sujet: '',
    message: '',

  });

  const [inputError, setInputError] = useState({});
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setInputError({ ...inputError, [name]: '' });
  };

  const validateInput = () => {
    let isValid = true;
    const newError = {};

    const trimmedNom = userData.nom.trim();
    if (!trimmedNom || trimmedNom.length <= 3) {
      newError.nom = "Le champs est obligatoire et doit contenir plus de 3 caractères.";
      isValid = false;
    }

    const trimmedPrenom = userData.prenom.trim();
    if (!trimmedPrenom || trimmedPrenom.length <= 3) {
      newError.prenom = "le champs est obligatoire et doit contenir plus de 3 caractères.";
      isValid = false;
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!userData.mail.trim()) {
      newError.mail = "Le champs mail est obligatoire";
      isValid = false;

    } else if (!emailRegex.test(userData.mail)) {
      newError.mail = "Veuillez entre une adresse e-mail valide.";
      isValid = false
    }


    const trimmedSujet = userData.sujet.trim();
    if (!trimmedSujet || trimmedSujet.length <= 3) {
      newError.sujet = "Le champ est obligatoire et doit contenir plus de 3 caractères.";
      isValid = false;
    }

    if (!userData.message.trim()) {
      newError.message = "Le champ message est obligatoire."
      isValid = false;
    }

    setInputError(newError);
    return isValid;

  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (validateInput()) {
      handleSubmit(e);
      setIsPopupVisible(true);
      setTimeout(() => setIsPopupVisible(false),5000);
    }
  };

  return (
    <section>
      <div>
        <h1 className='text-center font-bold text-4xl mt-8 mb-10'>Contactez nous</h1>
      </div>
      <form action="https://formspree.io/f/mlddovov" method='POST' onSubmit={handleCustomSubmit} className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              id="nom"
              name="nom"
              value={userData.nom}
              onChange={handleChange}
              placeholder={inputNomText}
              className={`w-full m-4 ${inputBorder || "colorB"} ${inputBorderRadius || "rounded-lg"} ${inputTextColor} ${inputBgColor || "bg-colorW"} p-2 `}

            />
            {inputError.nom && <p className='text-colorR text-sm'>{inputError.nom}</p>}
          </div>
          <div>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={userData.prenom}
              onChange={handleChange}
              placeholder={inputPrenomText}
              className={`w-full m-4 ${inputBorder || "colorB"} ${inputBorderRadius || "rounded-lg"} ${inputTextColor} ${inputBgColor || "bg-colorW"}  p-2 `}
            />
            {inputError.prenom && <p className='text-colorR text-sm'>{inputError.prenom}</p>}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="email"
              id="mail"
              name="mail"
              value={userData.mail}
              onChange={handleChange}
              placeholder={inputMailText}
              className={`w-full m-4 ${inputBorder || "colorB"} ${inputBorderRadius || "rounded-lg"} ${inputTextColor} ${inputBgColor || "bg-colorW"}  p-2 `}
            />
            {inputError.mail && <p className='text-colorR text-sm'>{inputError.mail}</p>}
          </div>
          <div>
            <input
              type="text"
              id="sujet"
              name="sujet"
              value={userData.sujet}
              onChange={handleChange}
              placeholder={inputSujetText}
              className={`w-full m-4 ${inputBorder || "colorB"} ${inputBorderRadius || "rounded-lg"} ${inputTextColor} ${inputBgColor || "bg-colorW"}  p-2 `}
            />
            {inputError.sujet && <p className='text-colorR text-sm'>{inputError.sujet}</p>}
          </div>
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            rows="10"
            value={userData.message}
            onChange={handleChange}
            placeholder={inputMessageText}
            className={`w-full m-4 ${inputBorder} ${inputBorderRadius || "rounded-lg"}  ${inputTextColor} ${inputBgColor || "bg-colorW "} bg-colorW p-2 `}
          ></textarea>
          {inputError.message && <p className='text-colorR text-sm'>{inputError.message}</p>}
        </div>
        <div className='px-3 py-3 flex justify-center items-center'>
          <Buttons
            backgroundColor="colorB"
            textContent="Envoyer"
            textColor="colorW"
            type="submit"
            disabled={state.submitting}

          />
        </div>
      </form>
      {isPopupVisible && <Popup />}
    </section>

  )
}

export default Formulaire
