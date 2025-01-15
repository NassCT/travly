import React, { useState, useEffect } from "react";
import Icons from "./Icons";
import airportsData from "../api/airports.json";

function SearchBar({ onSearch }) {
  const [from, setFrom] = useState("Lyon");
  const [to, setTo] = useState("Strasbourg");
  const [departure, setDeparture] = useState("2024-12-21");
  const [returnDate, setReturnDate] = useState("2025-01-15");
  const [passengers, setPassengers] = useState("2 Adultes");
  const [classType, setClassType] = useState("Économie"); // Classe sélectionnée
  // const [directFlights, setDirectFlights] = useState(false); // Vols directs

  const [searchTermFrom, setSearchTermFrom] = useState("");
  const [suggestionsFrom, setSuggestionsFrom] = useState([]);
  const [selectedAirportFrom, setSelectedAirportFrom] = useState(null);

  const [searchTermTo, setSearchTermTo] = useState("");
  const [suggestionsTo, setSuggestionsTo] = useState([]);
  const [selectedAirportTo, setSelectedAirportTo] = useState(null);

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

  const handleInputChangeFrom = (e) => {
    const value = e.target.value;
    setSearchTermFrom(value);
    searchAirports(value, setSuggestionsFrom);
  };

  const handleInputChangeTo = (e) => {
    const value = e.target.value;
    setSearchTermTo(value);
    searchAirports(value, setSuggestionsTo);
  };

  const selectAirportFrom = (airport) => {
    setSelectedAirportFrom(airport);
    setSearchTermFrom(`${airport.cityName} (${airport.airportCode})`);
    setSuggestionsFrom([]);
    setFrom(`${airport.cityName} (${airport.airportCode})`);
  };

  const selectAirportTo = (airport) => {
    setSelectedAirportTo(airport);
    setSearchTermTo(`${airport.cityName} (${airport.airportCode})`);
    setSuggestionsTo([]);
    setTo(`${airport.cityName} (${airport.airportCode})`);
  };

  const swapFields = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch({
        from,
        to,
        departure,
        returnDate,
        passengers,
        classType,
      });
    }
  };

  // const location = useLocation();

  return (
    <>
      {/* Condition commentée pour l'instant */}
      {/* {location.pathname === "/" && ( */}
      <div>
        {/* SearchBar / */}
        <section>
          <div className="md:flex md:flex-wrap md:items-center md:gap-4 px-20 py-10 bg-colorB shadow-lg">
            {/* Add the rest of the content here */}
          </div>
          <div className="relative flex flex-col md:flex-row md:items-center">
            <div className="flex flex-col">
              <label
                htmlFor="from"
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
                  id="from"
                  type="text"
                  value={searchTermFrom}
                  onChange={handleInputChangeFrom}
                  className="w-full p-0 bg-transparent border-none text-colorB placeholder-gray-500 md:placeholder-transparent"
                  placeholder="D'où partons-nous ?"
                />
                {suggestionsFrom.length > 0 && (
                  <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto">
                    {suggestionsFrom.map((airport) => (
                      <li
                        key={airport.airportCode}
                        onClick={() => selectAirportFrom(airport)}
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

            <button
              onClick={swapFields}
              className="absolute top-1/2 left-3/4 ml-6 transform -translate-x-1/2 -translate-y-1/2 bg-colorW md:bg-colorB border-2 border-colorB rounded-full p-3 md:relative md:items-center md:bg-none md:left-2 md:top-8"
            >
              <Icons
                iconName="arrowrightleft"
                iconClass="fill-colorG md:fill-colorW"
              />
            </button>

            <div className="flex flex-col mt-0.5">
              <label
                htmlFor="to"
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
                  id="to"
                  type="text"
                  value={searchTermTo}
                  onChange={handleInputChangeTo}
                  className="w-full p-0 bg-transparent border-none text-colorB placeholder-gray-500 md:placeholder-transparent"
                  placeholder="Où allons-nous ?"
                />
                {suggestionsTo.length > 0 && (
                  <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto">
                    {suggestionsTo.map((airport) => (
                      <li
                        key={airport.airportCode}
                        onClick={() => selectAirportTo(airport)}
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
          </div>

          <div className="flex md:flex-row gap-x-0.5">
            <div className="flex flex-col mt-0.5 w-1/2">
              <label
                htmlFor="departure"
                className="hidden md:block text-colorW text-sm"
              >
                Départ
              </label>
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
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="p-3 rounded-b-lg md:rounded-lg bg-transparent border w-full"
                  placeholder="Date de retour (optionnel)"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-x-0.5 mt-2">
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="passengers"
                className="hidden md:block text-colorW text-sm"
              >
                Voyageurs
              </label>
              <select
                id="passengers"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="p-3 bg-colorW rounded-lg"
              >
                <option>1 Adulte</option>
                <option>2 Adultes</option>
                <option>3 Adultes</option>
                <option>4 Adultes</option>
              </select>
            </div>
          </div>
          {/* Options Vols directs et classe */}
          <div className="flex flex-col  md:flex-row gap-4 justify-center w-full mt-4">
            <div className="flex flex-col justify-center items-center md:flex-row md:gap-4">
              <p className="text-colorW ju">Filtres populaires :</p>
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

            <button
              onClick={handleSearch}
              className="w-full mt-4 p-3 bg-colorG text-colorW rounded-lg hover:bg-opacity-90"
            >
              Rechercher des vols
            </button>
          </div>
        </section>
      </div>
      {/* ) */}
    </>
  );
}

export default SearchBar;
