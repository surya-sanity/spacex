import Loading from "../../Components/Loading";
import SearchBar from "../../Components/SearchBar";
import { useHistoryHook } from "../../Hooks/useHistoryHook";
import HistoryContent from "./HistoryContent";

const HistoryPage = () => {
  const { histories, historiesLoading, historiesError, historiesSuccess, searchByTitle, searchQuery } = useHistoryHook()

  if (historiesLoading || historiesError || !historiesSuccess) {
    return <Loading isFullPage={true} />
  }

  return (
    <div className='self-center w-full px-5 lg:px-[5%]'>
      <div className="w-full md:pl-5 flex flex-col gap-y-5 py-5">
        <div className="lg:hidden text-3xl font-bold md:self-center">History</div>
        <SearchBar className="self-center w-full md:w-1/2 lg:w-1/3" placeHolder="Search by title" searchFunction={searchByTitle} />
        <HistoryContent histories={histories} searchQuery={searchQuery} />
      </div>
    </div>
  )
}

export default HistoryPage