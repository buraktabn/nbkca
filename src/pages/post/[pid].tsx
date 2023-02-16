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


const inter = Inter({ subsets: ['latin'] })

export default function Blog() {

  const router = useRouter();

  let { pid } = router.query;

  console.log("router: ", router)
    let post = posts.find((post) => post.slug === pid)

    if(!post || !pid) {
        return (
            <p>Post not found!</p>
        )
    }
    return (
        <>
            <Head>
                <title>{post?.title} | {app.brand.title}</title>
                <meta name="description" content={post?.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={"body-content"}>
                <Navbar />

                <HeroImage title={post.created} description={post.title} image={post.image} />

                <div className="page-content">
                    <div className="section wf-section">
                      <BlogContent text={post.text} />
                    </div>
                    <div className="section gray wf-section">
                      <BlogOther title="OTHER NEWS"/>
                    </div>
                    <Footer />

                    <FooterSec />

                </div>

             

            </main>
        </>
    )
}
