import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const BookARoom = (props) => {
  return (
    <>
      <div className="book-a-room-container">
        <Head>
          <title>Book A Room - Escape Hilo</title>
          <meta
            name="description"
            content="Book A Room for Escape Hilo's Jungle Mystery, with over 100 five star reviews on Google Maps, we serve the best puzzle experience to all visiting the big island"
          />
          <meta property="og:title" content="Book A Room - Escape Hilo" />
          <meta
            property="og:description"
            content="Book A Room for Escape Hilo's Jungle Mystery, with over 100 five star reviews on Google Maps, we serve the best puzzle experience to all visiting the big island"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d8a275fd-b49f-4d98-9aa9-bca55fe93fce/6ef73341-1155-4669-964b-c4bcaeb5b3a6?org_if_sml=1"
          />
        </Head>
        <Header rootClassName="header-root-class-name2"></Header>
        <div className="book-a-room-section1">
          <div className="book-a-room-container1">
            <div className="book-a-room-container2">
              <span className="book-a-room-text text2XL">
                MAKE A RESERVATION
              </span>
              <iframe
                src="https://fareharbor.com/embeds/book/escapehilo/items/58566/?full-items=yes&amp;u=84441f3f-1c27-44c8-9146-8ef90bd95998&amp;from-ssl=yes&amp;back=https://www.escapehilo.com/"
                allowFullScreen="true"
                className="book-a-room-iframe"
              ></iframe>
            </div>
          </div>
          <div className="book-a-room-banner">
            <h1 className="book-a-room-text01 montserratTitles">
              <span>Why should you book with Escape Hilo?</span>
              <span></span>
            </h1>
            <span className="book-a-room-text04">
              <span>
                Escape Hilo is not only the number #1 Big Island Escape Room,
                and close to being one of Hawaii&apos;s best escape rooms, it is
                one of Hilo&apos;s best adventures. Hilo Hawai&apos;i is a small
                town with a population of roughly 45,000+
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                known for its vast island storefronts, bars, and art, downtown
                Hilo is often one of the many stops across the island to
                experience it&apos;s natural beauty. Hikes, ziplines,
                waterfalls, caves, diving spots, lava flows, you name it.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                Do you know what
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="book-a-room-text11">else</span>
              <span> there is to explore?</span>
              <br></br>
              <span></span>
              <span></span>
              <br></br>
              <span>
                One of the most unique Escape Room&apos;s you will ever
                experience, operated by one of the most unique people you will
                ever meet. With over 5+ years operating strong with themes like
                our famous ( old room ) Christmas Mystery and newly launched
                Jungle Mystery themed Escape Room.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                It&apos;s easy to reach from Hilo
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="book-a-room-text22">and</span>
              <span> Kona with parking almost always available out front.</span>
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className="book-a-room-image"
          />
        </div>
        <a
          href="https://fareharbor.com/embeds/book/escapehilo/items/58566/?full-items=yes&amp;u=84441f3f-1c27-44c8-9146-8ef90bd95998&amp;from-ssl=yes&amp;back=https://www.escapehilo.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="book-a-room-link button"
        >
          Book Your Jungle Mystery Today!
        </a>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .book-a-room-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
          }
          .book-a-room-section1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-pimary-900);
          }
          .book-a-room-container1 {
            width: 100%;
            display: flex;
            max-width: 1320px;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: column;
          }
          .book-a-room-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .book-a-room-text {
            color: #000000;
          }
          .book-a-room-iframe {
            width: 100%;
            height: 1200px;
          }
          .book-a-room-banner {
            width: 100%;
            display: flex;
            padding: 48px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .book-a-room-text01 {
            text-align: center;
          }
          .book-a-room-text04 {
            max-width: 1400px;
            margin-top: 32px;
            text-align: center;
            margin-bottom: 32px;
          }
          .book-a-room-text11 {
            font-style: italic;
          }
          .book-a-room-text22 {
            font-style: italic;
          }
          .book-a-room-image {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -1px;
            position: absolute;
            object-fit: cover;
          }
          .book-a-room-link {
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
          .book-a-room-link:hover {
            padding-top: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          @media (max-width: 991px) {
            .book-a-room-banner {
              height: 477px;
              margin-bottom: 0px;
              padding-bottom: 0x;
            }
            .book-a-room-text01 {
              color: #000000;
            }
            .book-a-room-text04 {
              color: #000000;
              max-width: 100%;
            }
          }
          @media (max-width: 767px) {
            .book-a-room-section1 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .book-a-room-container2 {
              width: 100%;
            }
            .book-a-room-banner {
              padding-left: 32px;
              padding-right: 32px;
            }
            .book-a-room-text04 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .book-a-room-banner {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
          }
        `}
      </style>
    </>
  )
}

export default BookARoom
