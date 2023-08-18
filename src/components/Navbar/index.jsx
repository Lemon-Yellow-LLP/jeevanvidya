import Logo from '@/assets/logo.svg';
import hamburger from '@/assets/hamburger.svg';
import profile from '@/assets/profile.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  let navLinks = [
    { name: 'About', link: '/about' },
    { name: 'Philosophy' },
    { name: 'Courses' },
    { name: 'Dnyanpeeth' },
    { name: 'Welfare' },
    { name: 'Publications' },
    { name: 'Donation' },
    { name: 'More' },
  ];

  const [isOpen, setIsOpened] = useState(false);
  return (
    <header className='fixed top-0 w-full'>
      <nav className='bg-dark-white shadow-secondary px-4 py-3 md:px-8 lg:px-20 lg:py-[11px]'>
        <div className='flex items-center justify-between'>
          <div>
            <img src={Logo} alt='JVMLogo' />
          </div>
          <div
            onClick={() => setIsOpened((prev) => !prev)}
            className='lg:hidden flex justify-center items-center px-3 py-2 gap-4 rounded-[112px] border-2 border-[#1221353d]'
          >
            <img src={hamburger} className='cursor-pointer' id='menu-btn' alt='Hamburger Menu' />
            <img src={profile} alt='profile icon' />
          </div>
          {isOpen && (
            <div
              className='mt-3 w-full lg:flex lg:items-center transition-all duration-[2000ms] z-auto'
              id='menu'
            >
              <ul className='flex flex-col md:flex md:justify-between gap-2'>
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
          <div
            className='mt-3 w-full lg:flex lg:items-center transition-all duration-[2000ms] z-auto'
            id='menu'
          >
            <ul className='flex flex-col md:flex md:justify-between gap-2'>
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

      <section id='hero-gradient'></section>
    </header>
  );
}
