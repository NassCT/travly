import React from "react";

function GestionCookies() {
  return (
    <section className="my-10">
      <h1 className="text-center text-xl md:text-3xl font-bold">
        Politique de gestion des cookies
      </h1>

      <div className="px-10 lg:px-20 mx-auto max-w-4xl">
        <section className="py-10">
          <h2 className="text-lg font-semibold">Qu'est-ce qu'un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte qui est placé sur votre appareil lorsque vous naviguez sur notre site.
            Il contient des informations qui permettent de personnaliser votre expérience de navigation en fonction de vos préférences.
          </p>

          <h2 className="text-lg font-semibold mt-8">Pourquoi utilisons-nous des cookies ?</h2>
          <p>
            Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser notre trafic, 
            et personnaliser les contenus et les publicités qui vous sont présentés.
            Voici quelques exemples de l'utilisation des cookies sur notre site :
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Faciliter la navigation sur notre site</li>
            <li>Analyser les données de trafic pour améliorer notre contenu</li>
            <li>Proposer des publicités adaptées à vos intérêts</li>
          </ul>

          <h2 className="text-lg font-semibold mt-8">Les types de cookies que nous utilisons</h2>
          <p>
            Nous utilisons plusieurs types de cookies afin de vous offrir une expérience optimale :
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Cookies nécessaires : Ces cookies sont essentiels pour le bon fonctionnement du site.</li>
            <li>Cookies analytiques : Ces cookies nous permettent d'analyser l'utilisation du site et d'améliorer nos services.</li>
            <li>Cookies de personnalisation : Ces cookies aident à personnaliser les contenus et les publicités.</li>
          </ul>

          <h2 className="text-lg font-semibold mt-8">Comment gérer vos préférences de cookies ?</h2>
          <p>
            Vous avez la possibilité de gérer vos préférences concernant les cookies à tout moment en accédant aux paramètres de votre navigateur.
            Vous pouvez choisir d'accepter tous les cookies, d'accepter uniquement certains types de cookies, ou de refuser tous les cookies non nécessaires. 
            Voici comment vous pouvez gérer les cookies dans les navigateurs les plus populaires :
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Google Chrome</strong> : Allez dans Paramètres &gt; Confidentialité et sécurité &gt; Cookies et autres données de site.
            </li>
            <li>
              <strong>Mozilla Firefox</strong> : Allez dans Paramètres &gt; Vie privée et sécurité &gt; Cookies et données de site.
            </li>
            <li>
              <strong>Safari</strong> : Allez dans Préférences &gt; Confidentialité &gt; Cookies et données des sites web.
            </li>
          </ul>

          <h2 className="text-lg font-semibold mt-8">Consentement</h2>
          <p>
            Lorsque vous visitez notre site pour la première fois, vous êtes invité à accepter ou à refuser l'utilisation de certains cookies.
            Si vous acceptez l'utilisation des cookies, ceux-ci seront stockés sur votre appareil pour une durée déterminée.
            Vous pouvez modifier vos préférences à tout moment.
          </p>

          <h2 className="text-lg font-semibold mt-8">Retrait du consentement</h2>
          <p>
            Si vous souhaitez retirer votre consentement à l'utilisation des cookies, vous pouvez le faire à tout moment en modifiant les paramètres de votre navigateur.
            Notez que le retrait du consentement peut affecter certaines fonctionnalités de notre site.
          </p>

          <h2 className="text-lg font-semibold mt-8">Contact</h2>
          <p>
            Si vous avez des questions concernant notre Politique de gestion des cookies, n'hésitez pas à nous contacter via le formulaire de contact sur notre site ou par email.
          </p>
        </section>
      </div>
    </section>
  );
}

export default GestionCookies;