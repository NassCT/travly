import React from 'react';
import CardFavoris from '../components/CardFavoris';
import Footer from '../components/Footer';

function PageFavoris() {
  return (
    <section className='mt-6'>

    <h1 className="text-3xl font-bold text-center">
      Favoris
    </h1>

    <CardFavoris />
    <Footer />
      
    </section>
  )
}

export default PageFavoris
