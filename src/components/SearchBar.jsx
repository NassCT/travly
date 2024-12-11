import React, { useState } from 'react';
import Buttons from './Buttons';
import Icons from './Icons';

function SearchBar() {
  const [from, setFrom] = useState('Lyon');
  const [to, setTo] = useState('Strasbourg');
  const [departure, setDeparture] = useState('2024-12-21');
  const [returnDate, setReturnDate] = useState('2025-01-15');
  const [passengers, setPassengers] = useState('2 Adultes');
  const [classType, setClassType] = useState('Économie'); // Classe sélectionnée
  const [directFlights, setDirectFlights] = useState(false); // Vols directs

  const swapFields = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 px-20 py-10 bg-colorB shadow-lg">
        <div className="flex flex-col">
          <label htmlFor="from" className="text-colorW text-sm">De</label>
          <input
            id="from"
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="p-3 rounded-lg border"
          />
        </div>
        <button
          onClick={swapFields}
          className="mt-5 p-2"
        >
          <Icons iconName="arrowrightleft" iconClass="fill-colorW" />
        </button>
        <div className="flex flex-col">
          <label htmlFor="to" className="text-colorW text-sm">À</label>
          <input
            id="to"
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="p-3 rounded-lg border"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="departure" className="text-colorW text-sm">Départ</label>
          <input
            id="departure"
            type="date"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            className="p-3 rounded-lg border"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="return" className="text-colorW text-sm">Retour</label>
          <input
            id="return"
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="p-3 rounded-lg border"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="passengers" className="text-colorW text-sm">Voyageurs</label>
          <input
            id="passengers"
            type="text"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="p-3 rounded-lg border w-28"
            readOnly
          />
        </div>

        <Buttons buttonClass="mt-5 px-5" borderColor="colorW" textContent="Rechercher" />

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
    </>
  );
}

export default SearchBar;
