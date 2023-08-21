const Download = ({ fileImage, label, filesize, file, filename }) => {
  return (
    <div className='rounded-2xl p-6 bg-white w-[302px]'>
      <div className='pdf-gradient h-14 w-14 rounded-full relative'>
        <img
          src={fileImage}
          alt=''
          className='absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4'
        />
      </div>
      <h2 className='mt-3 font-semibold text-xl text-primary-black'>{label}</h2>
      <p className='mt-2 font-normal text-primary-black opacity-80'>File size: {filesize}</p>
      <a href={file} download={filename}>
        <svg
          className='mt-12'
          width='56'
          height='56'
          viewBox='0 0 56 56'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M28.0007 33.3359L21.334 26.6693L23.2007 24.7359L26.6673 28.2026V17.3359H29.334V28.2026L32.8007 24.7359L34.6673 26.6693L28.0007 33.3359ZM20.0007 38.6693C19.2673 38.6693 18.6393 38.4079 18.1167 37.8853C17.594 37.3626 17.3331 36.735 17.334 36.0026V32.0026H20.0007V36.0026H36.0007V32.0026H38.6673V36.0026C38.6673 36.7359 38.406 37.3639 37.8833 37.8866C37.3607 38.4093 36.7331 38.6702 36.0007 38.6693H20.0007Z'
            fill='#F09444'
          />
          <rect x='1' y='1' width='54' height='54' rx='7' stroke='#F09444' strokeWidth='2' />
        </svg>
      </a>
    </div>
  );
};

export default Download;
