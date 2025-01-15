import React, { useState, useEffect } from 'react';

function OptionsAccessibilite() {

    const [fontSize, setFontSize] = useState('text-base');
    const [darkMode, setDarkMode] = useState(false);
    const [hightContrastMode, setHightContrastMode] = useState(false);

    const zoomFont = () => {
        setFontSize('text-lg');
    };

    const unzoomFont = () => {
        setFontSize('text-sm');
    };

    const darkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    const lightModeToggle = () => {
        setDarkMode(false);
    };

    const setContrast = () => {
        setHightContrastMode(!hightContrastMode);
    };

    const reset = () => {
        setFontSize('text-base');
        setDarkMode(false);
        setHightContrastMode(false);
    };

    useEffect(() => {
        document.body.classList.toggle('dark', darkMode);
        document.body.classList.toggle('hight-contrast-mode', hightContrastMode);
    }, [darkMode, hightContrastMode]);

  return (
    <section
    className="options-accessibilite flex flex-wrap gap-4 justify-center mt-6"
     aria-label='Options pour une meilleure accessibilite'>

<button
        aria-label="Augmenter la taille du texte"
        className="btn p-3 bg-gray-200 hover:bg-gray-300 rounded-lg"
        onClick={zoomFont}
      >
        Aa+
      </button>
      <button
        aria-label="Diminuer la taille du texte"
        className="btn p-3 bg-gray-200 hover:bg-gray-300 rounded-lg"
        onClick={unzoomFont}
      >
        Aa-
      </button>

      <button
        aria-label="Activer le mode sombre"
        className="btn p-3 bg-gray-200 hover:bg-gray-300 rounded-lg"
        onClick={darkModeToggle}
      >
        Mode Sombre
      </button>
      <button
        aria-label="Activer le mode clair"
        className="btn p-3 bg-gray-200 hover:bg-gray-300 rounded-lg"
        onClick={lightModeToggle}
      >
        Mode Clair
      </button>

      <button
        aria-label="Ajouter du contraste de couleur"
        className="btn p-3 bg-gray-200 hover:bg-gray-300 rounded-lg"
        onClick={setContrast}
      >
        Contraste
      </button>
      <button
        aria-label="Réinitialiser les options"
        className="btn p-3 bg-colorB text-colorW hover:bg-colorG rounded-lg"
        onClick={reset}
      >
        Réinitialiser
      </button>
      
    </section>
  )
}

export default OptionsAccessibilite;