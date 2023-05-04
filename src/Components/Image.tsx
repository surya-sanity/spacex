
const Image = (props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {

  return (
    <img loading="lazy" {...props} />
  )
}

export default Image