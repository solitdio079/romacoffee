//import {FaInstagram, FaFacebook} from 'react-icons/fa6'
import AnimatedLayout from '../../animation/AnimatedLayout'
//import {Link} from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
//import { useState } from 'react'
import { towns } from './tukey'
import { useEffect } from 'react'
import { useFetcher } from 'react-router-dom'
import toast from 'react-hot-toast'
//import Mask from '../../components/Mask'
import 'photoswipe/dist/photoswipe.css'

//import { Gallery, Item } from 'react-photoswipe-gallery'

//import { images } from '../../utils/images'

import { images } from '../../utils/images'
import Contact from '../../components/Contact'


export async function action({ request }) {
  const formData = await request.formData()

  const bodyObject = Object.fromEntries(formData)
  bodyObject.town = towns.filter((item) => item.id === bodyObject.town)[0].name

  try {
    const req = await fetch('https://romacoffeeserver.onrender.com/franchise', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyObject),
    })

    const response = await req.json()
    return response
  } catch (error) {
    return {error: error.message}
  }
}

export default function HomePage() {
  //const [selectedTown, setSelectedTown] = useState('37')
  const fetcher = useFetcher()

  useEffect(() => {
    const toastOptions = { duration: 5000 }
    
    fetcher.data ? fetcher.data.msg ? toast.success(fetcher.data.msg, toastOptions): toast.error(fetcher.data, toastOptions):''
  })
    return (
      <AnimatedLayout>
        <div
          className="flex-col min-h-96 font-sans"
          style={{
            backgroundImage: 'url(./hero1.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="navbar w-full bg-transparent text-white  backdrop-blur-lg">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a>Homepage</a>
                  </li>
                  <li>
                    <a>Portfolio</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-center">
              <a className="btn btn-ghost text-xl">
                <img src="./logo.png" className="w-16 lg:w-20" />
              </a>
            </div>
            <div className="navbar-end">
              <button className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center text-center p-5 lg:p-10 lg:justify-start items-center text-white lg:flex-row my-5">
            <div className="flex-col h-96 w-full lg:w-1/2">
              <p className="text-lg mt-5 text-primary">Hoş Geldiniz</p>
              <TypeAnimation
                sequence={[
                  'Roma Coffee Tea', // Types 'One'
                  1000, // Waits 1s

                  'Vivo Pro Capulus', // Deletes 'One' and types 'Two'
                  2000, // Waits 2s

                  () => {
                    console.log('Sequence completed')
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{
                  whiteSpace: 'pre-line',
                  color: '#fff',
                  fontSize: '4em',
                  display: 'inline-block',
                  fontWeight: 700,
                }}
              />
              <div className="flex-col">
                <span
                  className="hidden text-lg lg:block"
                  style={{
                    color: '#fff',

                    fontWeight: 700,
                  }}
                >
                  #coffee #kastamonu #fun
                </span>
                <span className="text-4xl">🏛️🧸🥐☕🍪</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center p-10">
          <section className="mb-5 mt-10 bg-dark">
            <div className="container">
              <span className="mb-4 block text-base font-semibold text-primary">
                Roma Coffee Tea
              </span>
              <h2 className="mb-6 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px] dark:text-white">
                Galerimiz
              </h2>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                adiqua minim veniam quis nostrud exercitation ullamco
              </p>
              <div className="break-inside-avoid gap-8 columns-2 lg:columns-3">
                {images.map((item) => (
                  <div
                    key={item.src}
                    className="mb-8 overflow-hidden rounded-xl"
                  >
                    <img
                      src={item.src}
                      alt="gallery image"
                      className="w-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
          <Contact />
        </div>
      </AnimatedLayout>
    )
}