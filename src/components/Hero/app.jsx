import { useState } from 'react'
import './style.css'
import '../../components/variable.css'
import '../../index.css'
import SubscribeModal from '../Modal/app'

import {Visuals
} from '../../asstes/plan'

function Hero(){
  const [isModalOpen, setModalOpen] = useState(false);

    return (
        <section className="hero" id='hero'>
          <div className="container flex">
            <div className="hero-txt">
              <h1 data-aos="fade-up" className='display-l'>
                Arab, Ingliz, Rus va Koreys tillarini biz bilan o‘rganing!
              </h1>
              <p data-aos="fade-up" data-aos-delay="100" className="body-l hero-p">
                Zin-Nur Akademiyasida tajribali o‘qituvchilar, 
                qulay darslar va bepul birinchi dars sizni kutmoqda!
              </p>
              
              <div className="buttons">
                {/* <a href=""> */}
                  <button
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="cta display-x"
                    onClick={() => setModalOpen(true)}
                  >
                    <i className="fa-solid fa-rocket"></i> Ro‘yxatdan o‘tish
                  </button>
                  <SubscribeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
                {/* </a> */}
    
                <a href="#features">
                  <button
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="display-x secondary"
                  >
                    Biz Haqimizda
                  </button>
                </a>

              </div>
            </div>
    
            <img data-aos="zoom-in" src={Visuals} alt="" />
          </div>
        </section>
      );
}


export default Hero;