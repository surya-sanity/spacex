import Loading from "../../Components/Loading"
import SearchBar from "../../Components/SearchBar"
import { useLaunchesHook } from "../../Hooks/useLaunchesHook"
import LaunchContent from "./LaunchContent"

const LaunchesPage = () => {
  const { launchesData, launchesLoading, launchesError, searchByLaunchName, searchQuery } = useLaunchesHook()

  if (launchesLoading || launchesError) {
    return <Loading isFullPage={true} />
  }

  return (
    <div className='self-center w-full px-5 lg:px-[5%] '>
      <div className="w-full md:pl-5 flex flex-col gap-y-10 py-5">
        <SearchBar className="self-center w-full md:w-1/3" placeHolder="Search by launch title" searchFunction={searchByLaunchName} />
        <LaunchContent launches={launchesData} searchQuery={searchQuery} />
      </div>
    </div>
  )
}

export default LaunchesPage