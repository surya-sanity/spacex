import Image from '../../Components/Image'
import { RocketDetailPropType } from './RocketDetail'

const SecondStage = ({ rocketData }: RocketDetailPropType) => {

  return (
    <div className="flex flex-col gap-y-2 dark:bg-darkOverlay rounded-lg shadow-md animate-fade-in top-[3rem] lg:mt-[2rem]">
      <div className="h-[20rem] w-full">
        <Image src={rocketData.flickr_images[3]} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="flex flex-col gap-y-3 p-5">
        <div className="text-xl font-semibold">Second Stage</div>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row items-center justify-between group">
            <div className="flex flex-1">Engines</div>
            <div className="flex flex-1">{rocketData.second_stage.engines ?? '-'}</div>
          </div>
          <div className="flex flex-row items-center justify-between group">
            <div className="flex flex-1">Burntime</div>
            <div className="flex flex-1">{rocketData.second_stage.burn_time_sec ?? '-'} / sec</div>
          </div>
          <div className="flex flex-row items-center justify-between group">
            <div className="flex flex-1">Fuel amount</div>
            <div className="flex flex-1">{rocketData.second_stage.fuel_amount_tons ?? '-'} / tonnes</div>
          </div>
          <div className="flex flex-row items-center justify-between group">
            <div className="flex flex-1">Reusability</div>
            <div className="flex flex-1">{rocketData.second_stage.reusable ? "Yes" : "No"}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondStage