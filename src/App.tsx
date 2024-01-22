
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Feature from './components/Features/Feature'
import Resources from './components/Resources'
import Footer from './components/Features/Footer/Footer'
import ClientSlider from './components/Clients/ClientSlider'

function App() {


  return (
    <>
     <Nav />
     <Hero />
     <ClientSlider />
     <Stats />
     <Feature />
     <Resources />
     <Footer />
    </>
  )
}

export default App
