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
        {
            id: 1, 
            title: "Pre-Design", 
            description: "We assists the client by establishing a budget and addressing all the issues, tangible and intangible, to get a true and clear understanding of potential project cost and risk issues. Our process also helps the client to find the best architectural team to perform design work as the project evolves.", 
            image:"https://nbkgroup.ca/_next/image?url=%2Fassets%2Fservice%2F4.png&w=640&q=75"
        },
        {
            id: 2, 
            title: "Design process", 
            description: "NBK works with the client & design team to review budgets and schedules to ensure that, as design evolves, the construction documents are maintained and the client's best interests are protected.", 
            image: "https://nbkgroup.ca/_next/image?url=%2Fassets%2Fservice%2F3.png&w=640&q=75"
        },
        {
            id: 3, 
            title: "Bids", 
            description: "NBK reviews bids and prepares a bid analysis for the client and design team to review and consider during interviews and discussions with candidate GC’s and contractors. The Ripple Effect works to ensure that the bid covers all the elements and issues relating to the given project, to mitigate change orders and additional costs later in the construction process.", 
            image: "https://nbkgroup.ca/_next/image?url=%2Fassets%2Fservice%2F1.png&w=1920&q=75"
        },
        {
            id: 4, 
            title: "Constraction", 
            description: "The Team works to assist the client in regular meetings with the entire project team to ensure that the project schedule and deliverables are being addressed in a timely and cost-efficient manner. We participate in and report on monthly meetings and progress meetings with the team to give clear guidance and recommendations to the client as needed.", 
            image: "https://nbkgroup.ca/_next/image?url=%2Fassets%2Fservice%2F2.png&w=1920&q=75"
        },
        {
            id: 5, 
            title: "Project Completion", 
            description: "From creating a punch list to walking the entire project, we fine-tune every detail so your site is in tip-top shape.", 
            image: "https://nbkgroup.ca/_next/image?url=%2Fassets%2Fservice%2F5.png&w=1920&q=75"
        }
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
