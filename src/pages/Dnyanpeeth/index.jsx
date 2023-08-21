import HeroBanner from '@/components/HeroBanner';
import DnyanpeethBanner from '@/assets/Dnyanpeeth-banner.png';

const Dnyanpeeth = () => {
  return (
    <div>
      <HeroBanner
        bannerImg={DnyanpeethBanner}
        bannerTitle='Dnyanpeeth'
        bannerDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
      />
    </div>
  );
};

export default Dnyanpeeth;
