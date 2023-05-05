import EmptyState from "../../Components/EmptyState";
import { Launch } from "../../Models/Launch";
import LaunchCard from "./LaunchCard";

interface LaunchContentPropType {
  launches: Launch[]
  searchQuery?: string | undefined
}

const LaunchContent = (props: LaunchContentPropType) => {
  const { launches, searchQuery } = props;

  if (!launches.length) {
    return (<EmptyState isFullPage={true} className="h-[50vh]" forQuery={searchQuery} />)
  }

  return (
    <>
      {searchQuery && <div className="self-center text-2xl font-bold">Showing results for "{searchQuery}"</div>}
      <section className="grid gap-10 gap-y-[6rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center content-center">
        {launches.map((launch, index) => <LaunchCard launch={launch} key={index.toString()} />)}
      </section>
    </>
  )
}

export default LaunchContent