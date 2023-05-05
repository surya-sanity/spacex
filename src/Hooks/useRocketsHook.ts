import { useEffect, useState } from "react"
import { useGetRocketsQuery } from "../Services/rocketsApi"
import { Rocket } from "../Models/Rocket"

/**
 * To fetch the data for rockets page 
 * @returns rocketsData, rocketsLoading and rocketsError
 */

export const useRocketsHook = () => {
  const { data: allRockets, isLoading: rocketsLoading, isSuccess: rocketsSuccess, isError: rocketsError } = useGetRocketsQuery()
  const [rocketsData, setRocketsData] = useState<Rocket[]>([])

  useEffect(() => {
    if (allRockets && rocketsSuccess) {
      setRocketsData(allRockets);
    }
  }, [allRockets, rocketsSuccess])

  const searchByRocketName = (query: string) => {
    if (allRockets) {

      if (query === '') {
        setRocketsData(allRockets)
        return;
      }

      const filteredRockets = allRockets.filter((rocket) => rocket.name.toLowerCase().includes(query.toLowerCase()))
      setRocketsData(filteredRockets ?? [])
    }
  }

  return { rocketsData, rocketsLoading, rocketsError, searchByRocketName }
}