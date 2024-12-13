import React from 'react';
import Footer from './Footer';
import Buttons from './Buttons';

function MentionsLegales() {
  return (
    <section>

        <Buttons
        textContent={"Accueil"}
        buttonClass={"px-8 mt-6 ml-6"}
        />

        <h1 className='text-center text-3xl sm:text-4xl font-bold mb-8'>Mentions légales</h1>

        <div className='space-y-6 py-10 px-4 sm:px-10 md:px-24 lg:px-56'>
            <section>

                <h2 className='text-lg sm:text-xl font-semibold'>Propriétaire du site</h2>
                    <p>Nom de l’entreprise ou du propriétaire : Travly</p>
                    <p>Adresse : [1 Place Daviel, 2e Arrondissement, Marseille, 13002, France]</p>
                    <p>Email : [contact@travly.com]</p>
                    <p>Téléphone : [+33 1 23 45 67 89]</p>

                <h2 className='text-lg sm:text-xl font-semibold mt-8'>Hébergeur du site</h2>
                    <p>Nom de l’hébergeur : (ex. : OVH, AWS, etc.)</p>
                    <p>Adresse : [Adresse de l’hébergeur]</p>
                    <p>Téléphone : [Numéro de l’hébergeur]</p>

                <h2 className='text-lg sm:text-xl font-semibold mt-8'>Propriété intellectuelle</h2>
                    <p>
                    Tous les éléments (textes, images, logos, vidéos, etc.) présents sur le site Travly sont protégés par les lois sur la propriété intellectuelle. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
                    </p>

                <h2 className='text-lg sm:text-xl font-semibold mt-8'>Responsabilité</h2>
                    <p>
                    Le propriétaire du site s’efforce de fournir sur le site Travly des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes ou des carences dans la mise à jour des informations.
                    </p>

                <h2 className='text-lg sm:text-xl font-semibold mt-8'>Données personnelles</h2>
                    <p>
                    Les données personnelles collectées sur le site sont traitées conformément à la réglementation en vigueur, notamment le RGPD (Règlement Général sur la Protection des Données). Pour plus d’informations, veuillez consulter notre [Politique de Confidentialité].
                    </p>

                <h2 className='text-lg sm:text-xl font-semibold mt-8'>Contact</h2>
                    <p>
                    Pour toute question relative au site ou à son contenu, vous pouvez nous contacter :
                    </p>
                    <p className='mb-10'>
                    Par email : [contact@travly.com]
                    </p>

            </section>

        </div>
    
    <Footer />
      
    </section>
  )
}

export default MentionsLegales;