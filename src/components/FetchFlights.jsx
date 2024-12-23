import React, { useState, useEffect } from 'react';
import fetchFlightsApi, { FLIGHTS_API_CONFIG } from '../api/fetchFlightsApi';

const FetchFlights = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState({
    origin: 'PAR',
    destination: 'NYC',
    departureDate: new Date().toISOString().split('T')[0]
  });

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchFlightsApi(
        searchParams.origin, 
        searchParams.destination, 
        searchParams.departureDate
      );
      
      setFlights(data.data || []); // Adapté à la structure de la réponse Amadeus
    } catch (err) {
      setError(err.message);
      console.error('Erreur de recherche de vols:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Recherche de Vols</h2>
      
      <div className="space-y-4">
        <input
          type="text"
          name="origin"
          value={searchParams.origin}
          onChange={handleInputChange}
          placeholder="Code aéroport de départ"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="destination"
          value={searchParams.destination}
          onChange={handleInputChange}
          placeholder="Code aéroport d'arrivée"
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          name="departureDate"
          value={searchParams.departureDate}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        
        <button 
          onClick={handleSearch}
          disabled={loading}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Recherche en cours...' : 'Rechercher des vols'}
        </button>
      </div>

      {error && (
        <div className="mt-4 p-2 bg-red-100 text-red-800 rounded">
          {error}
        </div>
      )}

      {flights.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Résultats des vols</h3>
          {flights.map((flight, index) => (
            <div key={index} className="border p-2 mb-2 rounded">
              <p>Prix: {flight.price?.total} {flight.price?.currency}</p>
              <p>Compagnie: {flight.itineraries[0]?.segments[0]?.carrierCode}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchFlights;
