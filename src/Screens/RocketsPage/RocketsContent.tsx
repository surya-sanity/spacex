import EmptyState from "../../Components/EmptyState";
import { Rocket } from "../../Models/Rocket";
import RocketCard from "./RocketCard";

interface RocketsPropType {
  rockets: Rocket[]
  searchQuery?: string | undefined
}

const RocketsContent = (props: RocketsPropType) => {
  const { rockets, searchQuery } = props;

  if (!rockets.length && searchQuery) {
    return (<EmptyState isFullPage={true} className="h-[50vh]" forQuery={searchQuery} />)
  }

  return (
    <>
      {searchQuery && <div className="self-center text-2xl font-bold">Showing results for "{searchQuery}"</div>}
      <section className="grid gap-10 gap-y-[6rem] grid-cols-1 md:grid-cols-2 justify-center content-center">
        {rockets.map((rocket, index) => <RocketCard rocket={rocket} key={index.toString()} />)}
      </section>
    </>
  )
}

export default RocketsContent