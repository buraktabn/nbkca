/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Posts from '@/components/Posts'
import Qoute from '@/components/Qoute'
import FooterSec from '@/components/Footer/FooterSec'
import HeroSecond from '@/components/Hero/Second'

import { app, services, valuesItems, works } from '@/services/app'
import HeroMain from '@/components/Hero/Main'
import Services from '@/components/Services'
import ServiceList from '@/components/Services/ServiceList'

const inter = Inter({ subsets: ['latin'] })

export default function ServicesPage() {

    let servies = [
        {id: 1, title: "Pre-Design", description: "We assists the client by establishing a budget and addressing all the issues, tangible and intangible, to get a true and clear understanding of potential project cost and risk issues. Our process also helps the client to find the best architectural team to perform design work as the project evolves.", image:"https://nbkgroup.ca/_next/image?url=%2Fassets%2Fservice%2F4.png&w=640&q=75"},
        {id: 2, title: "Design process", description: "NBK works with the client & design team to review budgets and schedules to ensure that, as design evolves, the construction documents are maintained and the client's best interests are protected.", image: "https://nbkgroup.ca/_next/image?url=%2Fassets%2Fservice%2F3.png&w=640&q=75"}
    ];
  return (
    <>
        <Head>
            <title>Services | {app.brand.title}</title>
            <meta name="description" content={app.brand.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={"body-content"}>
            <Navbar type="menu"/>
            <HeroMain title="We Make Stuff Happen" />
            <section className="section wf-section">
               
                <div className="columns is-mobile">
                    <div className="column is-8">
                        <h1 className="GoalVision_title___lmSj">Goal and Vision</h1>
                        <p className="GoalVision_subtitle__i1ks0">Every project starts by discovering where you are—and where you want to go. By understanding what you want, we can start to build your vision.</p>
                    </div>
                    <div className="column column-button">
                        <div className="is-flex">
                            <a className="button is-outlined is-rounded is-white GoalVision_btn__ESLpY" href="/contact">Contact Us</a>
                        </div>
                    </div>
                </div>
            {/* <Qoute /> */}
            </section>
            <section className="section wf-section">
                <ServiceList services={servies} />
            {/* <Qoute /> */}
            </section>
            <Footer />
            <FooterSec />
        </main>
    </>
  )
}
