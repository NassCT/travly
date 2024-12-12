import React from 'react'
import Footer from './Footer';

function Confidentialites() {
  return (
    <section className="pt-5">
      <div className="my-6 pl-5">
        <button className="bg-colorB text-colorW text-sm hover:underline border border-gray-300 px-8 py-2 rounded-lg">
          Accueil
        </button>
      </div>

      <h1 className="text-center text-2xl sm:text-3xl font-bold mb-6">
        Politique de Confidentialités
      </h1>

      <p className="text-center max-w-3xl mx-auto text-base sm:text-lg my-6">
        Chez Travly, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique quelles informations nous collectons, comment nous les utilisons et quels droits vous avez sur vos données.
      </p>

      <div className="py-10 px-5">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="p-6 rounded-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 md:border-none lg:border-none">
            <div className="flex-shrink-0 w-20 h-20 sm:w-36 sm:h-36 border border-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xl sm:text-2xl font-bold text-gray-700">i</span>
            </div>
            <div>
              <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-800">Informations que nous collectons</h2>
              <p className="mt-2 text-gray-700">
                Nous collectons les informations suivantes pour améliorer votre expérience utilisateur :
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                <li>Informations fournies par l'utilisateur : Nom, email, préférences de recherche (destinations, dates, etc.).</li>
                <li>Données techniques : Adresse IP, type de navigateur, système d'exploitation.</li>
                <li>Données anonymisées : Statistiques d'utilisation du site pour analyse et optimisation.</li>
              </ul>
            </div>
          </div>

          <div className="border border-gray-300 p-6 rounded-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 md:border-none lg:border-none">
            <div className="flex-shrink-0 w-20 h-20 sm:w-36 sm:h-36 border border-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xl sm:text-2xl font-bold text-gray-700">🔧</span>
            </div>
            <div>
              <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-800">Utilisation de vos données</h2>
              <p className="mt-2 text-gray-700">Nous utilisons vos données pour :</p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                <li>Vous proposer des offres de voyage personnalisées.</li>
                <li>Améliorer nos services et notre site web.</li>
                <li>Vous envoyer des notifications ou des emails, si vous y consentez.</li>
              </ul>
            </div>
          </div>

          <div className="border border-gray-300 p-6 rounded-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 md:border-none lg:border-none">
            <div className="flex-shrink-0 w-20 h-20 sm:w-36 sm:h-36 border border-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xl sm:text-2xl font-bold text-gray-700">👤</span>
            </div>
            <div>
              <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-800">Partage des données</h2>
              <p className="mt-2 text-gray-700">
                Nous utilisons vos données pour :
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
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
  );
}

export default Confidentialites;