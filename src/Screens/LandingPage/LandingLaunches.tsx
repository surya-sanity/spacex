import Image from "../../Components/Image"
import { Launch } from "../../Models/Launch"

interface LandingLaunchesPropType {
  launches: Launch[]
}

const LandingLaunches = (props: LandingLaunchesPropType) => {
  const { launches } = props

  return (
    <>
      {launches.map((launch, index) => {
        return (
          <div className='h-[100vh] w-full flex flex-1 items-center justify-start lg:justify-center  relative overflow-x-hidden overflow-clip'>
            <Image src={launch.links.flickr.original[0]} className='object-cover h-full w-full' />
          </div>
        )
      })}
    </>
  )
}

export default LandingLaunches