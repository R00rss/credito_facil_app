import React from 'react'
import wpp_ico from "../media/logos/whatsapp_icon.png"
import "./Contact.css"
const Contact = () => {
  return (
    <div className='contact__container'>
      <div className="content">
        <div className="title">
          <h1>
            ¡Contactanos!
          </h1>
        </div>
        <div className="body">
          <article>
            <p><strong>Telf:</strong> 0978738369 </p>
          </article>
          <article>
            <p><strong>Direcion:</strong> Av. America y Selva alagre </p>
          </article>
          <article>
            <p><strong>Facebook: </strong> Credito facil oficial</p>
          </article>
          <article>
            <p>
              <strong>Whatsapp: </strong>
              <a className='wpp_ico' href="https://wa.me/5930978738369?text=Me%20interesa%20el%20auto%20que%20estás%20vendiendo" target="_blank" rel="noreferrer noopener">
                <img src={wpp_ico} alt="" />
              </a>
            </p>
          </article>
        </div>

      </div>
      <div className="contact__img" />
    </div>
  )
}


export default Contact