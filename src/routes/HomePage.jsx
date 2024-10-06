import {FaInstagram, FaFacebook, FaTiktok} from 'react-icons/fa6'
import AnimatedLayout from '../../animation/AnimatedLayout'
import {Link} from 'react-router-dom'

export default function HomePage() {
    return (
      <AnimatedLayout>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: 'url(./wallpaper.png)',
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-white">
                Yakında Kastamonu&apos;da!
              </h1>
              <p className="mb-5 flex flex-row justify-center text-white">
                <a
                  target="_blank"
                  href={'https://www.instagram.com/romacoffeetea/'}
                >
                  <FaInstagram className="h-10 w-10 m-2" />
                </a>
                <FaFacebook className="h-10 w-10 m-2" />
                <FaTiktok className="h-10 w-10 m-2" />
              </p>
              <Link to={'/about'} className="btn bg-[#aaa57b] text-white">
                Hakkımızda
              </Link>
            </div>
          </div>
        </div>
      </AnimatedLayout>
    )
}