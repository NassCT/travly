import React from 'react';
import Footer from './Footer';
import Buttons from './Buttons';


function Conditions() {
  return (
    <section>

        <a href="/">
            <Buttons
            textContent={"Accueil"}
            buttonClass={"px-8 mt-6 ml-6"}
            />
        </a>
        <h1 className='text-center text-3xl font-bold'>Conditions d'utilisation</h1>

        <div className='space-y-6 py-10 mx-56'>
            <section>

                <h2 className='text-lg font-semibold'>Présentation</h2>
                <p >
                Travly propose des services de recherche et de comparaison pour vos besoins de voyage, notamment des vols, des hôtels et des locations de voitures, accessibles via notre site.
                </p>

                <h2 className='text-lg font-semibold mt-8'>Utilisation des services</h2>
                <p>
                Les services sont exclusivement destinés à un usage personnel et non commercial. Toute utilisation illégale ou abusive, telle que la transmission de contenu offensant ou l'accès non autorisé, est strictement interdite.
                </p>

                <h2 className='text-lg font-semibold mt-8'>Limitation de responsabilité</h2>
                <p>
                Les services sont exclusivement destinés à un usage personnel et non commercial. Toute utilisation illégale ou abusive, telle que la transmission de contenu offensant ou l'accès non autorisé, est strictement interdite.
                </p>

                <h2 className='text-lg font-semibold mt-8'>Modifications</h2>
                <p>
                Les services sont exclusivement destinés à un usage personnel et non commercial. Toute utilisation illégale ou abusive, telle que la transmission de contenu offensant ou l'accès non autorisé, est strictement interdite.
                </p>

                <h2 className='text-lg font-semibold mt-8'>Contact</h2>
                <p className='mb-10'>
                Les services sont exclusivement destinés à un usage personnel et non commercial. Toute utilisation illégale ou abusive, telle que la transmission de contenu offensant ou l'accès non autorisé, est strictement interdite.
                </p>

            </section>

        </div>
    
    <Footer />
      
    </section>
  )
}

export default Conditions;