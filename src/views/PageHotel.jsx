import React from 'react';
import BannierReservHotel from '../components/BannierReservHotel';
import Enseignes from '../components/Enseignes';
import HotelPays from '../components/HotelPays';
import Footer from '../components/Footer';
import Buttons from '../components/Buttons';
import CardFavoris from '../components/CardFavoris';

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
        <section className='bg-[url("./src/assets/images/hotelFenetre.png")] bg-cover bg-center bg-no-repeat h-[500px]'>
            
        </section>

        <BannierReservHotel />
        <section className=''>
            <div className='flex flex-wrap gap-4 m-4'>
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