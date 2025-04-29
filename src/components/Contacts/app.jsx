import './style.css'
import '../../components/variable.css'
import '../../index.css'

import {PhoneCall, EnvelopeSimple, twitter, behance, dribbble, instagram, UserImg, Call} from '../../asstes/plan'

import { useState } from 'react'
import { RiTelegram2Fill } from "react-icons/ri";
import { FaThreads } from "react-icons/fa6";


function Contacts() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
  
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
    };
    

    return (
        <section className="contacts" id="contacts">
          <div className="container">
            <h1 className="display-m">Biz bilan bog‘laning</h1>
            <p className="body-m">
              Savollaringiz bormi? Quyidagi forma orqali biz bilan bog‘laning yoki to‘g‘ridan-to‘g‘ri qo‘ng‘iroq qiling.
            </p>
    
            <div className="wraper flex">
              {/* Left side: Contact info and social media */}
              <div className="social flex">
                <div className="contact-details">
                  <a href="tel:+998900482255">
                    <h2 data-aos="fade-right" data-aos-delay="100" className="body-m flex">
                      <img src={PhoneCall} alt="" /> +998 90 048 22 55
                    </h2>
                  </a>

                  <a href="mailto:zinnurakademiyasi@gmail.com">
                    <h2 data-aos="fade-right" data-aos-delay="200" className="body-m flex">
                      <img src={EnvelopeSimple} alt="" /> zinnurakademiyasi@gmail.com
                    </h2>
                  </a>

                </div>
    
                <div data-aos="fade-right" data-aos-delay="300" className="social-media flex">
                  <h3 className="display-xs">Ijtimoiy Tarmoqlar</h3>
                  <div className="social-links flex">
                    <a href="
                    https://www.instagram.com/zinnur_akademiyasi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw== 
                    " target='_blank'>
                      <img src={instagram} alt="" />
                    </a>
                    <a href="https://www.youtube.com/@ZinNurAkademiyasi" target='_blank'>
                      <img src={dribbble} alt="" />
                    </a>
                    <a href="https://t.me/zinnur_akademiyasi" target='_blank'>
                      <RiTelegram2Fill className='social-icon'/>
                    </a>
                    <a href="https://www.threads.com/@zinnur_akademiyasi" target='_blank'>
                      <FaThreads className='social-icon'/>
                    </a>
                  </div>
                </div>
              </div>
    
              {/* Right side: Contact form */}
              <form onSubmit={handleSubmit} className="flex">
                <div data-aos="fade-up" className="field flex">
                  <label htmlFor="name">
                    <img src={UserImg} alt="" />
                  </label>
                  <input type="text" id="name" placeholder="Ismingiz" onChange={(e) => setName(e.target.value)} required />
                </div>
    
                <div data-aos="fade-up" data-aos-delay="100" className="field flex">
                  <label htmlFor="email">
                    <img src={Call} alt="" />
                  </label>
                  <input type="number" className="body-m" id="email" placeholder="Telefon Raqam" onChange={(e) => setPhone(e.target.value)} required />
                </div>

                <button type="submit" className="display-x" data-aos="zoom-in" data-aos-delay="200">Yuborish</button>
              </form>
            </div>
          </div>
        </section>
      );
}


export default Contacts;  // export the component