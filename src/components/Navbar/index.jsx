import Logo from '@/assets/logo.svg';
import hamburger from '@/assets/hamburger.svg';
import profile from '@/assets/profile.svg';
import arrow from '@/assets/arrow.svg';
import borderCircle from '@/assets/border-ellipse.svg';
import herosectionLogo from '@/assets/hundreadyear.svg';
import DownArrow from '@/assets/down-arrow.svg';
import crossBtn from '@/assets/cross-btn.png';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const location = useLocation();

  const [isOpen, setIsOpened] = useState(false);
  const [isOpenDropDown, setIsOpenDrowDown] = useState(false);

  return (
    <header className='sticky top-0 z-[999] w-full'>
      <nav className='bg-accent-white shadow-secondary px-4 py-3 md:px-8 lg:px-20 lg:py-[11px]'>
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
            <ul className='w-full flex flex-col lg:flex-row gap-2 hide-scrollbar menu-items'>
              <li>
                <NavLink
                  to='/about'
                  className={`block p-3 text-sm font-normal ${
                    location.pathname === '/about' ? 'active-link' : ''
                  }`}
                  onClick={() => setIsOpened((prev) => !prev)}
                >
                  About
                </NavLink>
              </li>
              <li className=''>
                <NavLink
                  to='/philosophy'
                  className={`block p-3 text-sm font-normal ${
                    location.pathname === '/philosophy' ? 'active-link' : ''
                  }`}
                  onClick={() => setIsOpened((prev) => !prev)}
                >
                  Philosophy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/courses'
                  className={`block p-3 text-sm font-normal ${
                    location.pathname === '/courses' ? 'active-link' : ''
                  }`}
                  onClick={() => setIsOpened((prev) => !prev)}
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/dnyanpeeth'
                  className={`block p-3 text-sm font-normal ${
                    location.pathname === '/dnyanpeeth' ? 'active-link' : ''
                  }`}
                  onClick={() => setIsOpened((prev) => !prev)}
                >
                  Dnyanpeeth
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/welfare'
                  className={`block p-3 text-sm font-normal ${
                    location.pathname === '/welfare' ? 'active-link' : ''
                  }`}
                  onClick={() => setIsOpened((prev) => !prev)}
                >
                  Welfare
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/publications'
                  className={`block p-3 text-sm font-normal ${
                    location.pathname === '/publications' ? 'active-link' : ''
                  }`}
                  onClick={() => setIsOpened((prev) => !prev)}
                >
                  Publications
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/donation'
                  className={`block p-3 text-sm font-normal ${
                    location.pathname === '/donation' ? 'active-link' : ''
                  }`}
                  onClick={() => setIsOpened((prev) => !prev)}
                >
                  Donation
                </NavLink>
              </li>
              <li className='relative' onClick={() => setIsOpenDrowDown((prev) => !prev)}>
                <NavLink
                  className={`flex p-3 text-sm font-normal ${
                    location.pathname === '/anugrah' ||
                    location.pathname === '/volunteering' ||
                    location.pathname === '/media-press' ||
                    location.pathname === '/download' ||
                    location.pathname === '/testimonial' ||
                    location.pathname === '/contact'
                      ? 'active-link'
                      : ''
                  }`}
                >
                  More
                  <img
                    src={DownArrow}
                    alt='down arrow'
                    className={`${isOpenDropDown ? 'rotate-180' : ''}`}
                  />
                </NavLink>
                <ul
                  className={`pl-3 lg:w-[197px] lg:absolute lg:rounded-2xl lg:py-4 z-[90] bg-accent-white ${
                    isOpenDropDown ? 'xl:flex xl:flex-col' : 'hidden'
                  }`}
                >
                  <li className=''>
                    <NavLink
                      to='/anugrah'
                      className={`block p-3 text-sm font-normal ${
                        location.pathname === '/anugrah' ? 'active-link' : ''
                      }`}
                      onClick={() => setIsOpened((prev) => !prev)}
                    >
                      Anugrah
                    </NavLink>
                  </li>
                  <li className=''>
                    <NavLink
                      to='/volunteering'
                      className={`block p-3 text-sm font-normal ${
                        location.pathname === '/volunteering' ? 'active-link' : ''
                      }`}
                      onClick={() => setIsOpened((prev) => !prev)}
                    >
                      Volunteering
                    </NavLink>
                  </li>
                  <li className=''>
                    <NavLink
                      to='/media-press'
                      className={`block p-3 text-sm font-normal ${
                        location.pathname === '/media-press' ? 'active-link' : ''
                      }`}
                      onClick={() => setIsOpened((prev) => !prev)}
                    >
                      Media & Press release
                    </NavLink>
                  </li>
                  <li className=''>
                    <NavLink
                      to='/download'
                      className={`block p-3 text-sm font-normal ${
                        location.pathname === '/download' ? 'active-link' : ''
                      }`}
                      onClick={() => setIsOpened((prev) => !prev)}
                    >
                      Downloads
                    </NavLink>
                  </li>
                  <li className=''>
                    <NavLink
                      to='/testimonial'
                      className={`block p-3 text-sm font-normal ${
                        location.pathname === '/testimonial' ? 'active-link' : ''
                      }`}
                      onClick={() => setIsOpened((prev) => !prev)}
                    >
                      Testimonial
                    </NavLink>
                  </li>
                  <li className=''>
                    <NavLink
                      to='/contact'
                      className={`block p-3 text-sm font-normal ${
                        location.pathname === '/contact' ? 'active-link' : ''
                      }`}
                      onClick={() => setIsOpened((prev) => !prev)}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            <div className='pl-3 flex text-center border-t border-[#1221353d] lg:border-none'>
              <NavLink
                href=''
                className='text-sm px-6 py-[9px] xl:px-8 xl:py-[14px] w-full lg:text-base text-accent-white bg-accent-blue rounded-lg'
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <section id='herosection' className='hidden lg:block w-full'>
        <div className='relative overflow-hidden'>
          <div className='gradient-walker'></div>
          <div className='hero-gradient flex justify-between items-center w-full py-[6px] px-4 md:px-6 xl:px-20'>
            <div className='flex items-center gap-1 md:gap-6'>
              <img src={herosectionLogo} alt='' className='w-full xl:w-[100px]' />
              <div className='flex flex-col'>
                <span className='text-accent-gold text-lg font-semibold'>
                  100 years of eminence
                </span>
                <p className='text-white text-[10px] md:text-xs lg:text-sm font-normal truncate ... w-[190px] md:w-[310px] xl:w-full'>
                  Remembering, honouring, and celebrating Satguru Shri Wamanrao Pai on his 100th
                  birth anniversary this year.
                </p>
              </div>
            </div>
            <div className='relative ml-auto cursor-pointer'>
              <img src={borderCircle} alt='circle borde' className='rotateanimate' />
              <img
                src={arrow}
                className='w-[45%] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
