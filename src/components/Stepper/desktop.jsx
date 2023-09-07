const DesktopStepper = ({ steps, activeStep, progress }) => {
  return (
    <div className='flex gap-6 w-full justify-center border-b py-6 border-[#122135CC]'>
      {steps.map((step, index) => {
        return (
          <div key={index} className='flex flex-col max-w-fit'>
            <div key={index} className='flex items-center w-full'>
              {index <= activeStep ? (
                index < activeStep ? (
                  <div
                    key={index}
                    className='flex items-center p-2 rounded-[32px] border-2 border-[#0084CB] bg-[#0084CB]'
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
                    className=' flex items-center p-2 rounded-[32px] border-2 border-[#0084CB] bg-[#0084cb14]'
                  >
                    <div className='w-8 h-8 bg-[#0084CB] rounded-full'></div>
                  </div>
                )
              ) : (
                <div
                  key={index}
                  className='w-12 h-12 flex items-center p-2 rounded-[32px] border-2 bg-[#12213566]'
                >
                  <div className='w-8 h-8 flex justify-center items-center'>
                    <span className='text-xl font-semibold text-white '>{index + 1}</span>
                  </div>
                </div>
              )}
              {index !== steps.length - 1 ? (
                <div className='bg-slate-300 w-full md:w-[140px] xl:w-[340px] h-1.5 ml-6 rounded-md'>
                  <div
                    style={{
                      width: `${index < activeStep ? 100 : progress}%`,
                      display: index > activeStep ? 'none' : 'block',
                    }}
                    className='bg-[#0084CB] w-1/2 h-1.5 rounded-md'
                  ></div>
                </div>
              ) : null}
            </div>
            <div>
              <h3 className='text-sm leading-5 lg:text-xl not-italic font-semibold text-foreground-2 '>
                {step}
              </h3>
              <h4 className='text-xs not-italic font-normal text-foreground-2 lg:font-medium lg:leading-7'>
                {index <= activeStep ? (index < activeStep ? 'Done' : 'In-Progress') : 'pending'}
              </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DesktopStepper;
