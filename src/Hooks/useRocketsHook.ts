import { useEffect, useState } from "react"
import { useGetRocketsQuery } from "../Services/rocketsApi"
import { Rocket } from "../Models/Rocket"

/**
 * To fetch the data for rockets page 
 * @returns rocketsData, rocketsLoading, rocketsError, searchByRocketName and searchQuery
 */

export const useRocketsHook = () => {
  const { data: allRockets, isLoading: rocketsLoading, isSuccess: rocketsSuccess, isError: rocketsError } = useGetRocketsQuery()
  const [rocketsData, setRocketsData] = useState<Rocket[]>([])
  const [searchQuery, setSearchQuery] = useState<string>("")

  useEffect(() => {
    if (allRockets && rocketsSuccess) {
      setRocketsData(allRockets);
    }
  }, [allRockets, rocketsSuccess])

  const searchByRocketName = (query: string) => {
    if (allRockets) {
      setSearchQuery(query)

      if (query === '') {
        setRocketsData(allRockets)
        return;
      }

      const filteredRockets = allRockets.filter((rocket) => rocket.name.toLowerCase().includes(query.toLowerCase()))
      setRocketsData(filteredRockets ?? [])
    }
  }

  return { rocketsData, rocketsLoading, rocketsError, searchByRocketName, searchQuery }
}