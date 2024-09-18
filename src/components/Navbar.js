'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

//images
import TSLogo1 from "../../public/primary-logo-2-tone.png"
import TSLogo2 from "../../public/Primary Logo (white).png"
import { BsFillMenuButtonFill, BsMenuButton } from "react-icons/bs";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()
  // console.log(pathname);

  useEffect(() =>{
    // let prevScrollPos = window.scrollY;
    // window.onscroll = function() {
    //   let currScrollPos = window.scrollY
    //     if (prevScrollPos > currScrollPos) {
    //       document.getElementById("navbar").style.top = "0";
    //     } else {
    //       document.getElementById("navbar").style.top = "-100%";
    //     }
    //     prevScrollPos = currScrollPos;
    //   }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return(
      <div id="navbar" className={`${(pathname === '/project') && scrollY <= 0 ? 'text-white ' : 'text-secondary'} ${scrollY <= 0 && pathname !== '/gallery' ? 'bg-opacity-0' : 'bg-opacity-100 shadow-xl'} bg-white fixed top-0 mx-auto transition-all ease-in-out flex h-fit w-full max-sm:w-screen align-middle rounded-b-[30px] max-sm:rounded-b-2xl justify-between z-40 items-center max-sm:px-1 pr-5 max-sm:pt-1 max-sm:pb-1`}>
          <Link href={'/'}> 
            <Image
              src={(pathname === '/project') && scrollY <= 0 ? TSLogo2 : TSLogo1}
              alt="Terra Segara"
              className={`w-28 translate-x-5 max-sm:w-12 transition-all ${(pathname === '/project') && scrollY <= 0 ? '-translate-y-1' : ''}`}
            />
          </Link>
          <div className={`gap-5 max-sm:gap-2 flex max-sm:text-[10px] text-2xl`}>
            <Link href={'about-us'} className={`px-2 transition-all ${pathname === '/about-us' ? 'text-primary max-sm:underline font-bold sm:border-b-4 sm:border-primary brightness-125' : ''}`}>About Us</Link>
            <Link href={'project'} className={`px-2 transition-all ${pathname === '/project' ? 'text-primary max-sm:underline font-bold sm:border-b-4 sm:border-primary brightness-125' : ''}`}>Project</Link>
            <Link href={'join-us'} className={`px-2 transition-all ${pathname === '/join-us' ? 'text-primary max-sm:underline font-bold sm:border-b-4 sm:border-primary brightness-125' : ''}`}>Join Us</Link>
            <Link href={'donate'} className={`px-2 transition-all ${pathname === '/donate' ? 'text-primary max-sm:underline font-bold sm:border-b-4 sm:border-primary brightness-125' : ''}`}>Donate</Link>
            <Link href={'gallery'} className={`px-2 transition-all ${pathname === '/gallery' ? 'text-primary max-sm:underline font-bold sm:border-b-4 sm:border-primary brightness-125' : ''}`}>Gallery</Link>
          </div>
      </div>
  )
}