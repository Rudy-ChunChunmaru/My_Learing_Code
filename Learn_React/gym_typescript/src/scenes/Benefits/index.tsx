import HText from "@/shared/HText"
import { BenefitsType, SelectedPage } from "@/shared/types"
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit"
import ActionButton from "@/components/ActionButton"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitsType> = [
    {
        icon : <HomeModernIcon className="h-6 w-6" />,
        title : "State of the Art Facilities",
        description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
    },
    {
        icon : <UserGroupIcon className="h-6 w-6" />,
        title : "100's of Divers Classes",
        description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
    },
    {
        icon : <AcademicCapIcon className="h-6 w-6" />,
        title : "Expert and pro trainers",
        description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
    },
]

const container = {
    hidden : {},
    visible:{
        transition:{
            staggerChildren: 0.2
        }
    }
}

type Props = {
    setSelectedPage : (value:SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* HEADER */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once:false, amount:0.5}}
                variants={{
                    hidden : {opacity : 0, x : -50},
                    visible:{opacity : 1, x : 0}
                }}
            >
                <HText>MORE THAN JUST GYM.</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes to get you to your ulimate fitness goals with ease. We provide true care into each and every member.
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div 
                className="mt-5 items-center justify-between gap-8 md:flex"
                initial="hidden"
                whileInView="visible"
                viewport={{ once:false, amount:0.5}}
                variants={container}
            >
               {
                benefits.map(
                    (benefit : BenefitsType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    )
                )
               }
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div>
                {/* GRAPHICS */}
                <img className="mx-auto" alt="benefits-page-graphic" src={BenefitsPageGraphic} />

                {/* DESCRIPTION */}
                
                <div>
                    {/* TITLE */}
                    <div 
                        className="relative"
                    >
                        <div
                            className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves"
                        >
                            <div>
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </div>
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div>
                        <p className="my-5">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.
                        </p>
                        <p className="mb-5">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.
                        </p>
                    </div>

                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join NOW
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>


        </motion.div>
    </section>
  )
}

export default Benefits