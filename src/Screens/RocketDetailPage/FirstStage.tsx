import Image from "../../Components/Image"
import { RocketDetailPropType } from "./RocketDetail"

const FirstStage = ({ rocketData }: RocketDetailPropType) => {

  return (
    <div className="flex flex-col gap-y-2 dark:bg-darkOverlay rounded-lg shadow-md animate-fade-in top-[3rem]">
      <div className="h-[20rem] w-full">
        <Image src={rocketData.flickr_images[1]} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="flex flex-col gap-y-3 p-5">
        <div className="text-xl font-semibold">First Stage</div>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row items-center justify-between group">
            <div className="flex flex-1">Engines</div>
            <div className="flex flex-1">{rocketData.first_stage.engines ?? '-'}</div>
          </div>
          <div className="flex flex-row items-center justify-between group">
            <div className="flex flex-1">Burntime</div>
            {<div className="flex flex-1">{rocketData.first_stage.burn_time_sec ?? '-'} / sec</div>}
          </div>
          <div className="flex flex-row items-center justify-between group">
            <div className="flex flex-1">Fuel amount</div>
            <div className="flex flex-1">{rocketData.first_stage.fuel_amount_tons ?? '-'} / tonnes</div>
          </div>
          <div className="flex flex-row items-center justify-between group">
            <div className="flex flex-1">Reusability</div>
            <div className="flex flex-1">{rocketData.first_stage.reusable ? "Yes" : "No"}</div>
          </div>
          <div className="flex flex-row items-center justify-between group">
            <div className="flex flex-1">Thrust sea Level</div>
            <div className="flex flex-1">{rocketData.first_stage.thrust_sea_level.kN ?? '-'}kN / {rocketData.first_stage.thrust_sea_level.lbf ?? '-'}lbf</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstStage