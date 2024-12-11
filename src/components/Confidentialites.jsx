import React from 'react'
import Footer from './Footer';

function Confidentialites() {
  return (
    <section>

        <h1 className='text-center text-3xl font-bold'>Politique de confidentialités</h1>

        <p className='text-center mx-56 my-10'>Chez Travly, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique quelles informations nous collectons, comment nous les utilisons et quels droits vous avez sur vos données.</p>

        <div className="py-10 px-5">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Première section */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
            <span className="text-xl font-bold text-gray-700">i</span>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Informations que nous collectons</h2>
            <p className="mt-2 text-gray-700">
              Nous collectons les informations suivantes pour améliorer votre expérience utilisateur :
            </p>
            <ul className="mt-2 text-gray-700 space-y-1 list-disc pl-5">
              <li>Informations fournies par l'utilisateur : Nom, email, préférences de recherche (destinations, dates, etc.).</li>
              <li>Données techniques : Adresse IP, type de navigateur, système d'exploitation.</li>
              <li>Données anonymisées : Statistiques d'utilisation du site pour analyse et optimisation.</li>
            </ul>
          </div>
        </div>

        {/* Deuxième section */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
            <span className="text-xl font-bold text-gray-700">🔧</span>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Utilisation de vos données</h2>
            <p className="mt-2 text-gray-700">Nous utilisons vos données pour :</p>
            <ul className="mt-2 text-gray-700 space-y-1 list-disc pl-5">
              <li>Vous proposer des offres de voyage personnalisées.</li>
              <li>Améliorer nos services et notre site web.</li>
              <li>Vous envoyer des notifications ou des emails, si vous y consentez.</li>
            </ul>
          </div>
        </div>

        {/* Troisième section */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
            <span className="text-xl font-bold text-gray-700">👤</span>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Partage des données</h2>
            <p className="mt-2 text-gray-700">Nous utilisons vos données pour :</p>
            <ul className="mt-2 text-gray-700 space-y-1 list-disc pl-5">
              <li>Vous proposer des offres de voyage personnalisées.</li>
              <li>Améliorer nos services et notre site web.</li>
              <li>Vous envoyer des notifications ou des emails, si vous y consentez.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>


        <Footer />
      
    </section>
  )
}

export default Confidentialites;