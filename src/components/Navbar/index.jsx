import Logo from '@/assets/logo.svg';
import hamburger from '@/assets/hamburger.svg';
import profile from '@/assets/profile.svg';
import arrow from '@/assets/arrow.svg';
import borderCircle from '@/assets/border-ellipse.svg';
import herosectionLogo from '@/assets/100yrlogo.png';
import DownArrow from '@/assets/down-arrow.svg';
import crossBtn from '@/assets/cross-btn.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpened] = useState(false);

  const [isOpenDropDown, setIsOpenDrowDown] = useState(false);

  return (
    <header className='fixed top-0 z-[80] w-full'>
      <nav className='bg-accent-white shadow-secondary'>
        <div className='flex flex-col lg:flex-row items-center justify-between'>
          <div className='flex w-full justify-between px-4 py-3 md:px-6 xl:px-20 border-b border-solid border-[#8d8d8d] lg:border-none'>
            <img src={Logo} alt='JVMLogo' className='w-24 h-11 lg:w-[130px]' />
            <div className='' onClick={() => setIsOpened((prev) => !prev)}>
              {isOpen ? (
                <img src={crossBtn} alt='' className='lg:hidden' />
              ) : (
                <div className='lg:hidden flex justify-center items-center px-3 py-2 gap-4 rounded-[112px] border-2 border-[#1221353d]'>
                  <img src={hamburger} alt='' />
                  <img src={profile} alt='' />
                </div>
              )}
            </div>
          </div>
          {/* Mobile Navbar */}
          <div
            className={`w-full p-3 lg:flex lg:flex-row lg:items-center lg:p-0 xl:pr-20 lg:gap-5 transition-all duration-[2000ms] z-auto ${
              isOpen ? 'flex flex-col justify-between res-height_navbar' : 'hidden'
            }`}
            id='menu'
          >
            <ul className='w-full flex flex-col lg:flex-row gap-2 hide-scrollbar menu-items'>
              <li>
                <Link to='' className='block p-3 text-sm font-normal'>
                  About
                </Link>
              </li>
              <li>
                <Link to='/philosophy' className='block p-3 text-sm font-normal'>
                  Philosophy
                </Link>
              </li>
              <li>
                <Link to='' className='block p-3 text-sm font-normal'>
                  Courses
                </Link>
              </li>
              <li>
                <Link to='' className='block p-3 text-sm font-normal'>
                  Dnyanpeeth
                </Link>
              </li>
              <li>
                <Link to='' className='block p-3 text-sm font-normal'>
                  Welfare
                </Link>
              </li>
              <li>
                <Link to='' className='block p-3 text-sm font-normal'>
                  Publications
                </Link>
              </li>
              <li>
                <Link to='' className='block p-3 text-sm font-normal'>
                  Donation
                </Link>
              </li>
              <li className='relative'>
                <div
                  className='flex justify-between'
                  onClick={() => setIsOpenDrowDown((prev) => !prev)}
                >
                  <Link to='' className='block p-3 text-sm font-normal'>
                    More
                  </Link>
                  <img
                    src={DownArrow}
                    alt='down arrow'
                    className={`${isOpenDropDown ? 'rotate-180' : ''}`}
                  />
                </div>
                <ul
                  className={`pl-3 lg:w-[197px] lg:absolute lg:rounded-2xl lg:py-4 z-[90] bg-accent-white ${
                    isOpenDropDown ? 'xl:flex xl:flex-col' : 'hidden'
                  }`}
                >
                  <li className='py-3 text-sm'>Anugrah</li>
                  <li className='py-3 text-sm'>Volunteering</li>
                  <li className='py-3 text-sm'>Media</li>
                  <li className='py-3 text-sm'>Gallery</li>
                  <li className='py-3 text-sm'>Downloads</li>
                  <li className='py-3 text-sm'>Testimonial</li>
                  <li className='py-3 text-sm'>Contact </li>
                </ul>
              </li>
            </ul>
            <div className='pl-3 flex text-center border-t border-[#1221353d] lg:border-none'>
              <Link
                href=''
                className='text-sm px-6 py-[9px] xl:px-8 xl:py-[14px] w-full lg:text-base text-accent-white bg-accent-blue rounded-lg'
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section id='herosection' className={`w-full lg:block ${isOpen ? 'hidden' : 'block'}`}>
        <div className='relative overflow-hidden'>
          <div className='gradient-walker'></div>
          <div className='hero-gradient flex justify-between items-center w-full py-[6px] px-4 md:px-6 xl:px-20'>
            <div className='flex items-center gap-1 md:gap-6'>
              <img src={herosectionLogo} alt='' />
              <div className='flex flex-col'>
                <span className='text-accent-gold text-xs md:text-base lg:text-lg font-semibold'>
                  100 years of eminence
                </span>
                <p className='text-white text-[10px] md:text-xs lg:text-sm font-normal truncate ... w-[190px] md:w-[310px] xl:w-full'>
                  Remembering, honouring, and celebrating Satguru Shri Wamanrao Pai on his 100th
                  birth anniversary this year.
                </p>
              </div>
            </div>
            <div className='relative ml-auto'>
              <img src={borderCircle} alt="circle borde" className='rotateanimate' />
              <img
                src={arrow}
                className='w-3.5 h-3.5 lg:w-[16px] lg:h-[16px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
