import { RocketDetailPropType } from './RocketDetail'

const MainDescription = ({ rocketData }: RocketDetailPropType) => {
  return (
    <div className="flex flex-col gap-y-2 dark:bg-darkOverlay rounded-lg animate-fade-in shadow-md">
      <div className="p-5">
        {rocketData.description}
      </div>
    </div>
  )
}

export default MainDescription