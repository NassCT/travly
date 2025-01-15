import React from 'react';
import CardFavoris from '../components/CardFavoris';
import Footer from '../components/Footer';
import Buttons from '../components/Buttons';

function PageFavoris() {

  return (
    <section className='mt-4'>

    <div
    onClick={() => window.history.back()} 
    className='flex gap-2 pl-10 pb-4'>
        <Buttons 
        textContent="Retour" 
        buttonClass={"px-10 border-1 border-colorW hover:bg-colorG"} />
    </div>

    <h1 className="text-3xl font-bold text-start ml-12">
      Vos favoris
    </h1>

    <CardFavoris />
      
    </section>
  )
}

export default PageFavoris;