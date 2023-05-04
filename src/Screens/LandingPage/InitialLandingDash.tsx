import { ReactComponent as LandingCut } from '../../Assets/Images/landing-cut.svg';
import { ReactComponent as SpaceBG } from '../../Assets/Images/space-tr-bg.svg';
import Astronaut from '../../Assets/Images/astronaut2.png';
import Moon from '../../Assets/Images/moon-landing.png';
import Image from '../../Components/Image';
import { memo } from 'react';
import useWindowDimensions from '../../Hooks/useWindowDimensions';

const InitialLandingDash = () => {

  const { isMedium, windowDimensions: { height: screenHeight, width: screenWidth } } = useWindowDimensions()

  //calculating the image height for precise positioning, due to scaling in small screen laptops
  const imageSizeInPx = (size: number) => `${(size)}px`
  const imageByHeight = (percent: number) => imageSizeInPx((screenHeight) * percent)
  const imageByWidth = (percent: number) => imageSizeInPx((screenWidth) * percent)

  return (
    <div className='h-[92vh] w-full flex flex-1 items-center justify-start lg:justify-center  relative overflow-x-hidden overflow-clip'>
      <SpaceBG className='absolute w-full h-full z-10  select-none' />
      <LandingCut className='absolute -bottom-[10vh] right-0 -z-0 opacity-30 animate-bump-out-in-right select-none' height={imageByHeight(1)} />
      <Image src={Moon} alt="Moon" className='animate-bump-out-in-left absolute top-0 lg:top-[5vh] -left-[15vw] select-none z-20' loading='eager' height={imageByWidth(0.35)} width={imageByWidth(0.35)} />
      <Image src={Astronaut} alt="Astronaut" className='absolute -bottom-[5rem] right-0 animate-bump-out-in-right select-none z-20' loading='eager' width={imageByWidth(isMedium ? 2 : 0.4)} />
      <div className="px-[10%] z-40 flex items-center justify-start">
        <span className="text-5xl md:text-7xl font-light md:leading-[6rem] md:text-center animate-bump-out-in-up  select-none">The future
          <br />
          <span >is <span className="font-semibold">here</span></span>
        </span>
      </div>
    </div>
  )
}

export default memo(InitialLandingDash)