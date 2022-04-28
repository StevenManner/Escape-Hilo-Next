import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <a href="https://escapehilo.com" className="navigation-links-link">
          {props.HOMEPAGE}
        </a>
        <a
          href="https://escapehilo.com/about"
          className="navigation-links-link1"
        >
          {props.ABOUTESCAPEHILO}
        </a>
        <Link
          href="/frequently-asked-questions"
          id="faq - frequently asked questions"
        >
          <a className="navigation-links-link2">{props.FAQ}</a>
        </Link>
        <a
          href="https://escapehilo.com/book-a-room"
          id="book a room"
          target="_blank"
          rel="noreferrer noopener"
          className="navigation-links-link3"
        >
          {props.BOOK_NOW}
        </a>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link {
            color: #000000;
            font-weight: 700;
            text-decoration: none;
          }
          .navigation-links-link1 {
            color: #000000;
            font-weight: 700;
            margin-left: 32px;
            text-decoration: none;
          }
          .navigation-links-link2 {
            color: #000000;
            font-weight: 700;
            margin-left: 32px;
            text-decoration: none;
          }
          .navigation-links-link3 {
            color: #000000;
            visibility: hidden;
            font-weight: 700;
            text-decoration: none;
          }

          .navigation-links-root-class-name12 {
            margin-right: var(--dl-space-space-doubleunit);
          }
          @media (max-width: 991px) {
            .navigation-links-link3 {
              visibility: hidden;
            }
          }
          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link3 {
              visibility: hidden;
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .navigation-links-nav {
              z-index: 999;
            }
            .navigation-links-link3 {
              visibility: visible;
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  BOOK_NOW: 'BOOK NOW',
  HOMEPAGE: 'HOME',
  ABOUTESCAPEHILO: 'ABOUT',
  FAQ: 'FAQ',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  BOOK_NOW: PropTypes.string,
  HOMEPAGE: PropTypes.string,
  ABOUTESCAPEHILO: PropTypes.string,
  FAQ: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
