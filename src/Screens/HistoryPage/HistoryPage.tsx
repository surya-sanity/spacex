import Loading from "../../Components/Loading"
import { useHistoryHook } from "../../Hooks/useHistoryHook"
import { ReactComponent as Rocket } from '../../Assets/Images/rocket-load.svg';


const HistoryPage = () => {
  const { histories, historiesLoading, historiesError, historiesSuccess } = useHistoryHook()

  if (historiesLoading || historiesError || !historiesSuccess || !histories) {
    return <Loading isFullPage={true} />
  }

  //!todo implement empty state
  return (
    <div className='self-center w-full lg:px-[10%] px-10'>
      <div className="w-full md:pl-5 flex flex-col gap-y-5 py-10">
        {/* !todo implement field and search  */}

        <section className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center content-center">
          {
            histories.map((history, index) => {
              return (
                <div className="rounded-lg overflow-clip hover:shadow-md dark:hover:bg-darkOverlay hover:scale-110 transition-all group">
                  <div className="flex flex-1 h-full w-full flex-row gap-x-1">
                    <div className="p-3">
                      <div className="p-2 rounded-full mb-auto">
                        <Rocket className="h-6 w-6 group-hover:animate-tilt" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-3 pr-3 py-3">
                      <div className="text-lg font-semibold">{history.title}</div>
                      <div className="text-sm line-clamp-4">{history.details}</div>
                      <div className="text-sm">{history.event_date_utc}</div>
                      <div className="text-sm">{history.event_date_unix}</div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </section>
      </div>
    </div>
  )
}

export default HistoryPage