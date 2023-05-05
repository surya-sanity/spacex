import Button from "../../Components/Button";
import Image from "../../Components/Image";
import { Launch } from "../../Models/Launch"

interface LaunchCardPropType {
  launch: Launch
}

const LaunchCard = (props: LaunchCardPropType) => {
  const { launch } = props;

  //todo remove finally
  if (!launch.links.flickr.original[0]) {
    return null
  }

  return (
    <div className="flex flex-col gap-y-4 group">
      <div className="h-96 w-full rounded-md group-hover:md:rounded-2xl overflow-clip transition-all duration-700">
        <Image
          src={launch.links.flickr.original[0]}
          className="h-full w-full object-cover group-hover:md:scale-125 transition-all duration-500"
        />
      </div>
      <div className="text-sm">{new Date(launch.date_local).toLocaleDateString()} {new Date(launch.date_local).toLocaleTimeString()}</div>
      <div className="text-4xl font-bold uppercase truncate">{launch.name}</div>
      <Button
        onClick={() => { }}>
        Learn more
      </Button>
    </div>
  )
}

export default LaunchCard