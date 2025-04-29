import { useState } from 'react';
import SubscribeModal from '../Modal/app';

import './style.css'
import '../../components/variable.css'
import '../../index.css'


function Plans() {
  const [isModalOpen, setModalOpen] = useState(false);

    return (
        <section className="plan">
          <div className="container">
            <h1 className="display-m">O‘zingizga mos kursni tanlang</h1>
            <p className="body-m">
              Har bir kursda — sifatli ta'lim va ustoz yordami.
            </p>
    
            <div className="plan-cards flex">
              {/* Free Plan */}
              <div data-aos="fade-up" data-aos-delay="300" className="card">
                <h6 className="body-l">Rus Tili </h6>
                <h2><span className="display-l">399,000</span>/ oy</h2>
                <h4 className="body-m">Guruh bilan o‘qish</h4>
                <ul>
                  <li className="display-x"><i className="fa-solid fa-check"></i> 3 dars / hafta </li>
                  <li className="display-x"><i className="fa-solid fa-check"></i> Online darslar </li>
                  <li className="display-x"><i className="fa-solid fa-check"></i> Guruh bilan o‘qish </li>
                </ul>
                <a onClick={() => setModalOpen(true)}><button className="display-x">Boshlash</button></a>
              </div>
              {/* Free Plan */}
    
              {/* Professional Plan */}
              <div data-aos="fade-up" data-aos-delay="200" className="card">
                <h6 className="body-l">Ingiliz Tili</h6>
                <h2><span className="display-l">599,000</span>/ oy</h2>
                <h4 className="body-m">Guruh bilan o‘qish</h4>
                <ul>
                  <li className="display-x"><i className="fa-solid fa-check"></i> 4 dars / hafta </li>
                  <li className="display-x"><i className="fa-solid fa-check"></i> Sertifikat </li>
                  <li className="display-x"><i className="fa-solid fa-check"></i> Online + Offline </li>
                </ul>
                <a onClick={() => setModalOpen(true)}><button className="display-x">Boshlash</button></a>
              </div>
              {/* Professional Plan */}
    
              {/* Enterprise Plan */}
              <div data-aos="zoom-in" data-aos-delay="100" className="card enterprise">
                <h6 className="body-l">Arab Tili</h6>
                <h2><span className="display-l">999,000</span>/ oy</h2>
                <h4 className="body-m">Sertifikat + Test tayyorgarligi</h4>
                <ul>
                  <li className="display-x"><i className="fa-solid fa-check"></i> Shaxsiy mentor </li>
                  <li className="display-x"><i className="fa-solid fa-check"></i> Doimiy qo‘llab-quvvatlash </li>
                  <li className="display-x"><i className="fa-solid fa-check"></i> 5 dars / hafta </li>
                </ul>
                <a 
                    onClick={() => setModalOpen(true)}>
                  <button className="display-x flex">
                  Boshlash <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </a>
              </div>
              {/* Enterprise Plan */}

            </div>
          </div>
          <SubscribeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </section>
      );
}


export default Plans;