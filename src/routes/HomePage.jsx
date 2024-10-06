import {FaInstagram, FaFacebook, FaTiktok} from 'react-icons/fa6'
import AnimatedLayout from '../../animation/AnimatedLayout'

export default function HomePage() {
    return (
      <AnimatedLayout>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: 'url(./logo.png)',
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Yakında Kastamonu&apos;da!
              </h1>
              <p className="mb-5 flex flex-row justify-center">
                <FaInstagram className="h-10 w-10 m-2" />
                <FaFacebook className="h-10 w-10 m-2" />
                <FaTiktok className="h-10 w-10 m-2" />
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </AnimatedLayout>
    )
}