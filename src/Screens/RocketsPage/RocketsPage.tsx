import Loading from "../../Components/Loading"
import SearchBar from "../../Components/SearchBar"
import { useRocketsHook } from "../../Hooks/useRocketsHook"
import RocketsContent from "./RocketsContent"

const RocketsPage = () => {
  const { rocketsData, rocketsLoading, rocketsError, searchByRocketName, searchQuery } = useRocketsHook()

  if (rocketsLoading || rocketsError) {
    return <Loading isFullPage={true} />
  }

  return (
    <div className='self-center w-full lg:px-[5%] px-10'>
      <div className="w-full md:pl-5 flex flex-col gap-y-10 py-5">
        <SearchBar className="self-center w-full md:w-1/3" placeHolder="Search by rocket's name" searchFunction={searchByRocketName} />
        <RocketsContent rockets={rocketsData} searchQuery={searchQuery} />
      </div>
    </div>
  )
}

export default RocketsPage