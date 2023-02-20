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
import { getPosts } from '@/lib/sanity'

const inter = Inter({ subsets: ['latin'] })

export default function Blog({posts}: any) {
  return (
    <>
      <Head>
        <title>Blog | {app.brand.title}</title>
        <meta name="description" content={app.brand.description} />
      </Head>
      <main className={"body-content"}>
        <Navbar type="menu"/>
        <HeroMain />
        <div className="section wf-section">
          <Posts items={posts} />
        </div>
        <section className="section wf-section">
          <Qoute />
        </section>
        <Footer />
        <FooterSec />
      </main>
    </>
  )
}
export async function getStaticProps({ params }: any) {
  const posts = await getPosts();
  return { props: { posts } }
}