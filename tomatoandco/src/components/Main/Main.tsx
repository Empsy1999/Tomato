import React, { useState } from "react";
import Modal from "../Modal/Modal.tsx";
 
const Main: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      <div className="middle-section">
        <h2>
          Live longer. The highest quality tomatoes
          <br />
          delivered to your door.
        </h2>
        <p>
          Make Homemade Pizza like never before. Join our newly established
          campaign to source and distribute over 250 locally grown tomato
          species.
        </p>
        <div className="subscribe-button-container">
          <button className="subscribe-button" onClick={openModal}>
            Inquire Now!
          </button>
        </div>
      </div>

      {isModalOpen && <Modal closeModal={closeModal} />}
    </main>
  );
};

export default Main;
