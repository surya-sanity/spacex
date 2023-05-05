import { ReactComponent as Rocket } from '../Assets/Images/rocket-load.svg';

interface EmptyStatePropType {
  isFullPage?: boolean
  emptyText?: string
  className?: string
  forQuery?: string
}

const EmptyState = (props: EmptyStatePropType) => {
  const { isFullPage, emptyText, className = "h-[90vh]", forQuery } = props;

  return (
    <div className={`${isFullPage ? ' w-full flex justify-center items-center' : ''} ${className}`}>
      <div className='relative flex flex-col gap-y-2 justify-center items-center'>
        <Rocket className='h-10 w-10' />
        <div className="text-xl font-semibold">{emptyText ?? (forQuery ? 'No results found' : 'Nothing found !')}</div>
        {forQuery &&
          <div className='w-[20rem]'>
            <div className="text-sm flex flex-col flex-1 w-full h-full gap-y-1 items-center justify-center">
              <div>for</div>
              <div className='text-lg font-semibold max-w-sm truncate text-ellipsis'>{`"${forQuery}"`}</div>
            </div>
          </div>}
      </div>
    </div>
  )
}

export default EmptyState