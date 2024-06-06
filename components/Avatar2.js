//next image
import Image from "next/image";

const Avatar2 = () => {
  return(
    <div className="hidden xl:flex xl:max-w-none">
      <Image src={'/bg-photo3.jpg'} width={1400} height={678} objectFit="cover"   alt=""
      className="translate-z-0 w-full h-full"/>
    </div>
  )
};

export default Avatar2;