import React from 'react';
import Buttons from '../components/Buttons';
import SearchBar from '../components/SearchBar';
import Banniere from '../components/Banniere';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import FetchFlights from '../components/FetchFlights';

function PageAccueil() {
  return (
    <>
      <div className='flex gap-2 pl-20 pt-6 bg-colorB'>
        <Link to={"/Vols"}>
          <Buttons textContent="Vols" iconName={"plane"} buttonClass={"px-10 border-1 border-colorW hover:bg-colorG"} />
        </Link>
        <Link to="/PageHotel">
          <Buttons textContent="Hôtels" iconName={"hotel"} buttonClass={"px-10 border-1 border-colorW hover:bg-colorG"} />
        </Link>
      </div>

    <FetchFlights />
    <Banniere />
    <FAQ />
    <Footer />
    </>
  )
}

export default PageAccueil;