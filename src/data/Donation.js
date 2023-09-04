import donationBannerImg from '@/assets/donation-banner.png';
import flowerSectionImg from '@/assets/section-flower.png';

export const data = {
  banner: {
    title: 'Donation',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `,
    image: donationBannerImg,
  },
  section: {
    sectionImage: flowerSectionImg,
    title: 'Donation for Jeevanvidya Mission',
    description: `Jeevanvidya is the science of life as well as the art of successful and harmonious living. Its major vision dwells on the Mindset Revolution. Its foremost and important aim is to imbibe the fact in our minds that, ‘You are the architect of your destiny.’ 

     Jeevanvidya Mission is a non-profit, educational, secular and social organization founded by Satguru Wamanrao Pai in 1955 to meet this vision by the divine philosophy that – the whole mankind must become happy and the whole nation must march on a successful track.`,
  },
  steps: ['Donation', 'Personal Details', 'Success'],
  amounts: [100, 200, 500, 1000, 2000, 5000],
  email: 'jvmho@jeevanvidya.org',
  gender: [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
    { name: 'Other', value: 'other' },
  ],
  JVFollower: [
    { name: 'Yes', value: 'true' },
    { name: 'No', value: 'false' },
  ],
  indianCitizen: [
    { name: 'Yes', value: 'yes' },
    { name: 'No', value: 'no' },
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
