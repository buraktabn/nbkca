import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Posts from '@/components/Posts'
import Qoute from '@/components/Qoute'
import Services from '@/components/Services'
import FooterSec from '@/components/Footer/FooterSec'
import HeroSecond from '@/components/Hero/Second'

import { app, services, valuesItems, works } from '@/services/app'
import HeroMain from '@/components/Hero/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | {app.brand.title}</title>
        <meta name="description" content={app.brand.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"body-content"}>
        <Navbar type="menu"/>
        <HeroMain title="LET'S CREATE SOMETHING TOGETHER." />
        <section className="section wf-section">
          <Qoute />
        </section>
        <Footer />
        <FooterSec />
      </main>
    </>
  )
}
