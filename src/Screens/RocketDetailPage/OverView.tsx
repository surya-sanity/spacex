import Image from '../../Components/Image'
import { RocketDetailPropType } from './RocketDetail'

const OverView = ({ rocketData }: RocketDetailPropType) => {

  return (
    <div className="flex flex-col gap-y-2 dark:bg-darkOverlay rounded-lg animate-fade-in shadow-md lg:mt-[2rem]">
      <div className="h-[20rem] w-full">
        <Image src={rocketData.flickr_images[0]} className="w-full h-full object-cover rounded-lg" />
      </div>

      <div className="flex flex-col gap-y-3 p-5">
        <div className="text-xl font-semibold">Overview</div>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row items-center justify-between group">
            <div className="flex flex-1">Height</div>
            <div className="flex flex-1">{rocketData.height.meters}m / {rocketData.height.feet}f</div>
          </div>
          <div className="flex flex-row items-center justify-between group">
            <div className="flex flex-1">Diameter</div>
            <div className="flex flex-1">{rocketData.diameter.meters}m / {rocketData.diameter.feet}f</div>
          </div>
          <div className="flex flex-row items-center justify-between group">
            <div className="flex flex-1">Mass</div>
            <div className="flex flex-1">{rocketData.mass.kg}kg / {rocketData.mass.lb}lbs</div>
          </div>
          <div className="flex flex-row items-center justify-between group">
            <div className="flex flex-1">PayLoad Weight</div>
            <div className="flex flex-1">{rocketData.payload_weights[0].kg}kg / {rocketData.payload_weights[0].lb}lbs</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverView