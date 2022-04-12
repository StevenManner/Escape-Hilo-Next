import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Contact = (props) => {
  return (
    <>
      <div className="container">
        <Head>
          <title>
            Contact - Hawaii's Jungle Mystery Escape Room | Top-Rated Escape
            room in Hilo!
          </title>
          <meta
            name="description"
            content="You have 60 minutes to escape from our live-action jungle mystery escape room! Crack the codes, solve the puzzles, and escape! 100+ 5⭐ reviews on Google"
          />
          <meta
            property="og:title"
            content="Contact - Hawaii's Jungle Mystery Escape Room | Top-Rated Escape room in Hilo!"
          />
          <meta
            property="og:description"
            content="You have 60 minutes to escape from our live-action jungle mystery escape room! Crack the codes, solve the puzzles, and escape! ✔ 100+ ⭐5 reviews on Google ✔ 20+ ⭐5 reviews on Tripadvisor. "
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d8a275fd-b49f-4d98-9aa9-bca55fe93fce/6ef73341-1155-4669-964b-c4bcaeb5b3a6?org_if_sml=1"
          />
        </Head>
        <div className="section1">
          <Header rootClassName="rootClassName4"></Header>
          <div className="container1">
            <div className="container2">
              <h3 className="text healine">CONTACT</h3>
              <form enctype="text/plain" className="form"></form>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className="image"
          />
        </div>
        <a
          href="https://fareharbor.com/embeds/book/escapehilo/items/58566/?full-items=yes&amp;u=84441f3f-1c27-44c8-9146-8ef90bd95998&amp;from-ssl=yes&amp;back=https://www.escapehilo.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="link button"
        >
          Book Your Jungle Mystery Today!
        </a>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
          }
          .section1 {
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
          .container1 {
            width: 100%;
            display: flex;
            max-width: 1320px;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .container2 {
            width: 66%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .text {
            color: var(--dl-color-secondary-400);
            text-align: center;
          }
          .form {
            width: 100%;
            height: 100px;
          }
          .image {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -1px;
            position: absolute;
            object-fit: cover;
          }
          .link {
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
          .link:hover {
            padding-top: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          @media (max-width: 767px) {
            .container2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
