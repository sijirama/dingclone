import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Companies from "./components/Companies"
import Methods from "./components/Methods"
import Achievements from "./components/Achievements"
import Categories from "./components/Categories"
//import Feedback from "./components/Feedback"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"

function App(){


  return (
    <main>
        <Navbar />
        <Hero />
        <Companies />
        <Methods />
        <Achievements />
        <Categories />
        <CallToAction />
        <Footer />
    </main>
  )
}

export default App
