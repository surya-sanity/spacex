import { memo } from "react"

const Image = (props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {

  return (
    <img loading="lazy" alt="img" {...props} />
  )
}

export default memo(Image)