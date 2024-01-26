import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react"; 
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/components/ActionButton";



type Props = {
    selectedPage : SelectedPage;
    setSelectedPage : (value:SelectedPage) => void;
}

const Navbar = ({
    selectedPage,
    setSelectedPage
}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMeanuToggled,setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width : 1060px)");

  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`} >
            <div className={`${flexBetween} mx-auto w-5/6`}>
                
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* LEFT SIDE */}
                    <img src={Logo} alt="logo" />


                    {/* RIGHT SIDE */}
                    { isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`} >
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                        <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                        <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                        <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                </div>
                                <div className={`${flexBetween} gap-8 text-sm`} >
                                    <p>Sign In</p>
                                    <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button
                                className="rounded-full bg-secondary-500 p-2"
                                onClick={()=> setIsMenuToggled(!isMeanuToggled)}
                            >
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        ) 
                    }
                    
                </div>
               
            </div>
        </div>

        {/* MOBILE MENU */}
        {!isAboveMediumScreens && isMeanuToggled && (
            <div
                className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl"
            >
                {/* Close ICON */}
                <div 
                    className="flex justify-end p-12"
                >
                    <button onClick={() => setIsMenuToggled(!isMeanuToggled)}>
                        <XMarkIcon className=" h-6 w-6 text-gray-400">
                        </XMarkIcon>
                    </button>
                </div>

                {/* MENU */}
                <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
            </div>
        )}

    </nav>
  )
}

export default Navbar;