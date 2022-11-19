import { motion } from "framer-motion"
import { PageInfo } from "../typings";
import { urlFor } from '../sanity';


import React from 'react'

type Props = {
    pageInfo: PageInfo
};

const About = ( {pageInfo}: Props ) => {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
        
        className="flex relative h-screen flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">

            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>
            <motion.img

                initial={{

                    x: -200,
                    opacity: 0,
                }}
                transition={{

                    duration: 1.2,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}



                src={urlFor(pageInfo?.profilePic).url()}

                alt=""

                className=" -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] "
            />

            <div className=" sapce-y-10 px-0 md:px-10">

                <h4 className=" text-4xl font-semibold">
                    Here is My <span className=" underline decoration-[#F7AB0A]/50"> Professional</span> {""}
                     background
                </h4>
                <p className="text-sm">
                   {pageInfo?.backgroundInformations}
                </p>
            </div>


        </motion.div>
    )
}

export default About