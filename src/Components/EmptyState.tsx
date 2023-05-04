import { ReactComponent as Rocket } from '../Assets/Images/rocket-load.svg';


interface EmptyStatePropType {
  isFullPage?: boolean
  emptyText?: string
  className?: string
}

const EmptyState = (props: EmptyStatePropType) => {
  const { isFullPage, emptyText, className = "h-[90vh]" } = props;

  return (
    <div className={`${isFullPage ? ' w-full flex justify-center items-center' : ''} ${className}`}>
      <div className='relative flex flex-col gap-y-5 justify-center items-center'>
        <Rocket className='h-10 w-10' />
        <div className="text-xl font-semibold">{emptyText ?? 'Nothing found !'}</div>
      </div>
    </div>
  )
}

export default EmptyState