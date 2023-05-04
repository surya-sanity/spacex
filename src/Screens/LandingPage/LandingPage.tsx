import { ReactComponent as LandingCut } from '../../Assets/Images/landing-cut.svg';
import { ReactComponent as SpaceBG } from '../../Assets/Images/space-tr-bg.svg';
import Astronaut from '../../Assets/Images/astronaut2.png';
import Moon from '../../Assets/Images/moon-landing.png';
import Image from '../../Components/Image';

function LandingPage() {

  return (
    <div className='self-center w-full'>
      <div className='h-[92vh] w-full flex flex-1 items-center justify-start lg:justify-center  relative overflow-x-hidden overflow-clip'>
        <SpaceBG className='absolute w-full h-full z-10  select-none' />
        <LandingCut className='absolute -bottom-10 right-0 -z-0 h-[50rem] md:h-auto opacity-30 animate-bump-out-in-right select-none' />
        <Image src={Moon} alt="Moon" className='animate-bump-out-in-left absolute top-0 lg:top-[8rem] -left-20 lg:-left-80 h-[10rem] w-[10rem] lg:h-[40rem] lg:w-[40rem]  select-none' loading='eager' />
        <Image src={Astronaut} alt="Astronaut" className='absolute -bottom-10 right-0 animate-bump-out-in-right select-none z-20' loading='eager' />
        <div className="px-[10%] z-40 flex items-center justify-start">
          <span className="text-5xl md:text-7xl font-light md:leading-[6rem] md:text-center animate-bump-out-in-up  select-none">The future
            <br />
            <span >is <span className="font-semibold">here</span></span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default LandingPage