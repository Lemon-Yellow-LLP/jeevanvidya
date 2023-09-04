import Logo from '@/assets/logo.svg';
import hamburger from '@/assets/hamburger.svg';
import profile from '@/assets/profile.svg';
import arrow from '@/assets/arrow.svg';
import herosectionLogo from '@/assets/100yrlogo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  let navLinks = [
    { name: 'About', link: '/about' },
    { name: 'Philosophy' },
    { name: 'Courses' },
    { name: 'Dnyanpeeth', link: '/dnyanpeeth' },
    { name: 'Welfare', link: '/welfare' },
    { name: 'Publications' },
    { name: 'Donation', link: '/donation' },
    { name: 'More' },
  ];

  const [isOpen, setIsOpened] = useState(false);

  return (
    <header className='sticky top-0 z-[999] w-full'>
      <nav className='bg-accent-white shadow-secondary px-4 py-3 md:px-8 lg:px-20 lg:py-[11px]'>
        <div className='flex flex-col lg:flex-row items-center justify-between'>
          <div className='flex w-full justify-between'>
            <img src={Logo} alt='JVMLogo' />
            <div
              onClick={() => setIsOpened((prev) => !prev)}
              className='lg:hidden flex justify-center items-center px-3 py-2 gap-4 rounded-[112px] border-2 border-[#1221353d]'
            >
              <img src={hamburger} className='cursor-pointer' id='menu-btn' alt='Hamburger Menu' />
              <img src={profile} alt='profile icon' />
            </div>
          </div>
          {/* Mobile Navbar */}
          {isOpen && (
            <div
              className='mt-3 w-full lg:flex lg:items-center transition-all duration-[2000ms] z-auto'
              id='menu'
            >
              <ul className='flex flex-col gap-2'>
                {navLinks.map((item) => {
                  return (
                    <li key={item.name}>
                      <Link to={item.link} className='block p-3 text-sm font-normal'>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className='flex justify-center items-center w-full rounded-lg text-[#F5F5F5] md:w-[92px] h-[47px] bg-[#F09444]'>
                <Link href='' className='text-base py-6 px-[14px]'>
                  Login
                </Link>
              </div>
            </div>
          )}
          {/* Desktop Navbar */}
          <div
            className='hidden mt-3 lg:flex lg:items-center transition-all duration-[2000ms] z-auto'
            id='menu'
          >
            <ul className='flex flex-col md:flex-row md:justify-between gap-2'>
              {navLinks.map((item) => {
                return (
                  <li key={item.name}>
                    <Link to={item.link} className='block p-3 text-sm font-normal'>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className='flex justify-center items-center w-full rounded-lg text-[#F5F5F5] md:w-[92px] h-[47px] bg-[#F09444]'>
              <Link href='' className='text-base py-6 px-[14px]'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section id='herosection' className='hidden lg:block w-full'>
        <div className='relative overflow-hidden'>
          <div className='gradient-walker'></div>
          <div className='hero-gradient flex justify-between items-center w-full py-[6px] px-4 md:px-20'>
            <div className='flex items-center gap-6'>
              <img src={herosectionLogo} alt='' />
              <div className='flex flex-col'>
                <span className='text-accent-gold text-lg font-semibold'>
                  100 years of eminence
                </span>
                <span className='text-white text-sm font-normal'>
                  Remembering, honouring, and celebrating Satguru Shri Wamanrao Pai on his 100th
                  birth anniversary this year.
                </span>
              </div>
            </div>
            <div className='relative ml-auto'>
              <div className='w-10 h-10 border-dashed border-[3px] rounded-full flex justify-center items-center rotateanimate'></div>
              <img
                src={arrow}
                className='w-3 h-3 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
