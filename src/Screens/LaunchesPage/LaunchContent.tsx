import EmptyState from "../../Components/EmptyState";
import { Launch } from "../../Models/Launch";
import LaunchCard from "./LaunchCard";

interface LaunchContentPropType {
  launches: Launch[]
}

const LaunchContent = (props: LaunchContentPropType) => {
  const { launches } = props;

  if (!launches.length) {
    return (<EmptyState isFullPage={true} className="h-[50vh]" />)
  }

  return (
    <section className="grid gap-10 gap-y-[6rem] grid-cols-1 md:grid-cols-2 justify-center content-center">
      {launches.map((launch, index) => <LaunchCard launch={launch} key={index.toString()} />)}
    </section>
  )
}

export default LaunchContent