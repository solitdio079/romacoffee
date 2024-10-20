import AnimatedLayout from "../../animation/AnimatedLayout";
import { FaMapLocation, FaEnvelope, FaWhatsapp, FaPhone, FaGlobe, FaInstagram } from 'react-icons/fa6'
import {Link} from 'react-router-dom'
//import {Link} from 'react-router-dom'
export default function ContactUs() {
    return (
      <AnimatedLayout>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: 'url(./wallpaper.png)',
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-neutral-content">
            <div className="card lg:card-side h-auto shadow-xl">
              <figure>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.573072880676!2d33.7746348!3d41.4267854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4084fb9d9bb94229%3A0xbadf45c91e458afd!2sRoma%20Coffee%20Tea!5e0!3m2!1sen!2str!4v1729418522822!5m2!1sen!2str" width="400" height="350" style={{border: 0}} allowfullscreen="" loading="lazy"x></iframe>
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title text-3xl">İletişim</h2>
                <p>
                  <ul className="menu flex flex-wrap  rounded-box">
                    <li>
                      <a>
                        <FaMapLocation className="h-5 w-5" />
                        Kuzeykent Mahallesi, Vali Aydın Arslan Caddesi, 37150
                        Kuzeykent/Kastamonu
                      </a>
                    </li>
                    <li>
                      <a href="mailto:romacoffeetea37@gmail.com">
                        <FaEnvelope className="h-5 w-5" />
                        romacoffeetea37@gmail.com
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://wa.me/905451751837">
                        <FaWhatsapp className="h-5 w-5" />
                        +90 546 836 13 26
                      </a>
                    </li>
                    <li>
                      <a>
                        <FaPhone className="h-5 w-5" />
                        +90 546 836 13 26
                      </a>
                    </li>

                    <li>
                      <Link to={'/'}>
                        <FaGlobe className="h-5 w-5" />
                        www.romacoffeetea.com
                      </Link>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/romacoffeetea/"
                      >
                        <FaInstagram className="h-5 w-5" />
                        Follow us on Instagram
                      </a>
                    </li>
                  </ul>
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedLayout>
    )
}