import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import Icons from './Icons';
import Buttons from './Buttons';

function SearchBar() {

    const [from, setFrom] = useState('Lyon');
    const [to, setTo] = useState('Strasbourg');
    const [departure, setDeparture] = useState('2024-12-21');
    const [returnDate, setReturnDate] = useState('2025-01-15');
    const [passengers, setPassengers] = useState('2 Adultes');
    const [classType, setClassType] = useState('Économie'); // Classe sélectionnée
    // const [directFlights, setDirectFlights] = useState(false); // Vols directs

    const swapFields = () => {
        const temp = from;
        setFrom(to);
        setTo(temp);
    };

    // const location = useLocation();


  return (
    <>

    {location.pathname === "/PageAccueil" && (
    <div>
    {/* SearchBar Page Accueil */}
    <section>

    <div className="md:flex md:flex-wrap md:items-center md:gap-4 px-20 py-10 bg-colorB shadow-lg">

    <div className='relative flex flex-col md:flex-row md:items-center'>

    
        <div className="flex flex-col">
            <label htmlFor="from" className="hidden md:block text-colorW text-sm">De</label>
            <div className="flex items-center bg-colorW border-none p-3 rounded-t-lg md:rounded-lg">
                <Icons iconName="location" iconClass="fill-colorG w-5 h-5 mr-2" />
                <input
                id="from"
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full p-0 bg-transparent border-none text-colorB placeholder-gray-500 md:placeholder-transparent"
                placeholder="D'où partons-nous ?"
                />
            </div>
        </div>

        <button
        onClick={swapFields}
        className="absolute top-1/2 left-3/4 ml-6 transform -translate-x-1/2 -translate-y-1/2 bg-colorW md:bg-colorB border-2 border-colorB rounded-full p-3 md:relative md:items-center  md:bg-none md:left-2 md:top-8"
        >
            <Icons iconName="arrowrightleft" iconClass="fill-colorG md:fill-colorW" />
        </button>


        <div className="flex flex-col mt-0.5">
            <label htmlFor="to" className="hidden md:block text-colorW text-sm">À</label>
            <div className="flex items-center bg-colorW border-none p-3 md:rounded-lg">
                <Icons iconName="location" iconClass="fill-colorG w-5 h-5 mr-2" />
                <input
                id="to"
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full p-0 bg-transparent border-none text-colorB placeholder-gray-500 md:placeholder-transparent"
                placeholder="Où allons-nous ?"
                />
            </div>
        </div> 

        </div>

        <div className='flex md:flex-row gap-x-0.5'>
            <div className="flex flex-col mt-0.5 w-1/2">
            <label htmlFor="departure" className="hidden md:block text-colorW text-sm">Départ</label>
                <div className="flex items-center bg-colorW border-none pl-3 rounded-bl-lg md:rounded-lg md:mr-2">
            {/* <Icons iconName="calendar" aria-label="Icône de calendrier" iconClass="fill-colorG w-5 h-5" /> */}
            <input
                id="departure"
                type="date"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                className="p-3 md:rounded-lg border appearance-none bg-transparent w-full"
            />
            </div>
            </div>

            <div className="flex flex-col mt-0.5 w-1/2">
            <label htmlFor="return" className="hidden md:block text-colorW text-sm">Retour</label>
            <div className="flex items-center bg-colorW border-none pl-3 rounded-br-lg md:rounded-lg">
            <input
                id="return"
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="p-3 rounded-b-lg md:rounded-lg bg-transparent border w-full"
            />
            </div>
            </div>
        </div>


        <div className="flex flex-col mt-1">
          <label htmlFor="passengers" className="hidden md:block text-colorW text-sm">Voyageurs</label>
            <div className="flex items-center bg-colorW border-none pl-3 rounded-lg">
            <Icons iconName="user" iconClass="fill-colorG w-5 h-5 mr-2" />
            <input
                id="passengers"
                type="text"
                placeholder="2 Adultes"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="p-3 rounded-lg border appearance-none bg-transparent w-full"
                readOnly
            />
            </div>
        </div>

        <Buttons buttonClass="mt-5 px-5 md:hover:bg-colorG" borderColor="colorW" textContent="Rechercher" />

        {/* Options Vols directs et classe */}
        <div className="flex gap-4 justify-start w-full">
          <select
            id="classType"
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
            className="text-colorW bg-colorB"
          >
            <option value="Économie">Économie</option>
            <option value="Premium">Premium</option>
            <option value="Affaires">Affaires</option>
          </select>

          <label className="flex items-center gap-2 text-colorW text-sm">
            <span>
              <input
                type="checkbox"
                className="appearance-none rounded border border-colorW w-4 h-4 mt-1 checked:bg-colorG"
              />
            </span>

            Vols directs
          </label>
        </div>
        
    
    </div>
        
    </section>
    </div>
    )}
    



    {location.pathname === "/PageAffichageVols" && (
    <div>
    {/* SearchVols */}
    <section style={{ backgroundImage: "url('./src/assets/images/hublot.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} className='mb-10 h-auto py-10 flex flex-col justify-center items-center'>
        <h1 className='text-base md:text-2xl lg:text-4xl font-bold text-colorW z-10'>Trouvez le voyage de vos rêves dès aujourd'hui</h1>

        <div className='w-9/12 md:w-11/12 lg:w-10/12 h-auto mx-auto rounded-3xl z-10 mt-4'>

            <div className='bg-colorB opacity-90 h-full rounded-3xl py-4 md:px-20'>

              <div className='py-2 mb-4 flex justify-center items-center w-3/4 mx-auto text-colorW'>
                  <p>Veuillez saisir une destination</p>
              </div>

              <div className='inset-0 flex flex-col justify-center items-center lg:flex-row md:gap-2'>

              <div className='relative flex flex-col md:flex-row md:items-center md:gap-1'>

                <div className="flex flex-col">
                    <label htmlFor="from" className="hidden md:block text-colorW text-sm">De</label>
                    <div className="flex items-center bg-colorW border-none p-3 rounded-t-lg md:rounded-lg">
                        <Icons iconName="location" iconClass="fill-colorG w-5 h-5 mr-2" />
                        <input
                        id="from"
                        type="text"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        className="w-full md:w-28 p-0 bg-transparent border-none text-colorB placeholder-gray-500 md:placeholder-transparent"
                        placeholder="D'où partons-nous ?"
                        />
                    </div>
                </div>
                    
                    <button
                        onClick={swapFields}
                        className="absolute top-1/2 left-3/4 ml-6 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-colorW md:bg-colorB border-2 border-colorB rounded-full flex items-center justify-center hover:cursor-pointer
                        md:relative md:left-[-12px] md:top-2 md:transform-none
                        "
                        >
                            <Icons iconName="arrowrightleft" iconClass="fill-colorG md:fill-colorW" />
                    </button>

                    <div className="flex flex-col mt-0.5">
                        <label htmlFor="to" className="hidden md:block text-colorW text-sm">À</label>
                        <div className="flex items-center bg-colorW border-none p-3 md:rounded-lg">
                            <Icons iconName="location" iconClass="fill-colorG w-5 h-5 mr-2" />
                            <input
                            id="to"
                            type="text"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                            className="w-full md:w-28 p-0 bg-transparent border-none text-colorB placeholder-gray-500 md:placeholder-transparent"
                            placeholder="Où allons-nous ?"
                            />
                        </div>
                    </div>

                </div>
                

                <div className='flex flex-rows md:flex-row gap-x-0.5'>

                    <div className="flex flex-col mt-0.5 w-[7.2rem] md:w-32">
                        <label htmlFor="departure" className="hidden md:block text-colorW text-sm">Départ</label>
                            <div className="flex items-center bg-colorW border-none pl-3 rounded-bl-lg md:rounded-lg md:mr-2">
                            <input
                                id="departure"
                                type="date"
                                value={departure}
                                onChange={(e) => setDeparture(e.target.value)}
                                className="p-3 md:rounded-lg border appearance-none bg-transparent w-full"
                            />
                            </div>
                    </div>

                    <div className="flex flex-col mt-0.5 w-[7.2rem] md:w-32">
                        <label htmlFor="return" className="hidden md:block text-colorW text-sm">Retour</label>
                            <div className="flex items-center bg-colorW border-none pl-3 rounded-br-lg md:rounded-lg">
                                <input
                                    id="return"
                                    type="date"
                                    value={returnDate}
                                    onChange={(e) => setReturnDate(e.target.value)}
                                    className="p-3 rounded-b-lg md:rounded-lg bg-transparent border w-full"
                                />
                            </div>
                    </div>

                </div>

                <div className="flex flex-col w-1/2 mt-0.5 md:w-auto">
                    <label htmlFor="passengers" className="hidden md:block text-colorW text-sm">Voyageurs</label>
                        <div className="flex items-center bg-colorW border-none pl-3 rounded-lg">
                        <Icons iconName="user" iconClass="fill-colorG w-5 h-5 mr-2" />
                        <input
                            id="passengers"
                            type="text"
                            placeholder="2 Adultes"
                            value={passengers}
                            onChange={(e) => setPassengers(e.target.value)}
                            className="p-3 rounded-lg border appearance-none bg-transparent w-full"
                            readOnly
                        />
                        </div>
                </div>

                <Buttons buttonClass="px-6 mt-4 md:hover:bg-colorG" borderColor="colorW" textContent="Rechercher" />


            </div>
            
                {/* Options Vols directs et classe */}
                <div className="flex gap-4 justify-center w-full mt-4">
                    <select
                        id="classType"
                        value={classType}
                        onChange={(e) => setClassType(e.target.value)}
                        className="text-colorW bg-colorB"
                    >
                        <option value="Économie">Économie</option>
                        <option value="Premium">Premium</option>
                        <option value="Affaires">Affaires</option>
                    </select>

                    <label className="flex items-center gap-2 text-colorW text-sm">
                        <span>
                        <input
                            type="checkbox"
                            className="appearance-none rounded border border-colorW w-4 h-4 mt-1 checked:bg-colorG"
                        />
                        </span>

                        Vols directs
                    </label>
                </div>
            </div>




        </div>

    </section>
    </div>
    )}



    {location.pathname === "/PageHotel" && (
    <div>
    {/* SearchHôtels */}
    <section
    className='relative mb-10 h-auto py-10 flex flex-col justify-center items-center'
    style={{ backgroundImage: "url('./src/assets/images/vuePano.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <h1 className='text-base md:text-2xl lg:text-4xl font-bold text-colorW z-10'>Trouvez l'hôtel de vos rêves dès aujourd'hui</h1>

        <div className='w-9/12 h-auto mx-auto rounded-3xl z-10 mt-4'>

            <div className='bg-colorB opacity-80 h-full rounded-3xl py-4 md:px-6'>

                <div className='py-2 mb-4 flex justify-center items-center w-3/4 mx-auto text-colorW'>
                    <p>Veuillez saisir une ville</p>
                </div>

            <div className='inset-0 flex flex-col justify-center items-center lg:flex-row md:gap-2'>

                <div className='relative flex flex-col md:flex-row md:items-center'>

                    <div className="flex flex-col md:w-64">
                        <label htmlFor="from" className="hidden md:block text-colorW text-sm">Où voulez-vous séjourner ?</label>
                        <div className="flex items-center bg-colorW border-none p-3 rounded-t-lg md:rounded-lg">
                            <Icons iconName="location" iconClass="fill-colorG w-5 h-5 mr-2" />
                            <input
                            id="from"
                            type="text"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            className="w-full md:w-28 p-0 bg-transparent border-none text-colorB placeholder-gray-500 md:placeholder-transparent"
                            placeholder="D'où partons-nous ?"
                            />
                        </div>
                    </div>


                </div>
                

                <div className='flex flex-rows md:flex-row gap-x-0.5'>

                    <div className="flex flex-col mt-0.5 w-[7.2rem] md:w-32">
                        <label htmlFor="departure" className="hidden md:block text-colorW text-sm">Arrivée</label>
                            <div className="flex items-center bg-colorW border-none pl-3 rounded-bl-lg md:rounded-lg md:mr-2">
                            <input
                                id="departure"
                                type="date"
                                value={departure}
                                onChange={(e) => setDeparture(e.target.value)}
                                className="p-3 md:rounded-lg border appearance-none bg-transparent w-full"
                            />
                            </div>
                    </div>

                    <div className="flex flex-col mt-0.5 w-[7.2rem] md:w-32">
                        <label htmlFor="return" className="hidden md:block text-colorW text-sm">Départ</label>
                            <div className="flex items-center bg-colorW border-none pl-3 rounded-br-lg md:rounded-lg">
                                <input
                                    id="return"
                                    type="date"
                                    value={returnDate}
                                    onChange={(e) => setReturnDate(e.target.value)}
                                    className="p-3 rounded-b-lg md:rounded-lg bg-transparent border w-full"
                                />
                            </div>
                    </div>

                </div>

                <div className="flex flex-col w-auto mt-0.5 md:w-auto">
                    <label htmlFor="passengers" className="hidden md:block text-colorW text-sm">Nb de personnes et chambres</label>
                        <div className="flex items-center bg-colorW border-none pl-3 rounded-lg">
                        <Icons iconName="user" iconClass="fill-colorG w-5 h-5 mr-2" />
                        <input
                            id="passengers"
                            type="text"
                            placeholder="2 Adultes"
                            value={passengers}
                            onChange={(e) => setPassengers(e.target.value)}
                            className="p-3 rounded-lg border appearance-none bg-transparent w-full"
                            readOnly
                        />
                        </div>
                </div>

                <Buttons buttonClass="px-6 mt-4 md:hover:bg-colorG" borderColor="colorW" textContent="Rechercher" />


            </div>
            
                {/* Options Vols directs et classe */}
                <div className="flex flex-col  md:flex-row gap-4 justify-center w-full mt-4">
                    <div className='flex flex-col justify-center items-center md:flex-row md:gap-4'>
                        <p className='text-colorW ju'>Filtres populaires :</p>
                            <label className="flex items-center gap-2 text-colorW text-sm">
                            <span>
                            <input
                                type="checkbox"
                                className="appearance-none rounded border border-colorW w-4 h-4 mt-1 checked:bg-colorG"
                            />
                            </span>
                            Vols directs
                        </label>
                        <label className="flex items-center gap-2 text-colorW text-sm">
                            <span>
                            <input
                                type="checkbox"
                                className="appearance-none rounded border border-colorW w-4 h-4 mt-1 checked:bg-colorG"
                            />
                            </span>
                            4 étoiles
                        </label>
                        <label className="flex items-center gap-2 text-colorW text-sm">
                            <span>
                            <input
                                type="checkbox"
                                className="appearance-none rounded border border-colorW w-4 h-4 mt-1 checked:bg-colorG"
                            />
                            </span>
                            3 étoiles
                        </label>
                    </div>

                </div>
            </div>


        </div>

    </section>
    </div>
    )}
    
    </>
  )
}

export default SearchBar;