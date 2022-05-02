import React from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className={`component-container ${props.rootClassName} `}>
        <a
          href={props.link_button}
          target="_blank"
          rel="noreferrer noopener"
          className="component-link button"
        >
          {props.BookYourEscapeRoom}
        </a>
      </div>
      <style jsx>
        {`
          .component-container {
            display: flex;
            position: relative;
          }
          .component-link {
            color: #ffffff;
            font-style: normal;
            transition: 0.3s;
            font-weight: 700;
            border-width: 0px;
            text-decoration: none;
            background-color: #39b300;
          }
          .component-link:hover {
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: #227101;
          }
          .component-root-class-name {
            margin-top: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .component-root-class-name1 {
            margin-top: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-doubleunit);
          }

          @media (max-width: 479px) {
            .component-root-class-name3 {
              margin-top: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
  BookYourEscapeRoom: 'Click Here to Book Your Escape!',
  link_button:
    'https://fareharbor.com/embeds/book/escapehilo/items/58566/?full-items=yes&u=84441f3f-1c27-44c8-9146-8ef90bd95998&from-ssl=yes&back=https://www.escapehilo.com/',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
  BookYourEscapeRoom: PropTypes.string,
  link_button: PropTypes.string,
}

export default AppComponent
