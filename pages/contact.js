import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>
            Contact - Hawaii's Jungle Mystery Escape Room | Fun for friends,
            family, groups!
          </title>
          <meta
            name="description"
            content="Escape Hilo, located in Hilo, HI has over 100+ 5⭐ reviews on Google and over 1000+ satisfied escapees, experience our Jungle Mystery Escape Room today!"
          />
          <meta property="og:title" content="Contact - Escape Hilo" />
          <meta
            property="og:description"
            content="Escape Hilo, located in downtown Hilo, south of Kona, on the Big Island is home to the island's best puzzle escape room!"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d8a275fd-b49f-4d98-9aa9-bca55fe93fce/6ef73341-1155-4669-964b-c4bcaeb5b3a6?org_if_sml=1"
          />
        </Head>
        <div className="contact-section1">
          <Header rootClassName="header-root-class-name4"></Header>
          <div className="contact-container1">
            <div className="contact-container2">
              <h3 className="contact-text healine">CONTACT</h3>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className="contact-image"
          />
        </div>
        <a
          href="https://fareharbor.com/embeds/book/escapehilo/items/58566/?full-items=yes&amp;u=84441f3f-1c27-44c8-9146-8ef90bd95998&amp;from-ssl=yes&amp;back=https://www.escapehilo.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="contact-link button"
        >
          Book Your Jungle Mystery Today!
        </a>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-section1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-pimary-900);
          }
          .contact-container1 {
            width: 100%;
            display: flex;
            max-width: 1320px;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-container2 {
            width: 66%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .contact-text {
            color: var(--dl-color-secondary-400);
            text-align: center;
          }
          .contact-image {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -1px;
            position: absolute;
            object-fit: cover;
          }
          .contact-link {
            color: #ffffff;
            width: 100%;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-tripleunit);
            text-align: center;
            transition: 0.3s;
            font-weight: 700;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: #39b300;
          }
          .contact-link:hover {
            padding-top: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          @media (max-width: 767px) {
            .contact-container2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
