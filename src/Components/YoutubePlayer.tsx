
interface YoutubePlayerPropType {
  videoId: string
  className?: string
  title?: string
}

const YoutubePlayer = (props: YoutubePlayerPropType) => {
  const { videoId, className, title } = props;

  return (
    <iframe
      className={`aspect-video ${className}`}
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  )
}

export default YoutubePlayer;