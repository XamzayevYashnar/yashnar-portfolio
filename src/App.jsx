import TabBar from "./components/TabBar"
import Hero from "./components/Hero"
import About from "./components/About"
import Stack from "./components/Stack"
import Projects from "./components/Projects"
import Activity from "./components/Activity"
import Goals from "./components/Goals"
import Contact from "./components/Contact"

export default function App() {
  return (
    <>
      <TabBar />
      <main className="app">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Activity />
        <Goals />
        <Contact />
      </main>
    </>
  )
}
