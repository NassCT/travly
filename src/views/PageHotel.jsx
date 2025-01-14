import React from 'react';
import BannierReservHotel from '../components/BannierReservHotel';
import Enseignes from '../components/Enseignes';
import HotelPays from '../components/HotelPays';
import Footer from '../components/Footer';
import Buttons from '../components/Buttons';
import CardFavoris from '../components/CardFavoris';
import { Link } from 'react-router-dom';
import FetchFlights from '../components/FetchFlights';

function PageHotel() {

    const sixButtons = [
        "Nice",
        "Toulouse",
        "Lille",
        "Lyon",
        "Strasbourg",
        "Paris",
    ]

  return (
    <div>
      <div>
        
      <div className='flex gap-2 pl-20 py-6 bg-colorB'>
        <Link to="/PageAffichageVols">
        <Buttons textContent="Vols" iconName={"plane"} buttonClass={"px-10 border-1 border-colorW hover:bg-colorG"} />
        </Link>
        <Buttons textContent="Hôtels" iconName={"hotel"} buttonClass={"px-10 border-1 border-colorW bg-colorG"} />
      </div>

        <FetchFlights />

        <BannierReservHotel />
        <section className=''>
            <div className='flex flex-wrap gap-4 m-4 pl-8'>
                {sixButtons.map((ville, index) => (
                    <Buttons key={index} textContent={ville}

                        // backgroundColor='colorW'
                        // textColor='colorB'
                        // borderColor='colorB'
                         buttonClass="opacity-100 hover:opacity-50"
                    
                    />
                ))}
            </div>

            <div>
                <CardFavoris
                stayDates=''
                nbAdults=''
                adults=''
                rooms=''
                nbRooms=''
                price='120€'
                perNight=' / Nuit'
                 />
            </div>


            <Enseignes />

            <HotelPays />
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default PageHotel;