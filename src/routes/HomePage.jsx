//import {FaInstagram, FaFacebook} from 'react-icons/fa6'
import AnimatedLayout from '../../animation/AnimatedLayout'
//import {Link} from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
//import { useState } from 'react'
export default function HomePage() {
  
    return (
      <AnimatedLayout>
        <div
          className="flex-col min-h-screen font-sans"
          style={{
            backgroundImage: 'url(./hero2.jpg)',
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
                <span className="text-6xl">🐻☕🧸📋🧋🍪</span>
                
              </div>
            </div>
            <div className="w-full flex-col items-center justify-center h-1/2 lg:h-full lg:w-1/2">
              <div className="card mx-auto rounded-none card-bordered border-white bg-primary bg-opacity-20 backdrop-blur-md w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body">
                  <div className="form-control text-white">
                    <label className="label">
                      <span className="label-text text-white">Email</span>
                    </label>
                    <input
                      type="email"
                      className="input focus:border-white rounded-none bg-transparent border-white input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control text-white">
                    <label className="label">
                      <span className="label-text text-white">Password</span>
                    </label>
                    <input
                      type="password"
                      className="input focus:border-white rounded-none bg-transparent border-white input-bordered"
                      required
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary rounded-none text-white">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </AnimatedLayout>
    )
}