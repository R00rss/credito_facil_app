import React, { createRef, forwardRef } from 'react'
import Navbar from './components/header/Navbar'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Services from './pages/Services'
import "./App.css"

const App = () => {
  const contact = createRef()
  const aboutUs = createRef()
  const home = createRef()
  const services = createRef()
  const reference = { "contact": contact, "aboutUs": aboutUs, "home": home, "services": services }
  const Divisor = forwardRef((props, ref) => {
    return <div ref={ref}
      style={
        {
          height: "var(--heightNavbar)",
          width: "100%",
          /* backgroundColor: "#000000" */
          backgroundColor: "var(--bgColor)"
        }
      }
      className="divisor"></div>
  })
  return (
    <div ref={home} className='app_container'>
      <Navbar reference={reference} />
      <div className='bgImage'>
        <div className="content">
          <h1>¡Crea momentos <strong>inolvidables</strong> junto a <strong>nosotros</strong>!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ratione laudantium sit omnis magnam cumque praesentium enim aliquid illo inventore repellendus sunt impedit quos nulla, suscipit eos, corrupti, assumenda soluta.


          </p>
        </div>
      </div>
      {/* <Divisor/>
      <Home />
       */}
      <Divisor ref={aboutUs} />
      <AboutUs />
      <Divisor ref={contact} />
      <Contact />
      <Divisor ref={services} />
      <Services />
      <Divisor />
    </div>
  )
}

export default App
