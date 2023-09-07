import donationBannerImg from '@/assets/donation-banner.png';
import flowersectionImg from '@/assets/sectionvolunteerimg.png';

export const data = {
  banner: {
    title: 'Volunteering',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `,
    image: donationBannerImg,
  },
  section: {
    sectionImage: flowersectionImg,
    title: 'Volunteer for Jeevanvidya Mission',
    description: `Empower and enlighten yourself with variety of Jeevanvidya courses, curated carefully for all walks of life.`,
  },
  steps: ['Personal Details', 'Address details', 'Other details', 'Success'],
  email: 'jvmho@jeevanvidya.org',
  gender: [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
    { name: 'Other', value: 'other' },
  ],
  states: [
    { label: 'Andhra Pradesh', value: 'Andhra Pradesh' },
    { label: 'Assam', value: 'Assam' },
    { label: 'Bihar', value: 'Bihar' },
    { label: 'Chhattisgarh', value: 'Chhattisgarh' },
    { label: 'Goa', value: 'Goa' },
    { label: 'Gujarat', value: 'Gujarat' },
    { label: 'Haryana', value: 'Haryana' },
    { label: 'Himachal Pradesh', value: 'Himachal Pradesh' },
    { label: 'Jammu and Kashmir', value: 'Jammu and Kashmir' },
    { label: 'Jharkhand', value: 'Jharkhand' },
  ],
  districts: [
    { label: 'Anantapur', value: 'Anantapur' },
    { label: 'Guntur', value: 'Guntur' },
    { label: 'Krishna', value: 'krishna' },
    { label: 'Nellore', value: 'Nellore' },
    { label: 'Visakhapatnam', value: 'Visakhapatnam' },
  ],
  talukas: [
    { label: 'Anantapur', value: 'Anantapur' },
    { label: 'Guntur', value: 'Guntur' },
    { label: 'Krishna', value: 'krishna' },
    { label: 'Nellore', value: 'Nellore' },
    { label: 'Visakhapatnam', value: 'Visakhapatnam' },
  ],
};
