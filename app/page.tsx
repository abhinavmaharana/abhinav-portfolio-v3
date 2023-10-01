import AboutMe from '@/components/AboutMe/AboutMe'
import Hero from '@/components/Hero/Hero'
import Footer from '@/components/Navigation/Footer/Footer'
import Header from '@/components/Navigation/Header/Header'
import LatestProjects from '@/components/Projects/LatestProjects/LatestProjects'
import Skills from '@/components/Skills/Skills'
import Testimonial from '@/components/Testimonial/Testimonial'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <LatestProjects />
      <Testimonial />
      <Footer />
    </>
  )
}
