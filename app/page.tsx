import Hero from "./components/Hero"
import AboutUs from "./components/AboutUs"
import Skills from "./components/Skills"
import PortfolioGrid from "./components/PortfolioGrid"
import Timeline from "./components/Timeline"
import ContactForm from "./components/ContactForm"
import FloatingActionButton from "./components/FloatingActionButton"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Skills />
      <PortfolioGrid />
      <Timeline />
      <ContactForm />
      <FloatingActionButton />
    </>
  )
}
