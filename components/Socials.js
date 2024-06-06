//links
import Link from "next/link";

//icons
import 
  {
   RiYoutubeLine,
   RiFacebookLine, 
   RiInstagramLine, 
   RiDribbbleLine,
   RiFacebookBoxLine,
   RiFacebookBoxFill,
   RiPinterestLine, 
   RiLinkedinLine,
   RiBehanceLine,
   RiWhatsappLine 
 } 
from "react-icons/ri";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { BiLogoFacebookSquare } from "react-icons/bi";

const Socials = () => {
  return(
    <div className="flex items-center  gap-x-5 text-lg">
      <Link href={''} className="text-accent hover:text-accent transition-all duration-300">
        <RiWhatsappLine/>
      </Link>
      <Link href={''} className="text-accent hover:text-accent transition-all duration-300">
        <RiInstagramLine/>
      </Link>
      <Link href={''} className="text-accent hover:text-accent transition-all duration-300">
        <BiLogoFacebookSquare/>
      </Link>
      <Link href={''} className="text-accent hover:text-accent transition-all duration-300">
        <PiLinkedinLogoBold/>
      </Link>
      <Link href={''} className="text-accent hover:text-accent transition-all duration-300">
        <RiYoutubeLine/>
      </Link>
    
    
    </div>
  ) 
};

export default Socials;
