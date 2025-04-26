import { useState } from 'react'
import SubscribeModal from '../Modal/app'

import './style.css'
import '../../components/variable.css'
import '../../index.css'
import Card from './Card/app'



function Features() {
  const [isModalOpen, setModalOpen] = useState(false);

    return (
        <section className="features" id="features">
          <div className="container">
            <h1 className="display-m">Features</h1>
            <p className="body-m">
              These are just a few features you'll get using Anima Landing Page UI Kit.
            </p>
    
            <div className="feature-cards">

                <div data-aos="fade-up" data-aos-delay="100" className="feature-card">
                  <span className="Persimmon">
                    <i className="fa-solid fa-chalkboard-user"></i>
                  </span>
                  <h3 className="display-s">
                    Tajribali o‘qituvchilar
                  </h3>
                  <p className="body-m">
                  O‘rta va oliy ta’limdagi 15 yillik 
                  tajribaga ega ustozlar bilan darslar.
                    </p>
                  <a
                  onClick={() => setModalOpen(true)}>
                      <h6 className="flex display-x">
                          Batafsil
                          <i className="fa-solid fa-arrow-right"></i>
                      </h6>
                  </a>
                </div>

                <div data-aos="fade-up" data-aos-delay="200" className="feature-card">
                  <span className="Observatory">
                      <i className="fa-solid fa-check-double"></i>
                  </span>
                  <h3 className="display-s">Har qanday yosh uchun</h3>
                  <p className="body-m"> 4 yoshdan - 70 yoshgacha 
                  bo‘lganlar o’quvchilar uchun </p>
                  <a
                  onClick={() => setModalOpen(true)}>
                      <h6 className="flex display-x">
                          Batafsil
                          <i className="fa-solid fa-arrow-right"></i>
                      </h6>
                  </a>
                </div>


                <div data-aos="fade-up" data-aos-delay="300" className="feature-card">
                  <span className="Sweet-Corn">
                      <i className="fa-solid fa-cube"></i>
                  </span>
                  <h3 className="display-s">Online va offline darslar</h3>
                  <p className="body-m"> Istasangiz uyda, istasangiz 
                  markazda o‘qishingiz mumkin. </p>
                  <a
                  onClick={() => setModalOpen(true)}>
                      <h6 className="flex display-x">
                          Batafsil
                          <i className="fa-solid fa-arrow-right"></i>
                      </h6>
                  </a>
                </div>

            </div>
          </div>


          <SubscribeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </section>
    )
}


export default Features;