import React from 'react';
import { useState } from 'react';
import './style.css'; 

import { FaThreads } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const SubscribeModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfBsLeuYi4JwkmivW1A3gObdaefHON4LcOpBdpE61v_raKkPg/formResponse"; // Form action URL
    
    const formData = new FormData();
    formData.append("entry.1346747144", name);   // Entry ID for Name
    formData.append("entry.1836486174", phone);  // Entry ID for Phone
    
    await fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });
    
    alert("Xabaringiz yuborildi! Tez orada aloqaga chiqamiz.");
    
    // Optional: Formani tozalash
    setName('');
    setPhone('');


    window.location.href = "https://www.instagram.com/zinnur_akademiyasi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={handleContentClick}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Boshladik!</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ismingiz"
            className="email-input"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Telefon Raqam"
            className="email-input"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type='submit' className="subscribe-btn">Yuborish</button>
        </form>

        <p className="follow-text">Bizni kuzatib boring</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/zinnur_akademiyasi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@ZinNurAkademiyasi" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
          <a href="https://t.me/zinnur_akademiyasi" target="_blank" rel="noreferrer">
            <FaTelegram />
          </a>
          <a href="https://www.threads.com/@zinnur_akademiyasi" target="_blank" rel="noreferrer">
            <FaThreads />
          </a>
        </div>

        <div className="contact-info">
          <a href="tel:+998900482255" className='follow-text'> <p><strong>Telefon:</strong> +998 90 048 22 55 </p> </a>
          <a href="mailto:hello@example.com" className='follow-text'> <p><strong>Email:</strong> zinnurakademiyasi@gmail.com </p> </a>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;