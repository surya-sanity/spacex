import { ReactComponent as Calendar } from '../../Assets/Icons/calendar.svg';
import { ReactComponent as OpenLink } from '../../Assets/Icons/open-link.svg';
import { ReactComponent as Rocket } from '../../Assets/Images/rocket-load.svg';
import { History } from "../../Models/History";

interface HistoryCardPropType {
  history: History
}

const HistoryCard = (props: HistoryCardPropType) => {
  const { history } = props;

  const handleOpenArticle = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="rounded-lg overflow-clip hover:shadow-md dark:hover:bg-darkOverlay hover:scale-110 transition-all group">
      <div className="flex flex-1 h-full w-full flex-row gap-x-1">
        <div className="p-3">
          <div className="p-2 rounded-full mb-auto">
            <Rocket className="h-6 w-6 group-hover:animate-tilt" />
          </div>
        </div>
        <div className="flex flex-col gap-y-3 pr-3 py-3">
          <div className="flex flex-col gap-y-3 ">
            <div className="text-lg font-semibold">{history.title}</div>
            <div className="text-sm line-clamp-3">{history.details}</div>
            <div className="text-sm flex flex-row gap-x-3">
              <span>
                <Calendar className="h-5 w-5" />
              </span>
              <span>
                {new Date(history.event_date_utc).toLocaleDateString()} {new Date(history.event_date_utc).toLocaleTimeString()}
              </span>
            </div>
          </div>
          <button
            onClick={() => handleOpenArticle(history.links.article)}
            className="flex flex-row gap-x-2 items-center leading-tight group-hover:underline underline-offset-4 ">
            <div className="mb-0.5 text-sm">
              Learn more
            </div>
            <OpenLink className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HistoryCard