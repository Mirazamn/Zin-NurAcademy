import './style.css'
import '../../components/variable.css'
import '../../index.css'

import {Youtube, Instagram, Github, Linkedin
} from '../../asstes/plan'


function Footer() {
    return (
        <footer>
          <div className="container flex">
            <h5 className="body-s">© Desinged by Anima  ||  Powered By Mirazam</h5>
            <div className="f-social">
              <a href="https://www.youtube.com/" target='_blank'>
                <img src={Youtube} alt="" />
              </a>
              <a href="https://www.instagram.com/" target='_blank'>
                <img src={Instagram} alt="" />
              </a>
              <a href="https://www.telegram.org/" target='_blank'>
                <img src={Github} alt="" />
              </a>
              <a href="https://www.threads.com/" target='_blank'>
                <img src={Linkedin} alt="" />
              </a>
            </div>
          </div>
        </footer>
      );
}


export default Footer;