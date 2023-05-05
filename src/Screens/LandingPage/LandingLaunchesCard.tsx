import Button from "../../Components/Button";
import Image from "../../Components/Image";
import { Launch } from "../../Models/Launch"

interface LandingLaunchesCardPropType {
  launch: Launch
}

const LandingLaunchesCard = (props: LandingLaunchesCardPropType) => {
  const { launch } = props;

  return (
    <div className='h-[100vh] w-full flex flex-1 items-start justify-start delay-0 relative overflow-x-hidden overflow-clip transition-all group leading-none'>
      <Image src={launch.links.flickr.original[0]} className='object-cover h-full w-full group-hover:md:scale-110 transition-all' />
      <div className="visible md:invisible h-full bg-gradient-to-b md:bg-gradient-to-l from-transparent to-gray-900 w-full absolute z-10 bg-opacity-50" />
      <div className="invisible group-hover:md:visible h-full bg-gradient-to-b md:bg-gradient-to-l from-transparent to-gray-900 w-full absolute z-10 bg-opacity-50" />
      <div className="absolute left-10 bottom-10 md:bottom-[25rem] md:left-[6%] flex flex-col justify-start items-start gap-y-5 z-20 text-white">
        <div className="text-xl font-normal">Upcoming Launch</div>
        <div className="text-3xl md:text-7xl font-extrabold uppercase transition-transform">
          {launch.name}
        </div>
        <Button onClick={() => { }} theme="dark" >Rewatch</Button>
      </div>
    </div>
  )
}

export default LandingLaunchesCard