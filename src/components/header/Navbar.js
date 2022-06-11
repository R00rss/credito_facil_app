import React from 'react'
import "./Navbar.css"
const Navbar = ({ reference }) => {
    const handleClic = (reference) => reference.current.scrollIntoView({ behavior: 'smooth' })
    return (
        <div className='navbar__container'>
            <div className="navbar__item home__item">
                <button onClick={() => (handleClic(reference.home))}>
                    HOME
                </button>
            </div>
            <div className="navbar__item aboutUs__item">
                <button onClick={() => (handleClic(reference.aboutUs))}>
                    CONOCENOS
                </button>
            </div>
            <div className="navbar__item contact__item">
                <button onClick={() => (handleClic(reference.contact))}>
                    CONTACTANOS
                </button>
            </div>
            <div className="navbar__item service__item">
                <button onClick={() => (handleClic(reference.services))}>
                    DESCUBRE
                </button>
            </div>
        </div>
    )
}

export default Navbar