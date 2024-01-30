import React, { useState } from "react";
import { database, ref, push, get } from "../../firebase";

const Modal = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubscribe = async () => {
    if (email && fullName) {
      const subscribersRef = ref(database, "subscribers");
      const snapshot = await get(subscribersRef);

      if (
        !snapshot.exists() ||
        !Object.values(snapshot.val()).some(
          (subscriber) => subscriber.email === email
        )
      ) {
        push(subscribersRef, {
          email: email,
          fullName: fullName,
        })
          .then(() => {
            alert("Subscription added successfully!");
          })
          .catch((error) => {
            console.error("Error adding subscription:", error.message);
          })
          .finally(() => {
            closeModal();
          });
      } else {
        alert("Email is already added!");
      }
    } else {
      console.error("Email and Full Name are required");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="modal-close" onClick={closeModal}>
          x
        </span>
        <p>We'll let you know as soon as we're ready to ship!</p>
        <div className="inputs-field">
          <label>Email:</label>
          <input
            type="email"
            className="modal-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Full Name:</label>
          <input
            type="text"
            className="modal-input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <button className="subscribe-button" onClick={handleSubscribe}>
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default Modal;
