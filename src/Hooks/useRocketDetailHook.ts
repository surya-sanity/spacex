import { useGetRocketByIdQuery } from "../Services/rocketsApi"

/**
 * To fetch the data for Rocket detail page  
 * @returns rocketData, rocketLoading, rocketError and rocketSuccess
 */

interface RocketDetailHookParamType {
  rocketId: string | undefined
}

export const useRocketDetailHook = ({ rocketId }: RocketDetailHookParamType) => {
  const { data: rocketData, isLoading: rocketLoading, isSuccess: rocketSuccess, isError: rocketError } = useGetRocketByIdQuery(rocketId ?? '', { skip: !rocketId })

  return { rocketData, rocketLoading, rocketError, rocketSuccess }
}