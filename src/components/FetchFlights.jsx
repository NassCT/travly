import React, { useState, useEffect } from "react";
import fetchFlightsApi from "../api/fetchFlightsApi";
import Icons from "./Icons";
import CardsVols from "./CardsVols";
import airportsData from "../api/airports.json";

const FetchFlights = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState({
    origin: "PARIS (CDG)",
    destination: "NEW YORK (JFK)",
    departureDate: new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' }).split('/').reverse().join('-'),
    returnDate: "",
    adults: 1,
    travelClass: "ECONOMY",
    nonStop: false,
  });

  // États pour la recherche d'aéroports
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

  const searchAirports = (input, setter) => {
    if (input.length < 2) {
      setter([]);
      return;
    }

    const filteredAirports = airportsData.filter(
      (airport) =>
        airport.cityName.toLowerCase().includes(input.toLowerCase()) ||
        airport.airportName.toLowerCase().includes(input.toLowerCase()) ||
        airport.airportCode.toLowerCase().includes(input.toLowerCase())
    );

    // Limiter à 5 suggestions
    setter(filteredAirports.slice(0, 5));
  };

  const handleOriginChange = (e) => {
    const value = e.target.value;
    setSearchParams((prev) => ({ ...prev, origin: value }));
    searchAirports(value, setOriginSuggestions);
  };

  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setSearchParams((prev) => ({ ...prev, destination: value }));
    searchAirports(value, setDestinationSuggestions);
  };

  const selectOriginAirport = (airport) => {
    setSearchParams((prev) => ({
      ...prev,
      origin: `${airport.cityName} (${airport.airportCode})`,
    }));
    setOriginSuggestions([]);
  };

  const selectDestinationAirport = (airport) => {
    setSearchParams((prev) => ({
      ...prev,
      destination: `${airport.cityName} (${airport.airportCode})`,
    }));
    setDestinationSuggestions([]);
  };

  const swapFields = () => {
    setSearchParams((prev) => ({
      ...prev,
      origin: prev.destination,
      destination: prev.origin,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSearchParams((prev) => {
      if (name === "adults") {
        const newAdults = Math.max(1, parseInt(value) || 1);
        return { ...prev, [name]: newAdults };
      }
      if (type === "checkbox") {
        return { ...prev, [name]: checked };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setFlights([]);

    try {
      // Vérifier si les aéroports existent
      const originAirport = airportsData.find(
        (airport) =>
          airport.cityName.toLowerCase() ===
            searchParams.origin.toLowerCase() ||
          airport.airportCode.toLowerCase() ===
            searchParams.origin.toLowerCase() ||
          `${airport.cityName} (${airport.airportCode})`.toLowerCase() ===
            searchParams.origin.toLowerCase()
      );

      const destinationAirport = airportsData.find(
        (airport) =>
          airport.cityName.toLowerCase() ===
            searchParams.destination.toLowerCase() ||
          airport.airportCode.toLowerCase() ===
            searchParams.destination.toLowerCase() ||
          `${airport.cityName} (${airport.airportCode})`.toLowerCase() ===
            searchParams.destination.toLowerCase()
      );

      if (!originAirport) {
        setError(`Aéroport de départ "${searchParams.origin}" non trouvé`);
        setLoading(false);
        return;
      }

      if (!destinationAirport) {
        setError(
          `Aéroport de destination "${searchParams.destination}" non trouvé`
        );
        setLoading(false);
        return;
      }

      // Extraire le code d'aéroport des champs de recherche
      const originCode = originAirport.airportCode;
      const destinationCode = destinationAirport.airportCode;

      const options = {
        adults: searchParams.adults,
        travelClass: searchParams.travelClass,
        nonStop: searchParams.nonStop,
      };

      if (searchParams.returnDate) {
        options.returnDate = searchParams.returnDate;
      }

      const data = await fetchFlightsApi(
        originCode,
        destinationCode,
        searchParams.departureDate,
        options
      );

      if (!data.data || data.data.length === 0) {
        setError(
          `Aucun vol trouvé entre ${originAirport.cityName} et ${destinationAirport.cityName}`
        );
      } else {
        setFlights(data.data);
      }
    } catch (err) {
      setError(err.message);
      console.error("Erreur de recherche de vols:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Section de recherche avec un fond différent */}

      {location.pathname === "/" && (
        <div className="bg-colorB px-20 py-8 shadow-lg">
          <div className="md:flex md:flex-wrap md:items-center md:gap-4">
            <div className="relative flex flex-col md:flex-row md:items-center">
              <div className="flex flex-col w-full relative">
                <label
                  htmlFor="origin"
                  className="hidden md:block text-colorW text-sm"
                >
                  De
                </label>
                <div className="flex items-center bg-colorW border-none p-3 rounded-t-lg md:rounded-lg">
                  <Icons
                    iconName="location"
                    iconClass="fill-colorG w-5 h-5 mr-2"
                  />
                  <input
                    id="origin"
                    type="text"
                    name="origin"
                    value={searchParams.origin}
                    onChange={handleOriginChange}
                    className="w-full p-0 bg-transparent border-none text-colorB placeholder-gray-500 md:placeholder-transparent"
                    placeholder="D'où partons-nous ?"
                  />
                </div>
                {originSuggestions.length > 0 && (
                  <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto">
                    {originSuggestions.map((airport) => (
                      <li
                        key={airport.airportCode}
                        onClick={() => selectOriginAirport(airport)}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {airport.cityName} ({airport.airportCode}) -{" "}
                        {airport.airportName}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button
                onClick={swapFields}
                className="absolute top-1/2 left-3/4 ml-6 transform -translate-x-1/2 -translate-y-1/2 bg-colorW md:bg-colorB border-2 border-colorB rounded-full p-3 md:relative md:items-center md:bg-none md:left-2 md:top-8 z-10"
              >
                <Icons
                  iconName="arrowrightleft"
                  iconClass="fill-colorG md:fill-colorW"
                />
              </button>

              <div className="flex flex-col w-full relative mt-0.5">
                <label
                  htmlFor="destination"
                  className="hidden md:block text-colorW text-sm"
                >
                  À
                </label>
                <div className="flex items-center bg-colorW border-none p-3 md:rounded-lg">
                  <Icons
                    iconName="location"
                    iconClass="fill-colorG w-5 h-5 mr-2"
                  />
                  <input
                    id="destination"
                    type="text"
                    name="destination"
                    value={searchParams.destination}
                    onChange={handleDestinationChange}
                    className="w-full p-0 bg-transparent border-none text-colorB placeholder-gray-500 md:placeholder-transparent"
                    placeholder="Où allons-nous ?"
                  />
                </div>
                {destinationSuggestions.length > 0 && (
                  <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto">
                    {destinationSuggestions.map((airport) => (
                      <li
                        key={airport.airportCode}
                        onClick={() => selectDestinationAirport(airport)}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {airport.cityName} ({airport.airportCode}) -{" "}
                        {airport.airportName}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="flex md:flex-row gap-x-0.5">
              <div className="flex flex-col mt-0.5 w-1/2">
                <label
                  htmlFor="departureDate"
                  className="hidden md:block text-colorW text-sm"
                >
                  Départ
                </label>
                <div className="flex items-center bg-colorW border-none pl-3 rounded-bl-lg md:rounded-lg md:mr-2">
                  <input
                    id="departureDate"
                    type="date"
                    name="departureDate"
                    value={searchParams.departureDate}
                    onChange={handleInputChange}
                    className="p-3 md:rounded-lg border appearance-none bg-transparent w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-0.5 w-1/2">
                <label
                  htmlFor="returnDate"
                  className="hidden md:block text-colorW text-sm"
                >
                  Retour
                </label>
                <div className="flex items-center bg-colorW border-none pl-3 rounded-br-lg md:rounded-lg">
                  <input
                    id="returnDate"
                    type="date"
                    name="returnDate"
                    value={searchParams.returnDate}
                    onChange={handleInputChange}
                    className="p-3 rounded-b-lg md:rounded-lg bg-transparent border w-full"
                    placeholder="Date de retour (optionnel)"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-1/2 mt-0.5 md:w-auto">
              <label
                htmlFor="adults"
                className="hidden md:block text-colorW text-sm"
              >
                Voyageurs
              </label>
              <input
                id="adults"
                type="number"
                name="adults"
                min="1"
                value={searchParams.adults}
                onChange={handleInputChange}
                className="p-3 bg-colorW rounded-lg"
                placeholder="Nombre de voyageurs"
              />
            </div>

            <button
              onClick={handleSearch}
              disabled={loading}
              className=" mt-4 p-3 bg-colorG text-colorW rounded-lg hover:bg-opacity-90 disabled:opacity-50"
            >
              {loading ? "Recherche en cours..." : "Rechercher des vols"}
            </button>

            <div className="flex flex-col">
              <label
                htmlFor="travelClass"
                className="hidden md:block text-colorW text-sm"
              >
                Classe
              </label>
              <select
                id="travelClass"
                value={searchParams.travelClass}
                onChange={handleInputChange}
                name="travelClass"
                className="text-colorW bg-colorB p-3 rounded-lg"
              >
                <option value="ECONOMY">Économique</option>
                <option value="PREMIUM_ECONOMY">Économique Premium</option>
                <option value="BUSINESS">Affaires</option>
                <option value="FIRST">Première</option>
              </select>
            </div>

            <div className="flex items-center mt-2">
              <label className="flex items-center gap-2 text-colorW text-sm">
                <span>
                  <input
                    type="checkbox"
                    name="nonStop"
                    checked={searchParams.nonStop}
                    onChange={handleInputChange}
                    className="appearance-none rounded border border-colorW w-4 h-4 mt-1 checked:bg-colorG"
                  />
                </span>
                Vols directs
              </label>
            </div>

            {error && (
              <div className="mt-4 p-2 bg-red-100 text-red-800 rounded">
                {error}
              </div>
            )}
          </div>
        </div>
      )}

      {location.pathname === "/Vols" && (
        <div
          style={{
            backgroundImage: "url('./src/assets/images/hublot.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="px-20 py-8 shadow-lg"
        >
          <div className="bg-colorB opacity-90 h-full rounded-3xl p-4">
            <div className="opacity-90">
              <div className="md:flex md:flex-wrap md:items-center md:gap-4">
                <div className="relative flex flex-col md:flex-row md:items-center">
                  <div className="flex flex-col w-full relative">
                    <label
                      htmlFor="origin"
                      className="hidden md:block text-colorW text-sm"
                    >
                      De
                    </label>
                    <div className="flex items-center bg-colorW border-none p-3 rounded-t-lg md:rounded-lg">
                      <Icons
                        iconName="location"
                        iconClass="fill-colorG w-5 h-5 mr-2"
                      />
                      <input
                        id="origin"
                        type="text"
                        name="origin"
                        value={searchParams.origin}
                        onChange={handleOriginChange}
                        className="w-full p-0 bg-transparent border-none text-colorB placeholder-gray-500 md:placeholder-transparent"
                        placeholder="D'où partons-nous ?"
                      />
                    </div>
                    {originSuggestions.length > 0 && (
                      <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto">
                        {originSuggestions.map((airport) => (
                          <li
                            key={airport.airportCode}
                            onClick={() => selectOriginAirport(airport)}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                          >
                            {airport.cityName} ({airport.airportCode}) -{" "}
                            {airport.airportName}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <button
                    onClick={swapFields}
                    className="absolute top-1/2 left-3/4 ml-6 transform -translate-x-1/2 -translate-y-1/2 bg-colorW md:bg-colorB border-2 border-colorB rounded-full p-3 md:relative md:items-center md:bg-none md:left-2 md:top-8 z-10"
                  >
                    <Icons
                      iconName="arrowrightleft"
                      iconClass="fill-colorG md:fill-colorW"
                    />
                  </button>

                  <div className="flex flex-col w-full relative mt-0.5">
                    <label
                      htmlFor="destination"
                      className="hidden md:block text-colorW text-sm"
                    >
                      À
                    </label>
                    <div className="flex items-center bg-colorW border-none p-3 md:rounded-lg">
                      <Icons
                        iconName="location"
                        iconClass="fill-colorG w-5 h-5 mr-2"
                      />
                      <input
                        id="destination"
                        type="text"
                        name="destination"
                        value={searchParams.destination}
                        onChange={handleDestinationChange}
                        className="w-full p-0 bg-transparent border-none text-colorB placeholder-gray-500 md:placeholder-transparent"
                        placeholder="Où allons-nous ?"
                      />
                    </div>
                    {destinationSuggestions.length > 0 && (
                      <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto">
                        {destinationSuggestions.map((airport) => (
                          <li
                            key={airport.airportCode}
                            onClick={() => selectDestinationAirport(airport)}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                          >
                            {airport.cityName} ({airport.airportCode}) -{" "}
                            {airport.airportName}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="flex md:flex-row gap-x-0.5">
                  <div className="flex flex-col mt-0.5 w-1/2">
                    <label
                      htmlFor="departureDate"
                      className="hidden md:block text-colorW text-sm"
                    >
                      Départ
                    </label>
                    <div className="flex items-center bg-colorW border-none pl-3 rounded-bl-lg md:rounded-lg md:mr-2">
                      <input
                        id="departureDate"
                        type="date"
                        name="departureDate"
                        value={searchParams.departureDate}
                        onChange={handleInputChange}
                        className="p-3 md:rounded-lg border appearance-none bg-transparent w-full"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col mt-0.5 w-1/2">
                    <label
                      htmlFor="returnDate"
                      className="hidden md:block text-colorW text-sm"
                    >
                      Retour
                    </label>
                    <div className="flex items-center bg-colorW border-none pl-3 rounded-br-lg md:rounded-lg">
                      <input
                        id="returnDate"
                        type="date"
                        name="returnDate"
                        value={searchParams.returnDate}
                        onChange={handleInputChange}
                        className="p-3 rounded-b-lg md:rounded-lg bg-transparent border w-full"
                        placeholder="Date de retour (optionnel)"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-1 md:mt-0">
                  <label
                    htmlFor="adults"
                    className="hidden md:block text-colorW text-sm"
                  >
                    Voyageurs
                  </label>
                  <input
                    id="adults"
                    type="number"
                    name="adults"
                    min="1"
                    value={searchParams.adults}
                    onChange={handleInputChange}
                    className="p-3 bg-colorW rounded-lg"
                    placeholder="Nombre de voyageurs"
                  />
                </div>

                <button
                  onClick={handleSearch}
                  disabled={loading}
                  className="mt-5 p-3 bg-colorG text-colorW rounded-lg hover:bg-opacity-90 disabled:opacity-50"
                >
                  {loading ? "Recherche en cours..." : "Rechercher des vols"}
                </button>

                <div className="flex flex-col">
                  <label
                    htmlFor="travelClass"
                    className="hidden md:block text-colorW text-sm"
                  >
                    Classe
                  </label>
                  <select
                    id="travelClass"
                    value={searchParams.travelClass}
                    onChange={handleInputChange}
                    name="travelClass"
                    className="text-colorW bg-colorB p-3 rounded-lg"
                  >
                    <option value="ECONOMY">Économique</option>
                    <option value="PREMIUM_ECONOMY">Économique Premium</option>
                    <option value="BUSINESS">Affaires</option>
                    <option value="FIRST">Première</option>
                  </select>
                </div>

                <div className="flex items-center mt-2">
                  <label className="flex items-center gap-2 text-colorW text-sm">
                    <span>
                      <input
                        type="checkbox"
                        name="nonStop"
                        checked={searchParams.nonStop}
                        onChange={handleInputChange}
                        className="appearance-none rounded border border-colorW w-4 h-4 mt-1 checked:bg-colorG"
                      />
                    </span>
                    Vols directs
                  </label>
                </div>

                {error && (
                  <div className="mt-4 p-2 bg-red-100 text-red-800 rounded">
                    {error}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section des résultats de vol avec un fond blanc */}
      {flights.length > 0 && (
        <div className="px-20 py-10">
          <h3 className="text-2xl font-semibold mb-4 text-colorB">
            Offres de vol ({flights.length} résultats)
          </h3>
          <CardsVols flights={flights} />
        </div>
      )}

      {error && error.includes("Aucun vol trouvé") && (
        <div className="px-20 py-10">
          <div
            className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Pas de vols disponibles :</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FetchFlights;
