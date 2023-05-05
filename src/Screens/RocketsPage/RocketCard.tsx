import { NavLink } from "react-router-dom";
import Button from "../../Components/Button";
import Image from "../../Components/Image";
import { Rocket } from "../../Models/Rocket";

interface RocketCardPropType {
  rocket: Rocket
}

const RocketCard = (props: RocketCardPropType) => {
  const { rocket } = props;

  return (
    <div className="flex flex-col gap-y-4 group">
      <div className="h-96 w-full rounded-md group-hover:md:rounded-2xl overflow-clip transition-all duration-700">
        <Image
          src={rocket.flickr_images[0]}
          className="h-full w-full object-cover group-hover:md:scale-125 transition-all duration-500"
        />
      </div>
      <div className="text-sm">{new Date(rocket.first_flight).toLocaleDateString()}</div>
      <div className="text-4xl font-bold uppercase">{rocket.name}</div>
      <NavLink to={`/rockets/${rocket.id}`}>
        <Button
          onClick={() => { }}>
          Learn more
        </Button>
      </NavLink>
    </div>
  )
}

export default RocketCard