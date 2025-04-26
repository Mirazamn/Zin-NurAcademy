import './style.css'
import { useEffect } from 'react';

// Header.jsx
export function Header({ logo, openModal }) {
    useEffect(() => {
        let lastScrollTop = 0;
        const header = document.querySelector("header");
      
        const handleScroll = () => {
          const currentScroll = window.scrollY || document.documentElement.scrollTop;
      
          if (currentScroll === 0) {
            header.classList.remove("fixed", "hidden");
            lastScrollTop = 0;
            return;
          }
      
          if (currentScroll > lastScrollTop) {
            // Scroll down – hide header
            header.classList.remove("fixed");
            header.classList.add("hidden");
          } else if (currentScroll < lastScrollTop) {
            // Scroll up – show header
            header.classList.remove("hidden");
            header.classList.add("fixed");
          }
      
          lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        };
      
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      
    return (
        <header>
            <div className="container flex">
                <a href="#hero">
                    <img src={logo} alt="" />
                </a>

                <ul className="flex">
                    <a href="#contacts">
                        <li className="display-x h-li">Bog‘lanish</li>
                    </a>
                    <a href="#features">
                        <button className="display-x h-button">Biz Haqimizda</button>
                    </a>
                    <a onClick={openModal}>
                        <button className="display-x cta h-button">
                            <i className="fa-solid fa-rocket"></i>
                            Ro‘yxatdan o‘tish                        
                        </button>
                    </a>
                </ul>
            </div>
        </header>
    );
}