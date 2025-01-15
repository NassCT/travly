import React, { useState } from 'react';
import BannierReservHotel from '../components/BannierReservHotel';
import Enseignes from '../components/Enseignes';
import HotelPays from '../components/HotelPays';
import Footer from '../components/Footer';
import Buttons from '../components/Buttons';
import CardFavoris from '../components/CardFavoris';


function PageHotel() {

    const [filter, setFilter] = useState("Tous");


    const sixButtons = [
        "Paris",
        "Toulouse",
        "Lille",
        "Lyon",
        "Strasbourg",
        "Tous",
    ];

    const cards = [
      {
        id: 1,
        city: "Strasbourg",
        rating: "4",
        image1Url: "../src/assets/images/hotels/pool-hotel.jpg",
        cardTitle: "Hôtel Contenental Strasbourg",
        distance: "0.17 km",
        comments: "252",
        nbAdults: "2",
        adults: "Adults",
        nbRooms: "1",
        rooms: "Chambre",
        price: "750€",
        perNight: " / par nuit",
      },
      {
        id: 2,
        city: "Paris",
        rating: "4",
        image1Url: "../src/assets/images//hotels/fourSeasonHotel.jpg",
        cardTitle: "Four Seasons Hotel George",
        distance: "0.15 km",
        comments: "245",
        nbAdults: "1-2",
        adults: "Adults",
        nbRooms: "1",
        rooms: "Chambre",
        price: "350€",
        perNight: " / par nuit",
      },
      {
        id: 3,
        city: "Lille",
        rating: "4",
        image1Url: "../src/assets/images/hotels/zannier.jpeg",
        cardTitle: "Zannier Le Chalet",
        distance: "0.10 km",
        comments: "852",
        nbAdults: "2",
        adults: "Adults",
        nbRooms: "1",
        rooms: "Chambre",
        price: "750€",
        perNight: " / par nuit",
      },
      {
        id: 4,
        city: "Paris",
        rating: "5",
        image1Url: "../src/assets/images/hotels/hotelInterieur.png",
        cardTitle: "Hôtel Contenental Paris",
        distance: "0.17 km",
        comments: "252",
        nbAdults: "2",
        adults: "Adults",
        nbRooms: "1",
        rooms: "Chambre",
        price: "450€",
        perNight: " / par nuit",
      },
      {
        id: 5,
        city: "Strasbourg",
        rating: "4",
        image1Url: "../src/assets/images/hotels/courbeau.jpg",
        cardTitle: "Hôtel Cour du Corbeau",
        distance: "0.17 km",
        comments: "552",
        nbAdults: "2",
        adults: "Adults",
        nbRooms: "1",
        rooms: "Chambre",
        price: "550€",
        perNight: " / par nuit",
      },
      {
        id: 6,
        city: "Toulouse",
        rating: "4",
        image1Url: "../src/assets/images/hotels/carcassonne.jpg",
        cardTitle: "Hôtel de la Cité Carcassonne",
        distance: "0.07 km",
        comments: "352",
        nbAdults: "2",
        adults: "Adults",
        nbRooms: "1",
        rooms: "Chambre",
        price: "570€",
        perNight: " / par nuit",
      },
      {
        id: 7,
        city: "Lyon",
        rating: "4",
        image1Url: "../src/assets/images/hotels/vieParisien.jpg",
        cardTitle: "La Venise Parisienne",
        distance: "0.17 km",
        comments: "650",
        nbAdults: "2",
        adults: "Adults",
        nbRooms: "1",
        rooms: "Chambre",
        price: "460€",
        perNight: " / par nuit",
      },
      {
        id: 8,
        city: "Lyon",
        rating: "4",
        image1Url: "../src/assets/images/hotels/chambre-hotel.png",
        cardTitle: "Hôtel 5 étoiles",
        distance: "0.17 km",
        comments: "252",
        nbAdults: "2",
        adults: "Adults",
        nbRooms: "1",
        rooms: "Chambre",
        price: "480€",
        perNight: " / par nuit",
      },
      {
        id: 9,
        city: "Lille",
        rating: "4",
        image1Url: "../src/assets/images/hotels/negresco.jpg",
        cardTitle: "Le Negresco",
        distance: "0.17 km",
        comments: "455",
        nbAdults: "2",
        adults: "Adults",
        nbRooms: "1",
        rooms: "Chambre",
        price: "350€",
        perNight: " / par nuit",
      },
    ];

    const filterCards = filter === "Tous" ? cards : cards.filter((card) => card.city === filter); 

  return (
    <div>
      <div>


        
        <BannierReservHotel />
        <section className=''>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 p-8'>
                {sixButtons.map((ville, index) => (
                    <Buttons 

                    key={index} 
                    textContent={ville}
                    buttonClass="opacity-100 hover:opacity-50"
                    onClick={() => setFilter(ville)}

                    />
                ))}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-4'>
              {filterCards.map((card) => (
                <CardFavoris
                  key={card.id}
                  rating={card.rating}
                  image1Url = {card.image1Url}
                  cardTitle = {card.cardTitle}
                  distance = {card.distance}
                  comments = {card.comments}
                  nbAdults = {card.nbAdults}
                  adults = {card.adults}
                  nbRooms = {card.nbRooms}
                  rooms = {card.rooms}
                  price = {card.price}
                  perNight = {card.perNight}/>
              ))}
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