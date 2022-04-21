import React from 'react'

import PropTypes from 'prop-types'

const PrimaryButton = (props) => {
  return (
    <>
      <div className="primary-button-container">
        <a
          href="https://goo.gl/maps/Uz25ueERR2rzWGmQA"
          target="_blank"
          rel="noreferrer noopener"
          className="primary-button-link button textXS"
        >
          {props.button}
        </a>
      </div>
      <style jsx>
        {`
          .primary-button-container {
            display: flex;
            position: relative;
          }
          .primary-button-link {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            line-height: 1;
            padding-top: var(--dl-space-space-halfunit);
            border-width: 0px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
            text-decoration: none;
            background-color: var(--dl-color-pimary-500);
          }
          .primary-button-link:hover {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .primary-button-link:active {
            background-color: var(--dl-color-pimary-300);
          }
        `}
      </style>
    </>
  )
}

PrimaryButton.defaultProps = {
  button: 'LEAVE  A REVIEW',
}

PrimaryButton.propTypes = {
  button: PropTypes.string,
}

export default PrimaryButton
