import { useState } from 'react'
import SubscribeModal from '../Modal/app'
import { FaArrowRight } from "react-icons/fa";


import './style.css'
import '../../components/variable.css'
import '../../index.css'

import {GetLandingImg
} from '../../asstes/plan'

function GetLanding() {
  const [isModalOpen, setModalOpen] = useState(false);

    return (
        <section className="banner">
          <div className="container flex">
    
            <div data-aos="fade-right" data-aos-delay="100" className="banner-txt">
              <h1 className="display-l">Kelajagingiz bugundan boshlanadi!</h1>
              <p>Til o‘rganishni orqaga surmang — Zin-Nur Akademiyasi sizni kutmoqda. Bepul birinchi darsga yoziling va farqni his eting!</p>
              <a onClick={() => setModalOpen(true)}>
                <button className="display-x flex">
                Ro‘yxatdan o‘tish <FaArrowRight />

                </button>
              </a>
            </div>
    
            <img data-aos="zoom-in" data-aos-delay="200" src={GetLandingImg} alt=""/>
            
          </div>
          <SubscribeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </section>
      );
}


export default GetLanding;  // export the component