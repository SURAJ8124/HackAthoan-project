import React from 'react'
import './Frame.css'

const Frame = () => {
   const Image1= process.env.PUBLIC_URL + '/Images/img/div-page.svg'
   const Image2= process.env.PUBLIC_URL + '/Images/img/div-order-4.svg'
   const Image3= process.env.PUBLIC_URL + "/Images/img/app-store-en-1.svg"
   const Image4= process.env.PUBLIC_URL + "/Images/img/g47s4qqa6l0pj8sfqgje-1.png"
   const Image5= process.env.PUBLIC_URL + "/Images/img/vector-1.svg"
   const Image6= process.env.PUBLIC_URL + "/Images/img/button-open-chatbot.svg"
   const Image7= process.env.PUBLIC_URL + "/Images/img/button-search.svg"
   const Image8= process.env.PUBLIC_URL + "/Images/img/logo-color-1.svg"
   const Image9= process.env.PUBLIC_URL + "/Images/img/vector.svg"
   const Image10= process.env.PUBLIC_URL + "/Images/img/logo-color-2.svg"
  return (
    <>
     <div className="frame">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="div-next">
            <div className="overlap-group">
              <img className="div-page" alt="Div page" src={Image1} />
              <footer className="footer">
                <div className="div-row">
                  <div className="div-order">
                    <div className="list">
                      <div className="div">
                        <div className="item">
                          <div className="text-wrapper">COMPANY</div>
                        </div>
                        <div className="link-newsletter-wrapper">
                          <div className="text-wrapper">NEWSLETTER</div>
                        </div>
                      </div>
                      <div className="overlap-2">
                        <div className="item">
                          <div className="text-wrapper">CAREERS</div>
                        </div>
                        <div className="link-contact-us-wrapper">
                          <div className="text-wrapper">CONTACT US</div>
                        </div>
                        <div className="link-accessibility-wrapper">
                          <div className="text-wrapper">ACCESSIBILITY</div>
                        </div>
                      </div>
                      <div className="link-sustainability-wrapper">
                        <div className="text-wrapper">SUSTAINABILITY</div>
                      </div>
                      <div className="link-media-center-wrapper">
                        <div className="text-wrapper">MEDIA CENTER</div>
                      </div>
                      <div className="link-privacy-legal-wrapper">
                        <div className="text-wrapper">PRIVACY &amp; LEGAL</div>
                      </div>
                      <div className="link-cookie-settings-wrapper">
                        <div className="text-wrapper">COOKIE SETTINGS</div>
                      </div>
                      <div className="link-sitemap-wrapper">
                        <div className="text-wrapper">SITEMAP</div>
                      </div>
                    </div>
                  </div>
                  <img className="img" alt="Div order" src={Image2} />
                  <div className="overlap-3">
                    <div className="list-item-wrapper">
                      <div className="list-item">
                        <div className="text-wrapper-2">*</div>
                        <p className="p">
                          The consumption and emissions values in the website refer to your geographical IP. This value
                          might be unrealistic if you navigate using VPN or if the position of your Internet provider is
                          imprecise. If you believe you are incorrectly geolocalized, contact your
                        </p>
                        <p className="text-wrapper-3">
                          dealer to get valid consumption and emissions information in your area.
                        </p>
                      </div>
                    </div>
                    <div className="div-body-wrapper">
                      <div className="div-body">
                        <p className="text-wrapper-4">
                          Copyright © 2023 All Olympic information subject to copyright protection. Permission required
                          for reproduction or distribution
                        </p>
                        <p className="text-wrapper-5">All rights reserved. VAT no. IT 00591801204</p>
                      </div>
                    </div>
                  </div>
                </div>
                <img className="app-store-en" alt="App store en" src={Image3} />
              </footer>
            </div>
          </div>
          <img className="gsqqalpjsfqgje" alt="Gsqqalpjsfqgje" src={Image4} />
          <div className="div-fixed-bottom">
            <h1 className="embark-on-an-olympic">
              &#34;Embark on an Olympic journey like never before, where dreams ignite and champions are born.&#34;
            </h1>
          </div>
          <header className="header">
            <div className="nav">
              <div className="overlap-4">
                <div className="list-2">
                  <div className="link-BEYOND-wrapper">
                    <div className="text-wrapper-6">SPORTS</div>
                  </div>
                  <div className="link-OWNERSHIP-wrapper">
                    <div className="text-wrapper-6">NEWS</div>
                  </div>
                  <div className="link-MOTORSPORT-wrapper">
                    <div className="text-wrapper-6">ESPORTS</div>
                  </div>
                </div>
                <div className="athletes">ATHLETES</div>
              </div>
              <div className="overlap-group-2">
                <div className="list-3">
                  <div className="link-store-wrapper">
                    <div className="text-wrapper-6">UPCOMING EVENT</div>
                  </div>
                  <div className="item-2">
                    <img className="vector" alt="Vector" src={Image5} />
                    <div className="heading" />
                  </div>
                </div>
                <div className="link-MUSEUM">SIGN IN</div>
              </div>
              <div className="link-MUSEUM-2">MUSEUM</div>
              <div className="div-d-flex">
                <img className="button-open-chatbot" alt="Button open chatbot" src={Image6} />
                <img className="button-search" alt="Button search" src={Image7} />
                <div className="button-open-menu">
                  <div className="div-2" />
                  <div className="div-2" />
                  <div className="div-2" />
                </div>
              </div>
              <img className="logo-color" alt="Logo color" src={Image8} />
              <img className="vector-2" alt="Vector" src={Image9} />
            </div>
          </header>
          <img className="logo-color-2" alt="Logo color" src={Image10} />
        </div>
      </div>
    </div>
    </>
  )
}

export default Frame