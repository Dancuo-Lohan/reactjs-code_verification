import React, { useState } from 'react';
import './ClavierVirtuel.css';
import FenetreModale from './FenetreModale'; // Importez le composant FenetreModale

function ClavierVirtuel() {
  const [valeurInput, setValeurInput] = useState('');
  const [modalOpen, setModalOpen] = useState(false); // État pour contrôler l'ouverture de la fenêtre modale
  const [validationMessage, setValidationMessage] = useState('');

  const mettreAJourValeurInput = (nouvelleValeur) => {
    setValeurInput(nouvelleValeur);
  };

  const ajouterCaractere = (caractere) => {
    mettreAJourValeurInput(valeurInput + caractere);
  };

  const effacerDernierCaractere = () => {
    mettreAJourValeurInput(valeurInput.slice(0, -1));
  };

  const viderInput = () => {
    mettreAJourValeurInput('');
  };

  const validerInput = () => {
    const valeurValide = ["WELCOME", "IMHUNGRY23", "JAIDESCONTACTS"].includes(valeurInput.toUpperCase());
    if (valeurValide) {
      const messages = {
        "WELCOME": "Vous bénéficiez de -20% sur votre commande",
        "IMHUNGRY23": "Une petite frite vous est offerte",
        "JAIDESCONTACTS": "La commande est gratuite (pensez au pourboire)"
      };
      setValidationMessage(messages[valeurInput.toUpperCase()]);
      setModalOpen(true); // Ouvre la fenêtre modale lorsque la validation réussit
    } else {
      setValidationMessage("Le code est inconnu !");
      setModalOpen(true); // Ouvre la fenêtre modale lorsque la validation réussit
    }
  };

  const chiffres = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const lettres = 'azertyuiopqsdfghjklmwxcvbn'.split('');

  return (
    <div>
      <input class="code_input" type="text" value={valeurInput} readOnly />
      <div class="button-container">
        {chiffres.map((chiffre) => (
          <button key={chiffre} onClick={() => ajouterCaractere(chiffre)}>
            {chiffre}
          </button>
        ))}
        {lettres.map((lettre) => (
          <button key={lettre} onClick={() => ajouterCaractere(lettre)}>
            {lettre}
          </button>
        ))}
      </div>
      <div class="main_button-container">
        <button onClick={() => effacerDernierCaractere()}>Supprimer</button>
        <button onClick={() => viderInput()}>Vider</button>
        <button onClick={() => validerInput()}>Valider</button>
      </div>
      {/* Supprimez la div suivante qui affiche directement le message */}
      {/* <div>{validationMessage}</div> */}
      {/* Utilisez la fenêtre modale pour afficher le message */}
      <FenetreModale
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)} // Fermez la fenêtre modale lorsque l'utilisateur clique sur le bouton de fermeture
        message={validationMessage}
      />
    </div>
  );
}

export default ClavierVirtuel;
