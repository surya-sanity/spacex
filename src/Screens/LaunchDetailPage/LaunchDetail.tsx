import { useParams } from "react-router-dom"
import { useLaunchDetailHook } from "../../Hooks/useLaunchDetailHook"
import Loading from "../../Components/Loading"
import YoutubePlayer from "../../Components/YoutubePlayer"
import EmptyState from "../../Components/EmptyState"
import Image from "../../Components/Image"

const LaunchDetail = () => {
  const { id: launchId } = useParams()
  const { launchData, launchLoading, launchError } = useLaunchDetailHook({ launchId })

  if (launchLoading) {
    return <Loading isFullPage={true} />
  }

  //todo implement separate error state
  if (launchError) {
    return <EmptyState isFullPage={true} emptyText="Something went wrong !" />
  }

  if (!launchData) {
    return <EmptyState isFullPage={true} emptyText="No launch found !" />
  }

  return (
    <div className='self-center w-full lg:px-[5%] px-10'>
      <div className="w-full md:pl-5 flex flex-col gap-y-10 py-5">
        <YoutubePlayer videoId={launchData.links.youtube_id} className="w-full md:h-[50vh] self-center rounded-xl select-none border-none" />
        <div className="flex flex-col gap-y-4">
          <div className="text-md uppercase">{launchData.date_utc}</div>
          <div className="text-3xl uppercase font-semibold">{launchData.name}</div>
          <div className="text-md">{launchData.details}</div>
        </div>
        {launchData.links.flickr.original.length &&
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center content-center">
            {launchData.links.flickr.original.map((value) => {
              return (
                <Image
                  className="rounded-xl h-[30rem] w-full object-cover md:hover:scale-105 transition-all"
                  src={value}
                />
              )
            })}
          </div>}
      </div>
    </div>
  )
}

export default LaunchDetail