import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import AppComponent from '../components/component'
import Footer from '../components/footer'

const Sandbox = (props) => {
  return (
    <>
      <div className="sandbox-container">
        <Head>
          <title>/sandbox</title>
          <meta name="description" content="/sandbox" />
          <meta property="og:title" content="/sandbox" />
          <meta
            property="og:description"
            content="You have 60 minutes to escape from our live-action jungle mystery escape room! Crack the codes, solve the puzzles, and escape! ✔ 100+ ⭐5 reviews on Google ✔ 20+ ⭐5 reviews on Tripadvisor. "
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d8a275fd-b49f-4d98-9aa9-bca55fe93fce/6ef73341-1155-4669-964b-c4bcaeb5b3a6?org_if_sml=1"
          />
        </Head>
        <div className="sandbox-hero">
          <div className="sandbox-bg"></div>
          <Header rootClassName="header-root-class-name5"></Header>
          <div className="sandbox-container01">
            <div className="sandbox-container02">
              <h1 className="sandbox-text">
                Jungle Mystery
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h1>
              <span className="sandbox-text01">
                <span>
                  Recover a lost family heirloom before your time expires. You
                  have 60 minutes to solve your way out
                </span>
              </span>
              <video
                src="https://www.youtube.com/watch?v=zWKYufGwSs4"
                poster="https://www.youtube.com/watch?v=zWKYufGwSs4"
                className="sandbox-video"
              ></video>
            </div>
            <AppComponent link_button="https://fareharbor.com/embeds/book/escapehilo/items/58566/?full-items=yes&amp;flow=6078"></AppComponent>
            <img
              alt="image"
              src="/playground_assets/white-vector.svg"
              className="sandbox-image"
            />
          </div>
        </div>
        <div className="sandbox-hero1">
          <div className="sandbox-container03">
            <h1 className="sandbox-text03">Keep it simple</h1>
            <span className="sandbox-text04">
              <span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <br></br>
              <span></span>
              <span>
                <span>
                  Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                  tortor.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <button className="sandbox-button button">Get Started</button>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtaW5pbWFsaXNtJTIwcGxhbnR8ZW58MHx8fHwxNjI2MTgyODMw&amp;ixlib=rb-1.2.1&amp;w=1200"
            className="sandbox-image01"
          />
        </div>
        <div className="sandbox-container04">
          <div className="sandbox-container05">
            <img
              alt="image"
              src="/playground_assets/s._hata_building_hilo-1024x755-1500w.jpg"
              className="sandbox-image02"
            />
          </div>
          <div className="sandbox-container06">
            <img
              alt="image"
              src="/playground_assets/355-1400w.png"
              className="sandbox-image03"
            />
          </div>
        </div>
        <span className="sandbox-text13">
          <span>
            Come and experience the popular physical adventure game right here
            in Downtown Hilo at the historic S.Hata Building! Escape Hilo is a
            unique experience that combines history, adventure, and fun all
            wrapped up in a popular &quot;Escape Room&quot; format. upon arrival
            get debriefed and enter a room to solve your mission. You have 60
            minutes to find clues, solve puzzles, and crack codes before your
            time runs out.
          </span>
        </span>
        <label id="time" htmlFor="time" className="sandbox-text15 textarea">
          <span>60:00</span>
        </label>
        <AppComponent rootClassName="app-component-root-class-name1"></AppComponent>
        <div className="sandbox-section1">
          <div className="sandbox-container07">
            <div className="sandbox-container08">
              <h6 className="sandbox-text17">
                <span>Escape hilo presents...</span>
              </h6>
              <h3 className="sandbox-text19">YOUR MISSION: Jungle Mystery</h3>
              <span className="sandbox-text20 textXL">
                <span className="sandbox-text21">
                  Your group has 1 hour to escape from Escape Hilo&apos;s Hawaii
                  jungle themed Escape Room!
                </span>
              </span>
            </div>
            <div className="sandbox-cards-container">
              <div className="sandbox-card1">
                <div className="sandbox-container09">
                  <svg viewBox="0 0 1024 1024" className="sandbox-icon">
                    <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"></path>
                  </svg>
                </div>
                <h6 className="sandbox-text22 textXL">FOLLOW THE CLUES</h6>
                <span className="sandbox-text23">
                  There are clues hidden throughout the game room that help
                  guide your next decision
                </span>
              </div>
              <div className="sandbox-card2">
                <div className="sandbox-container10">
                  <svg viewBox="0 0 1024 1024" className="sandbox-icon02">
                    <path d="M704 0c-176.73 0-320 143.268-320 320 0 20.026 1.858 39.616 5.376 58.624l-389.376 389.376v192c0 35.346 28.654 64 64 64h64v-64h128v-128h128v-128h128l83.042-83.042c34.010 12.316 70.696 19.042 108.958 19.042 176.73 0 320-143.268 320-320s-143.27-320-320-320zM799.874 320.126c-53.020 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z"></path>
                  </svg>
                </div>
                <h6 className="sandbox-text24 textXL">FIND THE KEYS</h6>
                <span className="sandbox-text25">
                  Keys are used to progress to the next puzzle, can you find
                  them all before time runs out?
                </span>
              </div>
              <div className="sandbox-card3">
                <div className="sandbox-container11">
                  <svg viewBox="0 0 1024 1024" className="sandbox-icon04">
                    <path d="M426 726l384-384-60-62-324 324-152-152-60 60zM810 128q36 0 61 25t25 61v596q0 36-25 61t-61 25h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                  </svg>
                </div>
                <h6 className="sandbox-text26 textXL">SOLVE THE MYSTERY</h6>
                <span className="sandbox-text27">
                  Solve your way through the jungle room by using your wits and
                  creativity
                </span>
              </div>
            </div>
            <div className="sandbox-cards-container1">
              <div className="sandbox-card21">
                <div className="sandbox-container12">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="sandbox-icon06"
                  >
                    <path d="M804.571 73.143c0 211.429-101.143 364.571-213.143 438.857 112 74.286 213.143 227.429 213.143 438.857h54.857c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-841.143c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h54.857c0-211.429 101.143-364.571 213.143-438.857-112-74.286-213.143-227.429-213.143-438.857h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h841.143c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-54.857zM499.429 477.714c115.429-43.429 232-196 232-404.571h-585.143c0 208.571 116.571 361.143 232 404.571 14.286 5.143 24 18.857 24 34.286s-9.714 29.143-24 34.286c-49.143 18.286-98.857 57.143-139.429 112h400c-40.571-54.857-90.286-93.714-139.429-112-14.286-5.143-24-18.857-24-34.286s9.714-29.143 24-34.286z"></path>
                  </svg>
                </div>
                <h6 className="sandbox-text28 textXL">60 MINUTE TIME LIMIT</h6>
                <span className="sandbox-text29">
                  Can you and your group solve all the puzzles before time runs
                  out?
                </span>
              </div>
            </div>
            <AppComponent></AppComponent>
            <div className="sandbox-work-with-us">
              <div className="sandbox-container13">
                <h3 className="sandbox-text30">
                  Not convinced? Hear from our previous winners!
                </h3>
                <span className="sandbox-text31 blinkerParagraphs">
                  <span className="sandbox-text32">
                    Awesome game, awesome time. This was my first time playing
                    and what I had envisioned it to be; it was exactly that. It
                    was exciting, challenging, and completely well thought out.
                    - Holly
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="sandbox-text33"></br>
                  <span className="sandbox-text34"></span>
                  <br className="sandbox-br"></br>
                  <span className="sandbox-text35">
                    The experience was amazing. Unlike anything else in Hilo.
                    Definitely would recommend to any locals or anyone visiting
                    the island. - Elias
                  </span>
                  <br className="sandbox-text36"></br>
                  <span className="sandbox-text37"></span>
                  <br className="sandbox-text38"></br>
                  <span className="sandbox-text39">
                    We have done a couple of escape rooms before and this one
                    was really ingenious, and challenging enough to be fun but
                    not too hard. A great way to spend an hour in Hilo! - Jim
                  </span>
                  <br className="sandbox-br1"></br>
                </span>
              </div>
              <div className="sandbox-container14">
                <div className="sandbox-container15">
                  <img
                    alt="image"
                    src="/playground_assets/2-1500h.jpg"
                    loading="lazy"
                    className="sandbox-image04"
                  />
                </div>
                <img
                  alt="stars"
                  src="/playground_assets/5stars-200h.png"
                  loading="lazy"
                  className="sandbox-image05"
                />
                <h4 className="sandbox-text40 healine">
                  Five Star Reviews on Google!
                </h4>
                <span className="sandbox-text41 blinkerParagraphs">
                  <span>
                    With over 100 reviews on Google Maps, Escape Hilo continues
                    to craft a unique novelty experience for everyone
                  </span>
                </span>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className="sandbox-image06"
          />
        </div>
        <div className="sandbox-testimonial-card">
          <svg viewBox="0 0 950.8571428571428 1024" className="sandbox-icon08">
            <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
          </svg>
          <span className="sandbox-text43 blinkerParagraphs">
            <span>
              Escape Hilo provided my sister and I a great experience! Did we
              escape? No. However, we both had a blast running around, solving
              clues, and jump scared by the animatronics. Our host Ryan is
              fantastic at his job too. His exuberant attitude made our visit
              worthwhile portraying what excellent local hospitality is. His
              personality is a vibe. We both highly recommend that anyone who is
              either tourist or local to come escape.
            </span>
            <br></br>
            <span>Good luck!</span>
          </span>
          <div className="sandbox-testimonial">
            <span className="sandbox-text46 montserratTitles">Ramses G.</span>
            <img
              alt="image"
              src="/playground_assets/ryan_2-200h.png"
              loading="lazy"
              className="sandbox-image07"
            />
          </div>
          <img
            alt="image"
            src="/playground_assets/5stars-200h.png"
            className="sandbox-image08"
          />
        </div>
        <div className="sandbox-section2">
          <div className="sandbox-team">
            <div className="sandbox-container16">
              <div className="sandbox-container17"></div>
              <div className="sandbox-container18">
                <img
                  alt="image"
                  src="/playground_assets/ryan_3-200h.png"
                  loading="lazy"
                  className="sandbox-image09"
                />
                <span className="sandbox-text47 montserratTitles">
                  Julie R.
                </span>
                <img
                  alt="image"
                  src="/playground_assets/5stars-200h.png"
                  className="sandbox-image10"
                />
                <span className="sandbox-text48 blinkerParagraphs">
                  <span className="sandbox-text49">
                    {' '}
                    Our family had an absolute blast!! The escape room was super
                    well done, a perfect mix of challenges &amp; fun. The owner
                    Ryan has to be one of the nicest people on the planet,
                    making our experience even more fun :) I would definitely
                    recommend!
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="sandbox-container19"></div>
              <div className="sandbox-container20">
                <img
                  alt="image"
                  src="/playground_assets/ryan_5-200h.png"
                  loading="lazy"
                  className="sandbox-image11"
                />
                <span className="sandbox-text50 montserratTitles">
                  Tiffany Plagenza
                </span>
                <img
                  alt="image"
                  src="/playground_assets/5stars-200h.png"
                  className="sandbox-image12"
                />
                <span className="sandbox-text51 blinkerParagraphs">
                  <span>
                    We escaped! This was the most fun we have had with a great
                    challenge. We came to Hilo, Hawaii just to visit this escape
                    room after attempting to escape the Samurai room 2 years
                    ago. 5 star experience.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="sandbox-testimonial-card1">
          <svg viewBox="0 0 950.8571428571428 1024" className="sandbox-icon10">
            <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
          </svg>
          <div className="sandbox-testimonial1">
            <span className="sandbox-text53 blinkerParagraphs">
              <span>
                What a cool place. Every escape room has its own uniqueness.
                This one did not disappoint. The game master is really cool and
                exciting. The theme is great. Can’t give away any details or it
                will ruin the fun. Definitely recommend.
              </span>
            </span>
            <span className="sandbox-text55 montserratTitles">
              Brandon Hoffman
            </span>
            <img
              alt="image"
              src="/playground_assets/ryan_4-200h.png"
              loading="lazy"
              className="sandbox-image13"
            />
          </div>
          <img
            alt="image"
            src="/playground_assets/5stars-200h.png"
            className="sandbox-image14"
          />
        </div>
        <a
          href="https://fareharbor.com/embeds/book/escapehilo/items/58566/?full-items=yes&amp;u=84441f3f-1c27-44c8-9146-8ef90bd95998&amp;from-ssl=yes&amp;back=https://www.escapehilo.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="sandbox-link button"
        >
          Book Your Jungle Mystery Today!
        </a>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .sandbox-container {
            width: 100%;
            height: auto;
            display: flex;
            position: inherit;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sandbox-hero {
            flex: 0 0 auto;
            width: 100%;
            height: 80vh;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url("/playground_assets/escapehilo-bigisland-hilohawaii-hawaii's%20finest%20escape%20room-1500h.jpg");
          }
          .sandbox-bg {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            opacity: 0.7;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
            background-color: var(--dl-color-gray-black);
          }
          .sandbox-container01 {
            top: auto;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sandbox-container02 {
            display: flex;
            z-index: 100;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            justify-content: center;
          }
          .sandbox-text {
            color: var(--dl-color-gray-white);
            z-index: 100;
            text-align: center;
          }
          .sandbox-text01 {
            color: #ffffff;
            max-width: 600px;
            text-align: center;
          }
          .sandbox-video {
            width: 100%;
            height: 100%;
          }
          .sandbox-image {
            left: auto;
            right: 0px;
            width: 100%;
            bottom: 0px;
            display: none;
            position: absolute;
            object-fit: cover;
          }
          .sandbox-hero1 {
            width: 100%;
            display: flex;
            padding: 48px;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sandbox-container03 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .sandbox-text03 {
            font-size: 3rem;
          }
          .sandbox-text04 {
            margin-top: 32px;
            text-align: center;
            padding-left: 48px;
            margin-bottom: 32px;
            padding-right: 48px;
          }
          .sandbox-button {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            padding-bottom: var(--dl-space-space-unit);
          }
          .sandbox-button:hover {
            transform: scale(1.02);
          }
          .sandbox-image01 {
            width: 45rem;
            margin-top: 32px;
          }
          .sandbox-container04 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .sandbox-container05 {
            flex: 0 0 auto;
            width: 20rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sandbox-image02 {
            width: 20rem;
            object-fit: cover;
            border-color: #003394;
            border-width: 2px;
          }
          .sandbox-container06 {
            flex: 0 0 auto;
            width: 20rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sandbox-image03 {
            width: 20rem;
            object-fit: cover;
          }
          .sandbox-text13 {
            color: #000000;
            font-style: normal;
            text-align: center;
            font-weight: 400;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: 6rem;
            padding-right: 6rem;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .sandbox-text15 {
            color: #009201;
            font-size: 2rem;
            font-weight: 700;
          }
          .sandbox-section1 {
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
          .sandbox-container07 {
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            flex-direction: column;
          }
          .sandbox-container08 {
            width: 66%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .sandbox-text17 {
            color: #39b300;
            font-size: 0.875em;
            font-style: normal;
            font-weight: 700;
            text-transform: uppercase;
          }
          .sandbox-text19 {
            color: var(--dl-color-secondary-400);
            font-size: 1.12rem;
            text-align: center;
            font-family: Montserrat;
            font-weight: 700;
            line-height: 1.75;
            text-transform: none;
            text-decoration: none;
          }
          .sandbox-text20 {
            color: #000000;
            text-align: center;
            margin-bottom: 0.25rem;
          }
          .sandbox-text21 {
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(241, 245, 249);
          }
          .sandbox-cards-container {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .sandbox-card1 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .sandbox-container09 {
            flex: 0 0 auto;
            width: auto;
            height: 3rem;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .sandbox-icon {
            width: 3rem;
          }
          .sandbox-text22 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
          }
          .sandbox-text23 {
            color: #000000;
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Open Sans;
            line-height: 1.625rem;
          }
          .sandbox-card2 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .sandbox-container10 {
            flex: 0 0 auto;
            width: 3rem;
            height: 3rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sandbox-icon02 {
            width: 3rem;
          }
          .sandbox-text24 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
          }
          .sandbox-text25 {
            color: #000000;
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Open Sans;
            line-height: 1.625rem;
          }
          .sandbox-card3 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .sandbox-container11 {
            flex: 0 0 auto;
            width: auto;
            height: 3rem;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .sandbox-icon04 {
            width: 3rem;
          }
          .sandbox-text26 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
          }
          .sandbox-text27 {
            color: #000000;
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Open Sans;
            line-height: 1.625rem;
          }
          .sandbox-cards-container1 {
            height: 323px;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .sandbox-card21 {
            width: 420px;
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .sandbox-container12 {
            flex: 0 0 auto;
            width: 86px;
            height: 87px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .sandbox-icon06 {
            width: 3rem;
          }
          .sandbox-text28 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
          }
          .sandbox-text29 {
            color: #000000;
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Open Sans;
            line-height: 1.625rem;
          }
          .sandbox-work-with-us {
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
          }
          .sandbox-container13 {
            flex: 0 0 auto;
            width: 41%;
            display: flex;
            align-items: flex-start;
            margin-left: auto;
            margin-right: auto;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .sandbox-text30 {
            color: #000000;
            font-size: 1.5rem;
            font-family: Montserrat;
            font-weight: 700;
            line-height: 2;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: none;
            text-decoration: none;
          }
          .sandbox-text31 {
            color: #000000;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .sandbox-text32 {
            font-style: normal;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(241, 245, 249);
          }
          .sandbox-text33 {
            font-style: normal;
            font-weight: 400;
          }
          .sandbox-text34 {
            font-style: normal;
            font-weight: 400;
          }
          .sandbox-br {
            font-style: normal;
            font-weight: 400;
          }
          .sandbox-text35 {
            font-style: normal;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(241, 245, 249);
          }
          .sandbox-text36 {
            font-style: normal;
            font-weight: 400;
          }
          .sandbox-text37 {
            font-style: normal;
            font-weight: 400;
          }
          .sandbox-text38 {
            font-style: normal;
            font-weight: 400;
          }
          .sandbox-text39 {
            font-style: normal;
            font-weight: 400;
          }
          .sandbox-br1 {
            font-style: normal;
            font-weight: 400;
          }
          .sandbox-container14 {
            flex: 0 0 auto;
            width: 33%;
            height: 32rem;
            display: flex;
            position: relative;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: flex-start;
            margin-left: auto;
            margin-right: auto;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: #09A6E9;
          }
          .sandbox-container15 {
            width: 100%;
            height: 243px;
            display: flex;
            align-items: center;
            border-radius: 0px;
            flex-direction: row;
            justify-content: center;
          }
          .sandbox-image04 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            padding-bottom: var(--dl-space-space-unit);
          }
          .sandbox-image05 {
            width: 200px;
            height: 50px;
            align-self: center;
            object-fit: cover;
          }
          .sandbox-text40 {
            color: #ffffff;
            width: 372px;
            font-size: 1.25rem;
            text-align: center;
          }
          .sandbox-text41 {
            color: #f2f5f9ff;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .sandbox-image06 {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -1px;
            position: absolute;
            object-fit: cover;
          }
          .sandbox-testimonial-card {
            display: flex;
            padding: 32px;
            max-width: 1400px;
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .sandbox-icon08 {
            width: 2rem;
            margin-bottom: 32px;
          }
          .sandbox-text43 {
            color: #000000;
            width: 80%;
            text-align: center;
          }
          .sandbox-testimonial {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .sandbox-text46 {
            color: #000000;
            text-align: center;
          }
          .sandbox-image07 {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
          .sandbox-image08 {
            width: 100px;
            object-fit: cover;
          }
          .sandbox-section2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .sandbox-team {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .sandbox-container16 {
            width: 100%;
            display: flex;
            max-width: 100%;
            align-items: flex-start;
            flex-direction: row;
          }
          .sandbox-container17 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            border-color: #000000;
            border-style: inset;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .sandbox-container18 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sandbox-image09 {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
          .sandbox-text47 {
            color: #000000;
            text-align: center;
          }
          .sandbox-image10 {
            width: 100px;
            object-fit: cover;
          }
          .sandbox-text48 {
            color: #000000;
            width: 75%;
            text-align: center;
          }
          .sandbox-text49 {
            font-weight: 400;
          }
          .sandbox-container19 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            border-color: #000000;
            border-style: inset;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .sandbox-container20 {
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sandbox-image11 {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
          .sandbox-text50 {
            color: #000000;
            text-align: center;
          }
          .sandbox-image12 {
            width: 100px;
            object-fit: cover;
          }
          .sandbox-text51 {
            color: #000000;
            width: 75%;
            text-align: center;
          }
          .sandbox-testimonial-card1 {
            display: flex;
            padding: 32px;
            max-width: 1400px;
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .sandbox-icon10 {
            width: 2rem;
            margin-bottom: 32px;
          }
          .sandbox-testimonial1 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .sandbox-text53 {
            color: #000000;
            width: 80%;
            text-align: center;
          }
          .sandbox-text55 {
            color: #000000;
            text-align: center;
          }
          .sandbox-image13 {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
          .sandbox-image14 {
            width: 100px;
            object-fit: cover;
          }
          .sandbox-link {
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
          .sandbox-link:hover {
            padding-top: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          @media (max-width: 991px) {
            .sandbox-hero1 {
              flex-direction: column;
            }
            .sandbox-container03 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: 32px;
            }
            .sandbox-text03 {
              text-align: center;
            }
            .sandbox-text04 {
              text-align: center;
            }
            .sandbox-image01 {
              width: 80%;
            }
            .sandbox-cards-container {
              align-items: center;
              padding-top: var(--dl-space-space-halfunit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .sandbox-card1 {
              width: 90%;
              margin-bottom: var(--dl-space-space-fiveunits);
            }
            .sandbox-card2 {
              width: 90%;
              margin-bottom: var(--dl-space-space-fiveunits);
            }
            .sandbox-card3 {
              width: 90%;
            }
            .sandbox-cards-container1 {
              align-items: center;
              flex-direction: column;
            }
            .sandbox-card21 {
              width: 90%;
              margin-bottom: var(--dl-space-space-fiveunits);
            }
            .sandbox-container14 {
              width: 20rem;
              height: auto;
            }
            .sandbox-text40 {
              width: 100%;
              height: 62px;
              text-align: center;
            }
            .sandbox-text41 {
              width: auto;
              align-self: center;
              text-align: center;
            }
            .sandbox-section2 {
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-doubleunit);
              justify-content: center;
            }
            .sandbox-team {
              position: relative;
            }
            .sandbox-container16 {
              width: 100%;
              max-width: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .sandbox-container17 {
              width: auto;
            }
            .sandbox-container18 {
              margin-right: var(--dl-space-space-unit);
            }
            .sandbox-container19 {
              margin-right: var(--dl-space-space-unit);
            }
            .sandbox-container20 {
              margin: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 767px) {
            .sandbox-container02 {
              z-index: 100;
            }
            .sandbox-text {
              color: #ffffff;
            }
            .sandbox-hero1 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .sandbox-text04 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .sandbox-section1 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .sandbox-container07 {
              max-width: 100%;
            }
            .sandbox-container08 {
              width: 100%;
            }
            .sandbox-work-with-us {
              margin-top: var(--dl-space-space-tripleunit);
              flex-direction: column;
            }
            .sandbox-container13 {
              width: 100%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .sandbox-container14 {
              width: 100%;
            }
            .sandbox-container15 {
              height: 30rem;
            }
            .sandbox-text41 {
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .sandbox-testimonial-card {
              padding-left: 32px;
              padding-right: 32px;
            }
            .sandbox-container16 {
              flex-wrap: wrap;
              flex-direction: row;
              justify-content: center;
            }
            .sandbox-container17 {
              width: 50%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .sandbox-container18 {
              width: 50%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .sandbox-container19 {
              width: 50%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .sandbox-container20 {
              width: 50%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .sandbox-testimonial-card1 {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .sandbox-container {
              flex-wrap: wrap;
            }
            .sandbox-container02 {
              z-index: 100;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .sandbox-image {
              display: flex;
            }
            .sandbox-hero1 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .sandbox-container03 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .sandbox-button {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .sandbox-container04 {
              flex-wrap: wrap;
            }
            .sandbox-image03 {
              max-width: 90%;
              min-width: 80%;
            }
            .sandbox-text13 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .sandbox-text19 {
              color: #000000;
              font-size: 1.5rem;
            }
            .sandbox-card1 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .sandbox-text23 {
              text-align: left;
            }
            .sandbox-card2 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .sandbox-text25 {
              text-align: left;
            }
            .sandbox-text27 {
              text-align: left;
            }
            .sandbox-card21 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .sandbox-text29 {
              text-align: left;
            }
            .sandbox-text31 {
              font-style: italic;
            }
            .sandbox-testimonial-card {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .sandbox-icon08 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .sandbox-container16 {
              align-items: center;
              flex-direction: column;
            }
            .sandbox-container17 {
              width: 100%;
            }
            .sandbox-container18 {
              width: 100%;
            }
            .sandbox-container19 {
              width: 100%;
            }
            .sandbox-container20 {
              width: 100%;
            }
            .sandbox-testimonial-card1 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .sandbox-icon10 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Sandbox
