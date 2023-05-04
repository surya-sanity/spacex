import Loading from "../../Components/Loading";
import SearchBar from "../../Components/SearchBar";
import { useHistoryHook } from "../../Hooks/useHistoryHook";
import HistoryContent from "./HistoryContent";

const HistoryPage = () => {
  const { histories, historiesLoading, historiesError, historiesSuccess, searchByTitle } = useHistoryHook()

  if (historiesLoading || historiesError || !historiesSuccess) {
    return <Loading isFullPage={true} />
  }

  return (
    <div className='self-center w-full lg:px-[10%] px-10'>
      <div className="w-full md:pl-5 flex flex-col gap-y-10 py-5">
        <SearchBar className="self-center w-full md:w-1/3" placeHolder="Search by title" searchFunction={searchByTitle} />
        <HistoryContent histories={histories} />
      </div>
    </div>
  )
}

export default HistoryPage