import Rocket1 from "../../Assets/Images/rocket1.webp"
import Rocket2 from "../../Assets/Images/rocket2.webp"
import Rocket3 from "../../Assets/Images/rocket3.webp"
import Image from "../../Components/Image"
import FirstStage from "./FirstStage"
import MainDescription from "./MainDescription"
import Misc from "./Misc"
import OverView from "./OverView"
import { RocketDetailPropType } from "./RocketDetail"
import SecondStage from "./SecondStage"

const RocketDetailContent = ({ rocketData }: RocketDetailPropType) => {

  return (
    <div className="w-full grid gap-x-1 gap-y-2 grid-cols-1  lg:grid-cols-11 justify-center content-center">
      {/* left-content */}
      <div className="flex flex-col gap-y-4 transition-all w-full col-span-4 relative">
        <MainDescription rocketData={rocketData} />
        <OverView rocketData={rocketData} />
        <Misc rocketData={rocketData} />
      </div>

      {/* left-fillers */}
      <div className="hidden lg:flex flex-col mx-auto transition-all w-full col-span-1 relative">
        <div className="w-full h-full flex flex-col items-end">
          <div className="absolute w-[80%] h-[1px] bg-dark dark:bg-light bg-opacity-50 top-[3rem] animate-fade-in" />
          <div className="absolute w-[80%] h-[1px] bg-dark dark:bg-light bg-opacity-50 top-[18rem] animate-fade-in" />
          <div className="absolute w-[80%] h-[1px] bg-dark dark:bg-light bg-opacity-50 top-[58rem] animate-fade-in" />
        </div>
      </div>

      {/* Center Images */}
      <div className="hidden lg:flex flex-col mx-auto transition-all m-auto">
        <Image showLoading={false} src={Rocket1} className="animate-bump-out-in-up transition-all hover:scale-125 hover:my-10 duration-700" />
        <Image showLoading={false} src={Rocket2} className="animate-bump-out-in-up transition-all hover:scale-125 hover:my-20 duration-700" />
        <Image showLoading={false} src={Rocket3} className="animate-bump-out-in-up transition-all hover:scale-125 hover:my-[5rem] duration-700" />
      </div>

      {/* right-fillers */}
      <div className="hidden lg:flex flex-col mx-auto transition-all w-full col-span-1 relative">
        <div className="w-full h-full flex flex-col items-start">
          <div className="absolute w-[80%] h-[1px] bg-dark dark:bg-light bg-opacity-50 top-[12rem] animate-fade-in" />
          <div className="absolute w-[80%] h-[1px] bg-dark dark:bg-light bg-opacity-50 top-[48rem] animate-fade-in" />
        </div>
      </div>

      {/* right-content */}
      <div className="flex flex-col gap-y-4 transition-all w-full col-span-4 relative">
        <FirstStage rocketData={rocketData} />
        <SecondStage rocketData={rocketData} />
      </div>
    </div>
  )
}

export default RocketDetailContent