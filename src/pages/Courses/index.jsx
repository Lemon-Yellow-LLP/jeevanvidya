import Stepper from '@/components/Stepper';

export default function Courses() {
  const steps = ['Basic Details', 'Address Details', 'Other Details', 'Success'];

  return <Stepper steps={steps} buttonTitle='Save & Next' />;
}
