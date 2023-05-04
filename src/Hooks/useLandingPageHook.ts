import { useEffect, useState } from "react"
import { useGetLaunchesQuery } from "../Services/launchesApi"
import { Launch } from "../Models/Launch"

/**
 * To fetch the data for Landing page 
 * @returns launchesData, launchesLoading and launchesError
 */

export const useLandingPageHook = () => {
  const { data: allLaunches, isLoading: launchesLoading, isSuccess: launchesSuccess, isError: launchesError } = useGetLaunchesQuery()
  const [launchesData, setLaunchesData] = useState<Launch[]>([])

  useEffect(() => {
    if (allLaunches && launchesSuccess) {
      //couldn't find the exact result for landing page so mimicking the launches data with results which has images and limiting to 4 items.
      const dataWithImages = allLaunches.filter((val) => val.links.flickr.original.length > 0).map((val) => val).slice(0, 4)
      setLaunchesData(dataWithImages);
    }
  }, [allLaunches, launchesSuccess])

  return { launchesData, launchesLoading, launchesError }
}