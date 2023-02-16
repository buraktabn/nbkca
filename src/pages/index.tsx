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
import { app, posts, services, valuesItems, works } from '@/services/app'
import Services from '@/components/Services'
import FooterSec from '@/components/Footer/FooterSec'
import HeroSlider from '@/components/Hero/Slider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | {app.brand.title}</title>
        <meta name="description" content={app.brand.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"body-content"}>
        <Navbar />

        <HeroSlider />
        
        <section className="section wf-section">
          <Services title="" services={services} />
        </section>

        <section className="section inner wf-section">
          <ValuesCard 
            title="Promise & Values"
            label="We build possibilities."
            description="We’ve built a team of in-house experts as well as a broad network of specialists so that we can deliver exactly what you need in creative solutions, technology, and materials. "
            items={valuesItems}
          />
        </section>

        <section className="section inner wf-section">
          <Clients />
        </section>


        {/* complted */}
        <section className="section wf-section">
          <Works 
            title="Our Work" 
            items={works} 
          />
        </section>
        

        <section className="section inner wf-section">
          <ValuesCard 
              title="Promise & Values"
              label="We build possibilities."
              description="We’ve built a team of in-house experts as well as a broad network of specialists so that we can deliver exactly what you need in creative solutions, technology, and materials. "
              items={valuesItems}
          />
        </section>


        <section className="section inner wf-section">
          <ValuesCard 
              title="Promise & Values"
              label="We build possibilities."
              description="We’ve built a team of in-house experts as well as a broad network of specialists so that we can deliver exactly what you need in creative solutions, technology, and materials. "
              items={valuesItems}
          />
        </section>

        <section className="section color wf-section">
          <YellowArea />
        </section>

        <section className="section gray wf-section">
          <Posts limit={2} items={posts} />
        </section>

        <section className="section wf-section">
          {/* <Qoute /> */}
        </section>

        <Footer />

        <FooterSec />

      </main>
    </>
  )
}
