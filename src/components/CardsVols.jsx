import React, { useState, useEffect } from 'react';
import Icons from './Icons';
import airportsData from '../api/airports.json';

function CardsVols({ flights = [] }) {
    // Trouver le nom de la ville à partir du code d'aéroport
    const findCityName = (airportCode) => {
        const airport = airportsData.find(a => a.airportCode === airportCode);
        return airport ? airport.cityName : airportCode;
    };

    // Formater la date et l'heure
    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const options = { 
            weekday: 'short', 
            hour: '2-digit', 
            minute: '2-digit' 
        };
        return date.toLocaleString('fr-FR', options);
    };

    // Calculer la durée du vol
    const calculateFlightDuration = (segments) => {
        const firstSegment = segments[0];
        const lastSegment = segments[segments.length - 1];
        const departureTime = new Date(firstSegment.departure.at);
        const arrivalTime = new Date(lastSegment.arrival.at);
        
        const durationMs = arrivalTime - departureTime;
        const hours = Math.floor(durationMs / (1000 * 60 * 60));
        const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
        
        return `${hours}h ${minutes}min`;
    };

    // Transformer les vols de l'API en format compatible avec notre composant
    const transformFlights = (apiFlights) => {
        return apiFlights.map((flight, index) => {
            // Récupérer le dernier segment de chaque itinéraire
            const outboundSegments = flight.itineraries[0].segments;
            const lastOutboundSegment = outboundSegments[outboundSegments.length - 1];

            // Gérer l'itinéraire de retour s'il existe
            let lastReturnSegment = null;
            if (flight.itineraries[1]) {
                const returnSegments = flight.itineraries[1].segments;
                lastReturnSegment = returnSegments[returnSegments.length - 1];
            }

            return {
                id: index + 1,
                isFavorite: false,
                outboundFlight: flight.itineraries[0],
                returnFlight: flight.itineraries[1],
                price: flight.price.total,
                departureCode: outboundSegments[0].departure.iataCode,
                departureCity: findCityName(outboundSegments[0].departure.iataCode),
                arrivalCode: lastOutboundSegment.arrival.iataCode,
                arrivalCity: findCityName(lastOutboundSegment.arrival.iataCode),
                departureTime: formatDateTime(outboundSegments[0].departure.at),
                arrivalTime: formatDateTime(lastOutboundSegment.arrival.at),
                outboundDuration: calculateFlightDuration(outboundSegments),
                outboundStops: outboundSegments.length - 1,
                returnDepartureCode: flight.itineraries[1] ? flight.itineraries[1].segments[0].departure.iataCode : null,
                returnDepartureCity: flight.itineraries[1] ? findCityName(flight.itineraries[1].segments[0].departure.iataCode) : null,
                returnArrivalCode: lastReturnSegment ? lastReturnSegment.arrival.iataCode : null,
                returnArrivalCity: lastReturnSegment ? findCityName(lastReturnSegment.arrival.iataCode) : null,
                returnDepartureTime: flight.itineraries[1] ? formatDateTime(flight.itineraries[1].segments[0].departure.at) : null,
                returnArrivalTime: lastReturnSegment ? formatDateTime(lastReturnSegment.arrival.at) : null,
                returnDuration: flight.itineraries[1] ? calculateFlightDuration(flight.itineraries[1].segments) : null,
                returnStops: flight.itineraries[1] ? flight.itineraries[1].segments.length - 1 : 0
            };
        });
    };

    const [vols, setVols] = useState(transformFlights(flights));

    // Mettre à jour les vols si les props changent
    useEffect(() => {
        setVols(transformFlights(flights));
    }, [flights]);

    const favoriteClick = (id) => {
        setVols((volsActuel) =>
            volsActuel.map((vol) =>
                vol.id === id ? { ...vol, isFavorite: !vol.isFavorite } : vol));
    };

    return (
        <section className='max-w-6xl mx-auto'>
            {vols.map((vol) => (
                <div key={vol.id} className='border border-gray-600 m-6 p-6 rounded-lg relative'>
                    <div onClick={() => favoriteClick(vol.id)} className='absolute top-2 right-2 flex items-center' style={{ cursor: 'pointer' }}>
                        <span className='mr-2 text-sm text-gray-600'>{vol.price} €</span>
                        <Icons
                            iconName={vol.isFavorite ? "heart" : "heartempty"}
                            iconClass={"fill-colorG"}
                            aria-label={vol.isFavorite ? "Supprimer ce vol aux favoris" : "Ajouter ce vol aux favoris"}
                        />
                    </div>

                    <div className='grid grid-cols-4 mt-8'>
                        <div className='flex flex-col justify-center text-center'>
                            <p>Aller</p>
                        </div>

                        <div className='flex flex-col justify-center ml-10' aria-label='Départ'>
                            <p>{vol.departureTime}</p>
                            <p className='font-thin'>{vol.departureCode} - {vol.departureCity}</p>
                        </div>

                        <div className='flex justify-center items-center relative md:left-[-50px] lg:left-[-100px]'>
                            <span className='border-t-2 border-gray-600 w-full'></span>
                            <div className='absolute right-[-16px] top-1/2 transform -translate-y-1/2'>
                                <Icons
                                    iconName={"plane"}
                                    iconSize={"16px"}
                                    iconClass={"text-gray-400"}
                                    aria-hidden="true"
                                />
                            </div>
                        </div>

                        <div className='flex flex-col justify-center ml-6' aria-label='Arrivée'>
                            <p>{vol.arrivalTime}</p>
                            <p className='font-thin'>{vol.arrivalCode} - {vol.arrivalCity}</p>
                            <p className='text-sm text-gray-500'>
                                {vol.outboundDuration} 
                                {vol.outboundStops > 0 && ` • ${vol.outboundStops} escale${vol.outboundStops > 1 ? 's' : ''}`}
                            </p>
                        </div>
                    </div>

                    {vol.returnDepartureCode && (
                        <div className='grid grid-cols-4 mt-8'>
                            <div className='flex flex-col justify-center text-center'>
                                <p>Retour</p>
                            </div>

                            <div className='flex flex-col justify-center ml-10' aria-label='Départ'>
                                <p>{vol.returnDepartureTime}</p>
                                <p className='font-thin'>{vol.returnDepartureCode} - {vol.returnDepartureCity}</p>
                            </div>

                            <div className='flex justify-center items-center relative md:left-[-50px] lg:left-[-100px]'>
                                <span className='border-t-2 border-gray-600 w-full'></span>
                                <div className='absolute right-[-16px] top-1/2 transform -translate-y-1/2'>
                                    <Icons
                                        iconName={"plane"}
                                        iconSize={"16px"}
                                        iconClass={"text-gray-400"}
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col justify-center ml-6' aria-label='Arrivée'>
                                <p>{vol.returnArrivalTime}</p>
                                <p className='font-thin'>{vol.returnArrivalCode} - {vol.returnArrivalCity}</p>
                                <p className='text-sm text-gray-500'>
                                    {vol.returnDuration}
                                    {vol.returnStops > 0 && ` • ${vol.returnStops} escale${vol.returnStops > 1 ? 's' : ''}`}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
}

export default CardsVols;