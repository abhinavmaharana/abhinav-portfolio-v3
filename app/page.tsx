import Hero from '@/components/Hero/Hero'
import Header from '@/components/Navigation/Header/Header'
import LatestProjects from '@/components/Projects/LatestProjects/LatestProjects'
import Work from '@/components/Projects/Work/Work'
import Skills from '@/components/Skills/Skills'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Work />
      <Skills />
      <LatestProjects />
    </>
  )
}
