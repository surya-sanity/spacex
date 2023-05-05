import Loading from '../../Components/Loading';
import InitialLandingDash from './InitialLandingDash';
import LandingLaunches from './LandingLaunches';
import { useLandingPageHook } from '../../Hooks/useLandingPageHook';
import { useRef } from 'react';

function LandingPage() {
  const { launchesData, launchesError, launchesLoading } = useLandingPageHook()

  const scrollRef = useRef<null | HTMLDivElement>(null);

  const triggerScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (launchesLoading || launchesError) {
    return <Loading />
  }

  return (
    <section className='w-full'>
      <InitialLandingDash triggerScroll={triggerScroll} />
      <LandingLaunches launches={launchesData} scrollRef={scrollRef} />
    </section>
  )
}

export default LandingPage