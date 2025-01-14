import React from 'react';
import SearchBar from '../components/SearchBar';
import CardsVols from '../components/CardsVols';
import Footer from '../components/Footer';
import Buttons from '../components/Buttons';
import { Link } from 'react-router-dom';

function PageAffichageVols() {
  return (
    <>

      <div className='flex gap-2 pl-20 py-6 bg-colorB'>
        <Buttons textContent="Vols" iconName={"plane"} buttonClass={"px-10 border-1 border-colorW bg-colorG"} />
        <Link to="/PageHotel">
        <Buttons textContent="Hôtels" iconName={"hotel"} buttonClass={"px-10 border-1 border-colorW hover:bg-colorG"} />
        </Link>
      </div>

      <SearchBar />
      <CardsVols />
      <Footer />
    </>
  )
}

export default PageAffichageVols;