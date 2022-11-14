import { motion } from "framer-motion"

import React from 'react'

type Props = {}

const About = ( props: Props ) => {
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



                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

                alt=""

                className=" -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] "
            />

            <div className=" sapce-y-10 px-0 md:px-10">

                <h4 className=" text-4xl font-semibold">
                    Here is My <span className=" underline decoration-[#F7AB0A]/50"> Professional</span> {""}
                     background
                </h4>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A nostrum dicta et alias vero, sapiente est repudiandae asperiores dolores earum maxime recusandae nam cumque accusamus. Ex cumque qui est illo, itaque mollitia, nostrum delectus atque vero, molestias fugit odio id cupiditate asperiores magni voluptatum impedit nesciunt officia libero? Obcaecati, quisquam tempora! Eveniet blanditiis quidem necessitatibus totam corrupti neque laboriosam explicabo vel quas exercitationem similique ut, perspiciatis tenetur provident, distinctio, adipisci praesentium iusto dolorum dolores officiis illo. Unde omnis laboriosam quia quod, ducimus molestias similique deleniti dicta iusto fuga dolore id aliquid. Laboriosam esse aperiam dolorem dolore ex iusto corporis voluptates.
                </p>
            </div>


        </motion.div>
    )
}

export default About