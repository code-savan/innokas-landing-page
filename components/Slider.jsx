import { InfiniteSlider } from '@/components/ui/infinite-slider';

export function Slider() {
  return (
    <InfiniteSlider gap={24} reverse>
      <img
          src='/one.png'
        alt='Apple Music logo'
        className='h-[60px] w-auto'
      />
      <img
        src='/one.png'
        alt='Chrome logo'
        className='h-[60px] w-auto'
      />
      <img
          src='/one.png'
        alt='Strava logo'
        className='h-[60px] w-auto'
      />
      <img
          src='/one.png'
        alt='Nintendo logo'
       className='h-[60px] w-auto'
      />
      <img
         src='/one.png'
        alt='Jquery logo'
        className='h-[60px] w-auto'
      />
      <img
         src='/one.png'
        alt='Prada logo'
        className='h-[60px] w-auto'
      />
    </InfiniteSlider>
  );
}
