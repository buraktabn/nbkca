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

import { app, services, valuesItems, works } from '@/services/app'
import HeroMain from '@/components/Hero/Main'
import HeroMega from '@/components/Hero/Mega'
import HeroImage from '@/components/Hero/Image'
import BlogContent from '@/components/Blog/BlogContent'
import BlogOther from '@/components/Blog/BlogOther'
import { useRouter } from 'next/router'
import { getPosts, urlFor } from '@/lib/sanity'
import moment from 'moment'


const inter = Inter({ subsets: ['latin'] })

export default function Post({post, posts}: {post: Type.Post, posts: Type.Post[]}) {

    let { coverImage } = post;
    return (
        <>
            <Head>
                <title>{post?.title} | {app.brand.title}</title>
                <meta name="description" content={post?.excerpt} />
            </Head>
            <main className={"body-content"}>
                <Navbar type="menu"/>
                <HeroImage title={moment(post.date).format('ll')} description={post.title} image={urlFor(coverImage?.asset._ref as string).auto('format').fit('max').width(460).height(370).toString()} />
                <div className="page-content">
                    <div className="section wf-section">
                      <BlogContent text={post.excerpt} />
                    </div>
                    {posts.length > 0 && <div className="section gray wf-section">
                     <BlogOther title="OTHER NEWS" posts={posts}/>
                    </div>}
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


export async function getStaticPaths() {
    const posts = await getPosts();
    const paths = posts.map((post: Type.Post) => ({
      params: { pid: post.slug.current },
    }));
    return { paths, fallback: false };
  }
  
  export async function getStaticProps({ params }: any) {
    let { pid } = params;
    let posts = await getPosts();
    let post = posts.find((post: Type.Post) => post.slug.current === pid);
    posts = (() => posts?.filter((post: Type.Post) => post.slug.current !== pid))();
    return { props: { post, posts } }
  }