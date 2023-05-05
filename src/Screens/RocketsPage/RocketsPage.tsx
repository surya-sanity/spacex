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
    <div className='self-center w-full px-5 lg:px-[5%] '>
      <div className="w-full md:pl-5 flex flex-col gap-y-5 py-5">
        <div className="lg:hidden text-3xl font-bold md:self-center">Rockets</div>
        <SearchBar className="self-center w-full md:w-1/2 lg:w-1/3" placeHolder="Search by rocket's name" searchFunction={searchByRocketName} />
        <RocketsContent rockets={rocketsData} searchQuery={searchQuery} />
      </div>
    </div>
  )
}

export default RocketsPage