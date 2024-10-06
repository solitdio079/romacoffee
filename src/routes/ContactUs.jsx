import AnimatedLayout from "../../animation/AnimatedLayout";
import { FaMapLocation, FaEnvelope, FaWhatsapp, FaPhone, FaGlobe } from 'react-icons/fa6'
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
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.560615442844!2d33.77188237628056!3d41.42705577129489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4084fbfc889dcb07%3A0xda9d34290d72d27c!2sLavinia%20Waffle%20%26%20Chocolate%20Kastamonu!5e0!3m2!1sen!2str!4v1728237668150!5m2!1sen!2str"
                  width="400"
                  height="350"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title text-3xl">Contact Us</h2>
                <p>
                  <ul className="menu flex flex-wrap  rounded-box">
                    <li>
                      <a>
                        <FaMapLocation className="h-5 w-5" />
                        Kuzeykent, Yenişehir Sitesi 8 A D:1, 37150 Kastamonu
                        Merkez/Kastamonu
                      </a>
                    </li>
                    <li>
                      <a>
                        <FaEnvelope
                          href="mailto:info@romacoffeetea.com"
                          className="h-5 w-5"
                        />
                        info@romacoffeetea.com
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://wa.me/905451751837">
                        <FaWhatsapp className="h-5 w-5" />
                        +90 545 175 18 37
                      </a>
                    </li>
                    <li>
                      <a>
                        <FaPhone className="h-5 w-5" />
                        +90 534 454 00 00
                      </a>
                    </li>

                    <li>
                      <Link to={'/'}>
                        <FaGlobe className="h-5 w-5" />
                        www.romacoffeetea.com
                      </Link>
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