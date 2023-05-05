import { ReactComponent as LandingCut } from '../../Assets/Images/landing-cut.svg';
import { ReactComponent as SpaceBG } from '../../Assets/Images/space-tr-bg.svg';
import Astronaut from '../../Assets/Images/astronaut2.png';
import Moon from '../../Assets/Images/moon-landing.png';
import Image from '../../Components/Image';
import useWindowDimensions from '../../Hooks/useWindowDimensions';

interface InitialLandingDashPropType {
  triggerScroll: () => void
}

const InitialLandingDash = (props: InitialLandingDashPropType) => {
  const { triggerScroll } = props

  const { windowDimensions: { height: screenHeight, width: screenWidth } } = useWindowDimensions()

  //calculating the image height for precise positioning, due to scaling in small screen laptops
  const imageSizeInPx = (size: number) => `${(size)}px`
  const imageByHeight = (percent: number) => imageSizeInPx((screenHeight) * percent)
  const imageByWidth = (percent: number) => imageSizeInPx((screenWidth) * percent)

  const handleViewClick = () => triggerScroll()

  return (
    <div className='h-[92vh] w-full flex flex-1 items-center justify-start lg:justify-center  relative overflow-x-hidden overflow-clip'>
      <SpaceBG className='absolute w-full h-full z-10  select-none' />
      <LandingCut className='absolute -bottom-[5rem] right-0 -z-0 opacity-30 animate-bump-out-in-right select-none' />
      <Image src={Moon} alt="Moon" className='animate-bump-out-in-left absolute top-0 lg:top-[5vh] -left-[15vw] select-none z-20' loading='eager' height={imageByWidth(0.35)} width={imageByWidth(0.35)} />
      <Image src={Astronaut} alt="Astronaut" className='absolute -bottom-[5rem] right-0 animate-bump-out-in-right select-none z-20' loading='eager' height={imageByWidth(0.4)} />
      <div className="px-[5%] z-40 flex flex-col gap-y-5 items-start md:items-center justify-start animate-bump-out-in-up">
        <span className="text-5xl md:text-7xl font-light md:leading-[6rem] md:text-center select-none">The future
          <br />
          <span >is <span className="font-semibold">here</span></span>
        </span>
        <div
          role='button'
          onClick={handleViewClick}
          className="animate-pulse px-3 py-2 border-dark dark:border-light  border-[1px] rounded-sm">
          View latest events
        </div>
      </div>
    </div>
  )
}

export default InitialLandingDash