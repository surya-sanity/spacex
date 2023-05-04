import EmptyState from "../../Components/EmptyState";
import { History } from "../../Models/History";
import HistoryCard from "./HistoryCard";

interface HistoryContentPropType {
  histories: History[]
}

const HistoryContent = (props: HistoryContentPropType) => {
  const { histories } = props;

  if (!histories.length) {
    return (<EmptyState isFullPage={true} className="h-[50vh]" />)
  }

  return (
    <section className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center content-center">
      {histories.map((history, index) => <HistoryCard history={history} key={index.toString()} />)}
    </section>
  )
}

export default HistoryContent