import { useEffect, useState } from "react"
import { useGetHistoriesQuery } from "../Services/historyApi"
import { History } from "../Models/History"

/**
 * To fetch the data for History page and also search by title functions
 * @returns histories, historiesLoading, historiesSuccess, historiesError and searchByTitle
 */

export const useHistoryHook = () => {
  const { data: allHistories, isLoading: historiesLoading, isSuccess: historiesSuccess, isError: historiesError } = useGetHistoriesQuery()
  const [histories, setHistories] = useState<History[]>(allHistories ?? [])

  useEffect(() => {
    if (allHistories && historiesSuccess) {
      setHistories(allHistories);
    }
  }, [allHistories, historiesSuccess])

  const searchByTitle = (query: string) => {
    if (allHistories) {

      if (query === '') {
        setHistories(allHistories)
        return;
      }

      const filteredHistories = allHistories.filter((history) => history.title.toLowerCase().includes(query.toLowerCase()))
      setHistories(filteredHistories ?? [])
    }

  }

  return { histories, historiesLoading, historiesSuccess, historiesError, searchByTitle }
}