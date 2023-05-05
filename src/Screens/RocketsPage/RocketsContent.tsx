import EmptyState from "../../Components/EmptyState";
import { Rocket } from "../../Models/Rocket";
import RocketCard from "./RocketCard";

interface RocketsPropType {
  rockets: Rocket[]
}

const RocketsContent = (props: RocketsPropType) => {
  const { rockets } = props;

  if (!rockets.length) {
    return (<EmptyState isFullPage={true} className="h-[50vh]" />)
  }

  return (
    <section className="grid gap-10 gap-y-[6rem] grid-cols-1 md:grid-cols-2 justify-center content-center">
      {rockets.map((rocket, index) => <RocketCard rocket={rocket} key={index.toString()} />)}
    </section>
  )
}

export default RocketsContent