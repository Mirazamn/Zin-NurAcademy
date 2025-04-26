import './style.css'
import '../../components/variable.css'
import '../../index.css'

import {PhoneCall, EnvelopeSimple, twitter, behance, dribbble, instagram, UserImg} from '../../asstes/plan'




function Contacts() {
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
                    <a href="https://instagram.com" target='_blank'>
                      <img src={instagram} alt="" />
                    </a>
                    <a href="https://dribbble.com" target='_blank'>
                      <img src={dribbble} alt="" />
                    </a>
                    <a href="https://behance.net" target='_blank'>
                      <img src={behance} alt="" />
                    </a>
                    <a href="https://x.com" target='_blank'>
                      <img src={twitter} alt="" />
                    </a>
                  </div>
                </div>
              </div>
    
              {/* Right side: Contact form */}
              <form className="flex">
                <div data-aos="fade-up" className="field flex">
                  <label htmlFor="name">
                    <img src={UserImg} alt="" />
                  </label>
                  <input type="text" id="name" placeholder="Ismingiz" required />
                </div>
    
                <div data-aos="fade-up" data-aos-delay="100" className="field flex">
                  <label htmlFor="email">
                    <img src={EnvelopeSimple} alt="" />
                  </label>
                  <input type="number" className="body-m" id="email" placeholder="Telefon Raqam" required />
                </div>
    
                <a data-aos="zoom-in" data-aos-delay="200" href="#contacts">
                  <button className="display-x">Yuborish</button>
                </a>
              </form>
            </div>
          </div>
        </section>
      );
}


export default Contacts;  // export the component