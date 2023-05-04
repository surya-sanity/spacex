import Image from "../../Components/Image"
import { Launch } from "../../Models/Launch"

interface LandingLaunchesPropType {
  launches: Launch[]
  scrollRef: React.RefObject<HTMLDivElement>;
}

const LandingLaunches = (props: LandingLaunchesPropType) => {
  const { launches, scrollRef } = props

  return (
    <div ref={scrollRef}>
      {launches.map((launch, index) => {
        return (
          <div key={index.toString()} className='h-[100vh] w-full flex flex-1 items-center justify-start lg:justify-center  relative overflow-x-hidden overflow-clip'>
            <Image src={launch.links.flickr.original[0]} className='object-cover h-full w-full' />
          </div>
        )
      })}
    </div>
  )
}

export default LandingLaunches