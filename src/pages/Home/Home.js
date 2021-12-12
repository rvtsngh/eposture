import React from 'react'
import AboutQuestion from '../../container/About/About1/AboutQuestion'
import AboutSolution from '../../container/About/About2/AboutSolution'
import Feature from '../../container/Feature/Feature'
import Hero from '../../container/Hero/Hero'
import Navbar from '../../container/Navbar/Navbar'
import Service from '../../container/Service/Service'

const Home = () => {
    return (
        <>
           <Navbar />
           <Hero />
           <Service />
           <AboutQuestion />
           <AboutSolution />
           <Feature />
        </>
    )
}

export default Home
