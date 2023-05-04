import { Launch } from "../../Models/Launch";
import LandingLaunchesCard from "./LandingLaunchesCard";

interface LandingLaunchesPropType {
  launches: Launch[]
  scrollRef: React.RefObject<HTMLDivElement>;
}

const LandingLaunches = (props: LandingLaunchesPropType) => {
  const { launches, scrollRef } = props

  return (
    <div ref={scrollRef}>
      {launches.map((launch, index) => <LandingLaunchesCard launch={launch} key={index.toString()} />)}
    </div>
  )
}

export default LandingLaunches