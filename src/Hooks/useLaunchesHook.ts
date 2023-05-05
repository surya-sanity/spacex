
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
      //couldn't find the exact result for landing page of (www.spacex.com) so mimicking the launches data with results which has images and limiting to 7 items.
      const dataWithImages = allLaunches.filter((val) => val.links.flickr.original.length > 0).map((val) => val).slice(12, 19)
      setLaunchesData(dataWithImages);
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