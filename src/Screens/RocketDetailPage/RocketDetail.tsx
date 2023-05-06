import { useParams } from "react-router-dom"
import EmptyState from "../../Components/EmptyState"
import Loading from "../../Components/Loading"
import { useRocketDetailHook } from "../../Hooks/useRocketDetailHook"
import { Rocket } from "../../Models/Rocket"
import RocketDetailContent from "./RocketDetailContent"

export interface RocketDetailPropType {
  rocketData: Rocket
}

const RocketDetail = () => {
  const { id: rocketId } = useParams()
  const { rocketData, rocketLoading, rocketError } = useRocketDetailHook({ rocketId })

  if (rocketLoading) {
    return <Loading isFullPage={true} />
  }

  if (rocketError) {
    return <EmptyState isFullPage={true} emptyText="Something went wrong !" />
  }

  if (!rocketData) {
    return <EmptyState isFullPage={true} emptyText="Not found !" />
  }

  return (
    <div className='self-center w-full px-5 lg:px-[5%] '>
      <div className="w-full md:pl-5 flex flex-col gap-y-3 md:gap-y-8 py-5 pb-20">
        <div className="md:self-center pl-2 text-4xl">{rocketData.name}</div>
        <RocketDetailContent rocketData={rocketData} />
      </div>
    </div>
  )
}

export default RocketDetail