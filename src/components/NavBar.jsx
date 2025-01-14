import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icons from './Icons';
import Logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-colorB text-black px-6 py-7 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <Link to="/PageAccueil">
        <img
          src={Logo}
          alt="Logo"
          className="h-20 mr-8 md:h-16 sm:h-12" // Utilisation de h-20 pour les grands écrans, h-16 pour les tablettes, h-12 pour les mobiles
        />
      </Link>

      {/* Burger Menu */}
      <div className="ml-auto pr-6 z-50">
        <button
          onClick={toggleMenu}
          className="relative w-8 h-8 flex items-center justify-center focus:outline-none"
          aria-label="Menu"
        >
          <Icons
            iconName="burger"
            iconClass={`transition-opacity fill-colorW duration-300 absolute ${isMenuOpen ? 'opacity-0 ' : 'opacity-100 delay-150'}`}
          />
          <Icons
            iconName="xmark"
            iconClass={`transition-opacity fill-colorG duration-300 absolute ${isMenuOpen ? 'opacity-100 delay-150' : 'opacity-0 '}`}
          />
        </button>
      </div>

      {/* Menu Container */}
      <div
        className={`fixed top-0 left-0 right-0 bg-colorW z-40 rounded-b-3xl transform transition-all duration-300
          ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
          md:top-8 md:right-8 md:left-auto md:w-80 md:rounded-xl md:shadow-lg`}
      >
        <ul className="flex flex-col items-start space-y-6 py-6 px-10 md:px-6">
          {[{ to: '/PageAccueil', label: 'Accueil', icon: 'home' },
          { to: '/PageAffichageVols', label: 'Vols', icon: 'planedeparture' },
          { to: '/PageHotel', label: 'Hôtels', icon: 'hotel' },
          { to: '/Contact', label: 'Contact', icon: 'phone' },
          { to: '/PageFavoris', label: 'Favoris', icon: 'heart' }]
            .map(({ to, label, icon }) => (
              <li key={to} className="w-full">
                <Link to={to} className="flex items-center text-black text-xl text-left">
                  <Icons iconName={icon} iconClass="fill-colorG mr-3" />
                  {label}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
