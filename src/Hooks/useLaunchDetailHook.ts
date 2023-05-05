import { useGetLaunchByIdQuery } from "../Services/launchesApi"

/**
 * To fetch the data for launch detail page  
 * @returns launchData, launchLoading, launchError and launchSuccess
 */

interface LaunchHookParamType {
  launchId: string | undefined
}

export const useLaunchDetailHook = ({ launchId }: LaunchHookParamType) => {
  const { data: launchData, isLoading: launchLoading, isSuccess: launchSuccess, isError: launchError } = useGetLaunchByIdQuery(launchId ?? '', { skip: !launchId })

  return { launchData, launchLoading, launchError, launchSuccess }
}