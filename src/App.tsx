import { BackToTop } from './components/layout/BackToTop'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Leadership } from './components/sections/Leadership'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { navItems } from './data/profile'
import { useActiveSection } from './hooks/useActiveSection'

const navIds = navItems.map((item) => item.id)
// Sections that exist on the page but have no nav link of their own.
const otherIds = ['leadership']

export default function App() {
  const active = useActiveSection(navIds, otherIds)

  return (
    <>
      <Navbar active={active} />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
