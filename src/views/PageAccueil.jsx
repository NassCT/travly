import React from 'react';
import Buttons from '../components/Buttons';
import SearchBar from '../components/SearchBar';
import Banniere from '../components/Banniere';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

function PageAccueil() {
  return (
    <>
      <div className='flex gap-2 pl-20 pt-6 bg-colorB'>
        <Buttons textContent="Vols" iconName={"plane"} buttonClass={"px-10"} />
        <Buttons textContent="Hôtels" iconName={"hotel"} buttonClass={"px-10"} />
    </div>

    <SearchBar />
    <Banniere />
    <FAQ />
    <Footer />
    </>
  )
}

export default PageAccueil;