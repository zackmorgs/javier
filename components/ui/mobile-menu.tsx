'use client'


import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'

import ReactGA from 'react-ga4';

import Link from 'next/link'
import { FiCalendar, FiPhone } from "react-icons/fi";

const GA_Stuff = {
  gtmId: 'G-VVRCVF2QG4'
}

ReactGA.initialize(GA_Stuff.gtmId);

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // Menu items
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Services', href: '/services' }
  ];

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  const handleCallClick = function (e: any) {
    // Send a custom event
    ReactGA.event({
      category: "conversion",
      action: "call",
      label: "navigation"
    });
  }

  return (
    <div id="nav-mobile" className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        {/* <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg> */}
        <div id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2 ">
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.href} className="flex w-full text-gray-600 hover:text-gray-900 py-2 justify-center" onClick={() => setMobileNavOpen(false)} aria-label={item.name}>
                    {item.name}
                  </Link>
                </li>
              )
            })}
            {/* <li className="border-t pt-3">
              <Link href="/book-appointment" className="block w-full py-2 text-center bg-black text-gray-50 hover:bg-black-900 rounded-md" onClick={() => setMobileNavOpen(false)}>
                <FiCalendar className="icon inline-block" /> Book an Appointment
              </Link>
            </li> */}
            <li className="border-t pt-3">
              <Link href="tel:+15073192140" className="block w-full py-2 text-center cta-call text-gray-50 hover:bg-black-900 rounded-md" onClick={handleCallClick} aria-label="Call Javier's Barbershop">
                <FiPhone className="icon inline-block" /> Call
              </Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  )
}
