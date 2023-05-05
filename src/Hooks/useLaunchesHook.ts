
/**
 * To fetch the data for launches page 
 * @returns launchesData, launchesLoading and launchesError
 */

import { useEffect, useState } from "react"
import { useGetLaunchesQuery } from "../Services/launchesApi"
import { Launch } from "../Models/Launch"

export const useLaunchesHook = () => {
  const { data: allLaunches, isLoading: launchesLoading, isSuccess: launchesSuccess, isError: launchesError } = useGetLaunchesQuery()
  const [launchesData, setLaunchesData] = useState<Launch[]>([])

  useEffect(() => {
    if (allLaunches && launchesSuccess) {
      setLaunchesData(allLaunches);
    }
  }, [allLaunches, launchesSuccess])

  const searchByLaunchName = (query: string) => {
    if (allLaunches) {

      if (query === '') {
        setLaunchesData(allLaunches)
        return;
      }

      const filteredHistories = allLaunches.filter((launch) => launch.name.toLowerCase().includes(query.toLowerCase()))
      setLaunchesData(filteredHistories ?? [])
    }
  }

  return { launchesData, launchesLoading, launchesError, searchByLaunchName }
}