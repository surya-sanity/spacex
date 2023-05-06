import Image from "../../Components/Image"
import { RocketDetailPropType } from "./RocketDetail"

const Misc = ({ rocketData }: RocketDetailPropType) => {

  return (
    <div className="flex flex-col gap-y-2 dark:bg-darkOverlay rounded-lg shadow-md animate-fade-in top-[3rem] lg:mt-[2rem]">
      <div className="h-[20rem] w-full">
        <Image src={rocketData.flickr_images[2]} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="flex flex-col gap-y-3 p-5">
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row items-center justify-between group">
            <div className="flex flex-1">Boosters</div>
            <div className="flex flex-1">{rocketData.boosters ?? '-'}</div>
          </div>
          <div className="flex flex-row items-center justify-between group">
            <div className="flex flex-1">Company</div>
            <div className="flex flex-1">{rocketData.company ?? '-'}</div>
          </div>
          <div className="flex flex-row items-center justify-between group">
            <div className="flex flex-1">Cost per launch</div>
            <div className="flex flex-1">{rocketData.cost_per_launch ?? '-'}{rocketData.cost_per_launch && " USD"}</div>
          </div>
          <div className="flex flex-row items-center justify-between group">
            <div className="flex flex-1">Country</div>
            <div className="flex flex-1">{rocketData.country ?? '-'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Misc