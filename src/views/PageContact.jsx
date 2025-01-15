import React from 'react'
import Buttons from '../components/Buttons'
import Formulaire from '../components/Formulaire'
import Footer from '../components/Footer'

function pageContact() {
  return (
    <div>
        <section className='relative p-10'>
            <Buttons />

            <Formulaire 
                inputTextColor="text-colorB"
                inputBgColor="bg-colorW"
                inputBorder="text-colorB"
                inputBorderRadius="rounded-lg"
                inputNomText="Nom"
                inputPrenomText="Prénom"
                inputMailText="Email"
                inputSujetText="Sujet"
                inputMessageText="Message"
            />
        </section>      
    </div>
  )
}

export default pageContact
