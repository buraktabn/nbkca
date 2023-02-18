import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ValuesCard from '@/components/Values'
import Clients from '@/components/Clients'
import Works from '@/components/Works'
import YellowArea from '@/components/YellowArea'
import Posts from '@/components/Posts'
import Qoute from '@/components/Qoute'
import Services from '@/components/Services'
import FooterSec from '@/components/Footer/FooterSec'
import HeroSecond from '@/components/Hero/Second'

import { app, posts, services, valuesItems, works } from '@/services/app'
import HeroMain from '@/components/Hero/Main'
import HeroMega from '@/components/Hero/Mega'
import HeroImage from '@/components/Hero/Image'
import BlogContent from '@/components/Blog/BlogContent'
import BlogOther from '@/components/Blog/BlogOther'
import { useRouter } from 'next/router'
import HeroThird from '@/components/Hero/Third'
import ProjectContent from '@/components/Project/ProjectContent'
import ProjectOther from '@/components/Project/ProjectOther'


const inter = Inter({ subsets: ['latin'] })

export default function Project() {

  const router = useRouter();

  let { pid } = router.query;

  console.log("router: ", router)
    let project = works.find((project) => project.slug === pid)

    if(!project || !pid) {
        return (
            <p>project not found!</p>
        )
    }
    return (
        <>
            <Head>
                <title>{project?.title} | {app.brand.title}</title>
                <meta name="description" content={project?.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={"body-content"}>
                <Navbar type="menu"/>

                <HeroThird title={project.title} description={project.title} image={project.image} options={project?.options} />

                <div className="page-content">
                    <div className="section wf-section">
                        <ProjectContent text={project.text} />
                    </div>
                    <div className="section gray wf-section">
                      <ProjectOther title="RELATED WORK"/>
                    </div>

                    <section className="section wf-section">
                        <Qoute />
                    </section>

                    <Footer />
                    <FooterSec />
                </div>
            </main>
        </>
    )
}
