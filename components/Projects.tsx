import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

function Projects( { }: Props ) {

  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div

      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}



      className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">


      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="  scrollbar-thin scrollbar-track-gray-40/20 scrollbar-thumb-[#f7AB0A] relative w-full  flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">

        {projects.map( ( project, i ) => (


          // eslint-disable-next-line react/jsx-key
          <div className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img 

              initial={{

                y: -300,
                opacity: 0,

              }}

              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}


             

              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" alt=""   />

            <div>
              <h4 className=" text-4xl font-semibold text-center"> <span className=" underline decoration-[#F7AB0A]/50">Case Study {i + 1} of {projects.length}</span> {""}: UPS clone </h4>
              <p className=" text-lg text-center md:text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente cum dolor qui ducimus, quidem totam mollitia nemo. A dolorem nostrum pariatur iure. Facere, molestiae nesciunt voluptas saepe harum sapiente dolore? Culpa quod cupiditate asperiores inventore! Dolor minima rem porro quibusdam consequuntur alias perspiciatis harum explicabo! Dolorum eaque rem quos cum assumenda maiores aspernatur debitis exercitationem sequi quae
              </p>
            </div>

          </div>


        ) )}
      </div>


      <div className=" w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px]  -skew-y-12" />


    </motion.div>
  )
}

export default Projects