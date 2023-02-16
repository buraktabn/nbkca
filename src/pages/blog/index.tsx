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


const inter = Inter({ subsets: ['latin'] })

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | {app.brand.title}</title>
        <meta name="description" content={app.brand.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"body-content"}>
        <Navbar />

        <HeroMain />

        <div className="section wf-section">
          <Posts items={posts} />
        </div>

        <Footer />

        <FooterSec />

      </main>
    </>
  )
}
