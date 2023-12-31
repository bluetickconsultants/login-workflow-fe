'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
import MobileMenu from './mobile-menu'
import useColorMode from '@/hooks/useColorMode'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import './toggle.css'

export default function Header() {

  const [top, setTop] = useState<boolean>(true)
  const [colorMode, setColorMode] = useColorMode()

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <>
      <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white dark:bg-gray-900 backdrop-blur-sm shadow-lg' : ''}`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Site branding */}
            <div className="shrink-0 mr-4">
              <Logo />
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link href="/signin" className="font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
                </li>
                <li>
                  <Link href="/signup" className="btn-sm text-gray-200 dark:bg-blue-600 dark:hover:bg-blue-700 bg-gray-900 hover:bg-gray-800 ml-3">
                    <span>Sign up</span>
                    <svg className="w-3 h-3 fill-current text-gray-400 dark:text-gray-200 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                    </svg>
                  </Link>

                </li>
                <li>
                  <div className="container">
                    <input type="checkbox" checked={colorMode === 'dark'} onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')} id="theme-toggle" />
                    <label htmlFor="theme-toggle"></label>
                  </div>
                </li>
              </ul>
            </nav>
            <MobileMenu />
          </div>
        </div>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        theme={colorMode}
        closeOnClick
        pauseOnHover
      />
    </>
  )
}
