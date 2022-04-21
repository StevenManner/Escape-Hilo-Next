import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <Link href="/">
          <a className="navigation-links-link">{props.text}</a>
        </Link>
        <Link href="/about">
          <a className="navigation-links-link1">{props.text1}</a>
        </Link>
        <Link href="/frequently-asked-questions">
          <a className="navigation-links-link2">{props.text2}</a>
        </Link>
        <a
          href="https://fareharbor.com/embeds/book/escapehilo/items/58566/?full-items=yes&amp;flow=6078"
          target="_blank"
          rel="noreferrer noopener"
          className="navigation-links-link3"
        >
          {props.text21}
        </a>
        <span className="navigation-links-text"></span>
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
            margin-left: 32px;
            text-decoration: none;
          }
          .navigation-links-text {
            color: #000000;
            margin-left: 32px;
          }

          .navigation-links-root-class-name8 {
            margin-right: var(--dl-space-space-doubleunit);
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
            .navigation-links-text {
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
  text21: 'BOOK NOW',
  text: 'HOME',
  text1: 'ABOUT',
  text2: 'FAQ',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text21: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
