import { useState } from "react";
import Loading from "./Loading";
import PlaceHolder from "../Assets/Images/placeholder.webp"

interface ImagePropType {
  src: string;
  loading?: "eager" | "lazy";
  name?: string;
  className?: string
  width?: string | number | undefined
  height?: string | number | undefined
  alt?: string | undefined
  showLoading?: boolean
}

const Image = (props: ImagePropType) => {

  const [loaded, setLoaded] = useState(false);
  const { src, showLoading = true, className } = props;

  if (!src) {
    return (<div className="h-full w-full flex justify-center items-center" >
      <Image src={PlaceHolder} className={className} />
    </div>)
  }

  return (
    <>
      {(showLoading && !loaded) ? <div className="h-full w-full animate-pulse bg-gray-200 dark:bg-darkOverlay flex justify-center items-center" >
        <Loading isFullPage={false} className="opacity-10" />
      </div> : null}
      <img
        style={loaded ? {} : { display: 'none' }}
        alt={props.alt ?? "Image"}
        {...props}
        onLoad={() => {
          setLoaded(true)
        }}
      />
    </>
  );
}

export default Image
