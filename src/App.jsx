import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Counter from './components/Counter.jsx'
import Collaborate from './components/Collaborate.jsx'
import Users from './components/Users.jsx'
import HowWork from './components/HowWork.jsx'
import Benefit from './components/Benefit.jsx'
import Reviews from './components/Reviews.jsx'
import Pricing from './components/Pricing.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ButtonStart from './components/startbutton.jsx'

function App() {
  return (
    <> 

      <main className="main" id="top" scroll-to-top="scroll-to-top">
        <div className="content">
          <Navbar/>
          <div data-bs-target="#navbar" data-bs-spy="scroll" tabIndex="0">
              {/* <Other components/> */}
              <Hero/>
              <Counter/>
              <Users/>
              <Collaborate/>
              <HowWork/>
              <Benefit/>
              <Reviews/>
              <Pricing/>
              <FAQ/>
              <Contact/>
          </div>
          <ButtonStart/>
          <Footer/>
        </div>
      </main>

    </>
  )
}

export default App
