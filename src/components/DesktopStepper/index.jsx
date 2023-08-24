const DesktopStepper = ({ steps, activeStep }) => {
  return (
    <div className='hidden md:flex items-center justify-around'>
      {steps.map((step, index) => {
        return (
          <div key={index} className='flex flex-col items-center gap-4'>
            {index <= activeStep ? (
              index < activeStep ? (
                <div
                  key={index}
                  className='w-12 h-12 flex items-center p-2 rounded-[32px] border-2 border-[#0084CB] bg-[#0084CB]'
                >
                  <div className='w-8 h-8'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                      fill='none'
                    >
                      <path
                        d='M11.6271 20.342L5.93746 14.952L4 16.7745L11.6271 24L28 8.48918L26.0762 6.66666L11.6271 20.342Z'
                        fill='#F5F5F5'
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className='w-12 h-12 flex items-center p-2 rounded-[32px] border-2 border-[#0084CB] bg-[#0084cb14]'
                >
                  <div className='w-8 h-8 bg-[#0084CB] rounded-full'></div>
                </div>
              )
            ) : (
              <div
                key={index}
                className='w-12 h-12 flex items-center p-2 rounded-[32px] border-2 bg-[#12213566]'
              >
                <div className='w-8 h-8 flex justify-center text-center'>
                  <span className='text-xl font-semibold text-white'>{index + 1}</span>
                </div>
              </div>
            )}
            <div className='flex flex-col text-center'>
              <span>{step}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DesktopStepper;
