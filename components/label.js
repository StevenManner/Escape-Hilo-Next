import React from 'react'

import PropTypes from 'prop-types'

const Label = (props) => {
  return (
    <>
      <div className="container">
        <h6 className="text">{props.text}</h6>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            position: relative;
          }
          .text {
            color: var(--dl-color-pimary-500);
            font-style: normal;
            font-weight: 700;
            line-height: 1;
            padding-top: 0.25rem;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius25);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: 0.25rem;
            text-transform: uppercase;
            background-color: var(--dl-color-pimary-700);
          }
        `}
      </style>
    </>
  )
}

Label.defaultProps = {
  text: 'Text',
}

Label.propTypes = {
  text: PropTypes.string,
}

export default Label
