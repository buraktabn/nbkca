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


const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <title>About | {app.brand.title}</title>
        <meta name="description" content={app.brand.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"body-content"}>
        <Navbar />

        <HeroSecond />

        <div className="section wf-section">
          <Services title="" services={services} />
        </div>

        <section className="section color wf-section">
          <YellowArea />
        </section>

        <section className="section wf-section">
          <Qoute />
        </section>

        <Footer />

        <FooterSec />

      </main>
    </>
  )
}
