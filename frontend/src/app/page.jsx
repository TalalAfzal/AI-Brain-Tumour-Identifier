import React from 'react'
import Hero from './components/Hero'
import Upload from './components/Upload'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
    return (
        <>
            <Hero />
            <Upload />
            <Features />
            <HowItWorks />
            <CTA />
            <Footer />
        </>
    )
}