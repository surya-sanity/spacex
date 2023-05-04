import { useGetHistoriesQuery } from "../Services/historyApi"

/**
 * To fetch the data for History page 
 * @returns histories, historiesLoading, historiesSuccess and historiesError
 */

export const useHistoryHook = () => {
  const { data: histories, isLoading: historiesLoading, isSuccess: historiesSuccess, isError: historiesError } = useGetHistoriesQuery()

  return { histories, historiesLoading, historiesSuccess, historiesError }
}