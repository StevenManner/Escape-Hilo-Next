import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'

const Header = (props) => {
  return (
    <>
      <header
        id="header"
        data-role="Header"
        className={`header-header ${props.rootClassName} `}
      >
        <header data-role="Header" className="header-header1">
          <div className="header-container">
            <Link href="/">
              <a className="header-link">
                <img
                  src="/playground_assets/logo-1500h.png"
                  loading="eager"
                  className="header-image"
                />
              </a>
            </Link>
            <div className="header-nav">
              <NavigationLinks
                text3="About"
                text4="FAQ"
                rootClassName="navigation-links-root-class-name8"
              ></NavigationLinks>
            </div>
          </div>
          <div className="header-btn-group">
            <a
              href="https://fareharbor.com/embeds/book/escapehilo/items/58566/?full-items=yes&amp;flow=6078"
              name="Book For Escape Hilo "
              target="_blank"
              rel="noreferrer noopener"
              className="header-link1 button"
            >
              Book Now!
            </a>
          </div>
          <div data-type="BurgerMenu" className="header-burger-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="header-mobile-menu">
            <nav className="header-nav1">
              <div className="header-container1">
                <img
                  alt="image"
                  src="/playground_assets/logo-1500h.png"
                  className="header-image1"
                />
                <div
                  data-type="CloseMobileMenu"
                  className="header-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="header-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="navigation-links-root-class-name9"></NavigationLinks>
            </nav>
            <div>
              <a
                href="https://Instagram.com/EscapeHilo"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="header-icon4"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://Facebook.com/EscapeHilo"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="header-icon6"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .header-header {
            top: 0;
            flex: 0 0 auto;
            width: 100%;
            height: 75px;
            display: flex;
            z-index: 2;
            position: fixed;
            align-items: center;
            padding-top: var(--dl-space-space-unitandhalf);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: 0.75rem;
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unitandhalf);
            justify-content: center;
            background-color: #ffffff;
          }
          .header-header1 {
            left: 0px;
            right: 0px;
            width: 1072px;
            bottom: 0px;
            height: 75px;
            margin: auto;
            display: flex;
            position: absolute;
            max-width: 1400px;
            align-self: stretch;
            justify-content: space-between;
          }
          .header-container {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: center;
          }
          .header-link {
            display: contents;
          }
          .header-image {
            width: 59px;
            height: 50px;
            text-decoration: none;
          }
          .header-nav {
            display: flex;
            align-items: center;
            padding-left: 32px;
            flex-direction: row;
            justify-content: center;
          }
          .header-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .header-link1 {
            color: #08cb00;
            text-align: center;
            font-weight: 700;
            padding-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header-burger-menu {
            display: none;
          }
          .header-icon {
            width: 16px;
            height: 16px;
            display: none;
          }
          .header-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 1000;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .header-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .header-image1 {
            height: 2rem;
          }
          .header-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-icon2 {
            width: 16px;
            height: 16px;
          }
          .header-icon4 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
            text-decoration: none;
          }
          .header-icon6 {
            width: 16px;
            height: 16px;
            text-decoration: none;
          }
          .header-root-class-name {
            margin-bottom: 0px;
          }
          .header-root-class-name1 {
            top: 0px;
            left: 0px;
            position: absolute;
            background-color: #ffffff;
          }
          .header-root-class-name2 {
            top: 0px;
            left: 0px;
            position: absolute;
          }
          .header-root-class-name3 {
            align-self: center;
            margin-bottom: var(--dl-space-space-unit);
          }

          .header-root-class-name5 {
            align-self: center;
          }
          @media (max-width: 991px) {
            .header-header {
              max-width: 100%;
              margin-bottom: var(--dl-space-space-triplequarter);
            }
            .header-header1 {
              left: -6px;
              width: 100%;
              bottom: 0px;
              position: absolute;
            }
            .header-icon {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .header-header {
              background-color: var(--dl-color-gray-white);
            }
            .header-header1 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .header-nav {
              display: none;
            }
            .header-btn-group {
              display: none;
            }
            .header-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .header-root-class-name {
              margin-bottom: 0px;
            }
          }
          @media (max-width: 479px) {
            .header-header {
              justify-content: space-between;
            }
            .header-header1 {
              top: 0px;
              left: 0px;
              padding: var(--dl-space-space-unit);
              position: absolute;
            }
            .header-mobile-menu {
              height: 60vh;
              display: none;
              padding: 16px;
              z-index: 999999;
            }
            .header-image1 {
              width: auto;
              height: 4rem;
            }
            .header-root-class-name3 {
              width: 100%;
              align-self: center;
            }
            .header-root-class-name5 {
              width: 100%;
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  rootClassName: '',
  heading1: 'ESCAPE HILO',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
}

export default Header
