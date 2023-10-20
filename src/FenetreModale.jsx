import React, { useState } from 'react';
import './FenetreModale.css';

function FenetreModale({ isOpen, onClose, message }) {
  return (
    <div class={`modal ${isOpen ? 'open' : 'closed'}`}>
      <div class="modal-content">
        <p>{message}</p>
        <button className="close" onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
}

export default FenetreModale;