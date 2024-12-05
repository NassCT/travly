import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-colorB text-colorW py-10 text-center'>
      <div>
        <Link
        to="/mentions-legales"
        className='text-sm mx-4 hover:underline'>
          Mentions légales
        </Link>
        <Link
        to="/mentions-legales"
        className='text-sm mx-4 hover:underline'>
          Politique de confidentialités
        </Link>
        <Link
        to="/mentions-legales"
        className='text-sm mx-4 hover:underline'>
          Conditions d'utilisation
        </Link>
        <Link
        to="/mentions-legales"
        className='text-sm mx-4 hover:underline'>
          Contact
        </Link>
      </div>
      <div className='text-xs mt-6'>
        © Travely - 2024
      </div>
    </footer>
  )
}

export default Footer;