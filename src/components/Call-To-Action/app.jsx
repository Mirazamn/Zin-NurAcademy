import { useState } from 'react'
import SubscribeModal from '../Modal/app'

import '../Hero/style.css'
import '../../components/variable.css'
import '../../index.css'
import './style.css'

import {CallToAction
} from '../../asstes/plan'


function CTA() {
  const [isModalOpen, setModalOpen] = useState(false);

    return (
        <section className="hero">
          <div className="container flex">
            <img data-aos="zoom-in-right" src={CallToAction} alt="" />
    
            <div data-aos="fade-left" className="hero-txt">
              <h1 className="display-l" id='second-hero'>Bugun kelajagingiz uchun birinchi qadamni tashlang.</h1>
              <p className="body-l">
               Arab, Ingliz, Rus yoki Koreys tilini o‘rganmoqchimisiz? Bepul birinchi darsga yoziling va o‘zingiz ishonch hosil qiling!
              </p>
              <div className="buttons">
                <a 
                    onClick={() => setModalOpen(true)}>
                  <button className="cta display-x">
                    Ro‘yxatdan o‘tish
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <SubscribeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </section>
    )
}


export default CTA;