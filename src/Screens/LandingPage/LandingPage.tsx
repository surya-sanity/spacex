import Loading from '../../Components/Loading';
import InitialLandingDash from './InitialLandingDash';
import LandingLaunches from './LandingLaunches';
import { useLandingPageHook } from '../../Hooks/useLandingPageHook';

function LandingPage() {
  const { launchesData, launchesError, launchesLoading } = useLandingPageHook()

  if (launchesLoading || launchesError) {
    return <Loading />
  }

  //todo handle empty state
  return (
    <section className='w-full'>
      <InitialLandingDash />
      <LandingLaunches launches={launchesData} />
    </section>
  )
}

export default LandingPage