import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-colorB text-colorW py-10 text-center '>
      <div className='grid grid-cols-2 justify-center gap-4 md:grid-cols-2 lg:flex'>
        <Link
          to="/MentionsLegales"
          className='text-sm sm:text-base hover:underline'>
          Mentions légales
        </Link>
        <Link
          to="/Confidentialites"
          className='text-sm sm:text-base hover:underline'>
          Politique de confidentialités
        </Link>
        <Link
          to="/Conditions"
          className='text-sm sm:text-base hover:underline'>
          Conditions d'utilisation
        </Link>
        <Link
          to="/Contact"
          className='text-sm sm:text-base hover:underline'>
          Contact
        </Link>
      </div>
      <div className='flex justify-center mt-6 gap-4'>
        <div className='flex gap-2'>
          <a href="https://facebook.com" className="text-xl">🔵</a>
          <a href="https://instagram.com" className="text-xl">📸</a>
          <a href="https://twitter.com" className="text-xl">🐦</a>
        </div>
        <div className='text-xs mt-2'>
        © Travely - 2024
        </div>
      </div>
    </footer>
  );
}

export default Footer;