import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import ContactMe from '../components/ContactMe'
import WorkExperience from '../components/WorkExperience'
import Projects from '../components/Projects'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import {Experience, PageInfo, Project, Skill, Social} from "../typings"
import { fetchSkills } from '../utils/fetchSkills'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageinfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'




type Props={

  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];

};

const  Home=({pageInfo, projects, socials , skills, experiences}:Props) =>{
  return (
    <>

      <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-40/20 scrollbar-thumb-[rgb(247,171,10)]'>
        <Head>
          <title>Software Engineering</title>
          <meta name="description" content="Code beautifully" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header socials= {socials}/> 

        {/* Hero  */}

        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo}/>
        </section>

        {/* About  */}

        <section id="about" className="snap-center">
          <About pageInfo={pageInfo}/>
        </section>

        {/* Experience   */}
        <section id="Experience" className="snap-center">
          <WorkExperience experiences={experiences}/>
        </section>
        {/* Skills  */}

        <section id="skills" className="snap-start">
          <Skills skills={skills}/>
        </section>

        {/* Projects  */}

        <section id="projects" className="snap-center">
          <Projects projects= {projects}/>
        </section>

        {/* Contact Me  */}

        <section id="contactme" className="snap-center">
          <ContactMe/>
        </section>

        <Link href="#hero">

          <footer className=" sticky bottom-5 w-full cursor-pointer">
            <div className=" flex item-center justify-center">
              <img  className=" h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80 "
              alt=""/>
            </div>
          </footer>


        </Link>


      </div>

    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {

    const pageInfo: PageInfo[] = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();
      
    return{
      props:{
        pageInfo, experiences, skills, projects, socials
      },
      revalidate: 10,
    };

  
};

