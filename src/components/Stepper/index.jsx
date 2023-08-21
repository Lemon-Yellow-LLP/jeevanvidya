import { useEffect, useRef, useState } from 'react';

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    // console.log(stepNumber);

    while (count < newSteps.length) {
      // current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          pending: false,
          completed: true,
        };
        console.log(newSteps[count]);
        count++;
      }

      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          pending: false,
          completed: true,
        };
        count++;
      }

      // step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          pending: true,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    const stepState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        },
      ),
    );

    stepRef.current = stepState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={index != newStep.length - 1 ? 'w-full flex items-center' : 'flex items-center'}
      >
        <div className='relative flex flex-col items-center text-teal-600'>
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300
             h-12 w-12 flex justify-center items-center py-3 ${
               step.selected ? 'bg-[#0084CB] text-white font-bold border border-[#0084CB]' : ''
             } ${index <= step.selected ? 'bg-yellow-200' : null}`}
          >
            {step.completed ? <span className='text-white font-bold text-xl'></span> : index + 1}
          </div>
          <div
            className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${
              step.highlighted ? 'text-gray-900' : 'text-gray-400'
            }`}
          >
            {step.description}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
            step.completed ? 'border-[#0084CB]' : 'border-gray-300'
          }`}
        ></div>
      </div>
    );
  });

  return <div className='mx-4 p-4 flex justify-between items-center'>{displaySteps}</div>;
};

export default Stepper;
