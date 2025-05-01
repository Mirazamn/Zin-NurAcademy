import { useState } from 'react'
import SubscribeModal from '../Modal/app'

import { FaArrowRightLong } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";
import { BiCube, BiSolidCube } from "react-icons/bi";


import './style.css'
import '../../components/variable.css'
import '../../index.css'
import Card from './Card/app'





function Features() {
  const [isModalOpen, setModalOpen] = useState(false);

    return (
        <section className="features" id="features">
          <div className="container">
            <h1 className="display-m">Nima uchun ZIN-NUR Akademiyasi?</h1>
            <p className="body-m">
              Ta’lim — bu sizga investitsiya. Zin-Nur Akademiyasi bilan uni eng to‘g‘ri joyda boshlang!
            </p>
    
            <div className="feature-cards">

                <div data-aos="fade-up" data-aos-delay="100" className="feature-card">
                  <span className="Persimmon">
                    <FaChalkboardTeacher />
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
                          <FaArrowRightLong />
                      </h6>
                  </a>
                </div>

                <div data-aos="fade-up" data-aos-delay="200" className="feature-card">
                  <span className="Observatory">
                      <FaCheckDouble />
                  </span>
                  <h3 className="display-s">Har qanday yosh uchun</h3>
                  <p className="body-m"> 4 yoshdan - 70 yoshgacha 
                  bo‘lganlar o’quvchilar uchun </p>
                  <a
                  onClick={() => setModalOpen(true)}>
                      <h6 className="flex display-x">
                          Batafsil
                          <FaArrowRightLong />
                      </h6>
                  </a>
                </div>


                <div data-aos="fade-up" data-aos-delay="300" className="feature-card">
                  <span className="Sweet-Corn">
                      <BiSolidCube />
                  </span>
                  <h3 className="display-s">Offline va Online darslar</h3>
                  <p className="body-m"> Istasangiz uyda, istasangiz 
                  markazda o‘qishingiz mumkin. </p>
                  <a
                  onClick={() => setModalOpen(true)}>
                      <h6 className="flex display-x">
                          Batafsil
                          <FaArrowRightLong />
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