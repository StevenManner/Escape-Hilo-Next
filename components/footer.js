import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <div className={`footer-container ${props.rootClassName} `}>
        <div className="footer-container01">
          <div className="footer-container02">
            <div className="footer-container03">
              <span className="footer-text">
                <span className="footer-text01">
                  Find us on these platforms! Or click the telephone icon to
                  call us.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="footer-text03"></span>
                <span className="footer-text04">
                  Click on the GPS icon for direc
                </span>
                <span className="footer-text05">tions!</span>
              </span>
              <div className="footer-container04">
                <div className="footer-container05">
                  <a
                    href="https://goo.gl/maps/iHxK17FhxFr4WQYq8"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link"
                  >
                    <div className="footer-container06">
                      <img
                        src="/playground_assets/gmapspin-200h.png"
                        className="footer-image"
                      />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/escapehilo/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link1"
                  >
                    <div className="footer-container07">
                      <img
                        src="/playground_assets/ig-200h.webp"
                        className="footer-image1"
                      />
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/EscapeHiloHawaii"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link2"
                  >
                    <div className="footer-container08">
                      <svg viewBox="0 0 1024 1024" className="footer-icon">
                        <path d="M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h416v-448h-128v-128h128v-64c0-105.8 86.2-192 192-192h128v128h-128c-35.2 0-64 28.8-64 64v64h192l-32 128h-160v448h288c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96z"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="tel:+18089699696" className="footer-link3">
                    <div className="footer-container09">
                      <img
                        alt={props.image_alt1}
                        src={props.image_src1}
                        className="footer-image2"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-container10"></div>
        <div className="footer-container11">
          <div className="footer-container12">
            <span className="footer-text06 textSM">
              <span className="footer-text07">Hours of Operation</span>
              <br></br>
              <span>M</span>
              <span>onday - Sunday</span>
              <br></br>
              <span>11:00 AM - 7:00 PM Every Day</span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
        <div className="footer-container13">
          <div className="footer-container14">
            <span className="footer-text15 textXS">OTHER RESOURCES</span>
            <span className="footer-text16 textSM">Terms &amp; Conditions</span>
            <span className="footer-text17 textSM">Privacy Policy</span>
          </div>
        </div>
        <div className="footer-container15">
          <div className="footer-container16">
            <div className="footer-container17"></div>
          </div>
        </div>
        <span className="footer-text18 textSM">
          <span>
            Copyright 2022 Hilo Experience LLC dba Escape Hilo |
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://MannerMedia.biz"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="footer-text20">Design by Manner Media LLC</span>
          </a>
        </span>
      </div>
      <style jsx>
        {`
          .footer-container {
            width: 100%;
            height: 450px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-900);
          }
          .footer-container01 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .footer-container02 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .footer-container03 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer-text {
            color: #000000;
            width: 100%;
            align-self: center;
            text-align: center;
            font-weight: 700;
          }
          .footer-text01 {
            text-align: center;
            font-weight: 700;
          }
          .footer-text03 {
            text-align: center;
          }
          .footer-text04 {
            text-align: center;
            font-weight: 700;
          }
          .footer-text05 {
            font-weight: 700;
          }
          .footer-container04 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .footer-container05 {
            display: flex;
            margin-top: var(--dl-space-space-unitandhalf);
            align-items: flex-start;
            flex-direction: row;
          }
          .footer-link {
            display: contents;
          }
          .footer-container06 {
            flex: 0 0 auto;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .footer-image {
            width: 25px;
            height: 25px;
            object-fit: cover;
          }
          .footer-link1 {
            display: contents;
          }
          .footer-container07 {
            flex: 0 0 auto;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .footer-image1 {
            width: 25px;
            height: 25px;
            object-fit: cover;
          }
          .footer-link2 {
            display: contents;
          }
          .footer-container08 {
            flex: 0 0 auto;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .footer-icon {
            fill: #4267B2;
            width: 25px;
            height: 25px;
          }
          .footer-link3 {
            display: contents;
          }
          .footer-container09 {
            flex: 0 0 auto;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .footer-image2 {
            width: 25px;
            height: 25px;
            object-fit: cover;
          }
          .footer-container10 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .footer-container11 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: center;
          }
          .footer-container12 {
            flex: 0 0 auto;
            width: 33%;
            height: 100px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text06 {
            color: #000000;
            font-style: normal;
            text-align: center;
          }
          .footer-text07 {
            font-style: normal;
            font-weight: 700;
          }
          .footer-container13 {
            flex: 0 0 auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer-container14 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .footer-text15 {
            color: var(--dl-color-secondary-400);
            text-align: center;
            font-weight: 600;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text16 {
            color: var(--dl-color-secondary-500);
            text-align: center;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text17 {
            color: var(--dl-color-secondary-500);
            text-align: center;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .footer-container15 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .footer-container16 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .footer-container17 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .footer-text18 {
            color: #000000;
            align-self: center;
            padding-top: var(--dl-space-space-twoandhalf);
          }
          .footer-text20 {
            text-decoration: underline;
          }
          .footer-root-class-name {
            height: 100%;
          }
          @media (max-width: 991px) {
            .footer-text {
              font-size: small;
            }
            .footer-container04 {
              align-items: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .footer-container14 {
              align-items: center;
            }
          }
          @media (max-width: 767px) {
            .footer-container {
              height: 475px;
            }
            .footer-text {
              text-align: center;
            }
            .footer-container04 {
              width: 597px;
            }
            .footer-container11 {
              width: 100%;
              align-items: stretch;
            }
            .footer-container12 {
              width: 33%;
            }
            .footer-text06 {
              align-self: flex-start;
              margin-right: var(--dl-space-space-unit);
            }
            .footer-container14 {
              width: 33%;
              align-items: center;
            }
          }
          @media (max-width: 479px) {
            .footer-container {
              height: 100%;
            }
            .footer-container03 {
              width: 100%;
            }
            .footer-text {
              width: 100%;
              height: auto;
            }
            .footer-container04 {
              width: auto;
            }
            .footer-container11 {
              width: 100%;
            }
            .footer-container12 {
              width: auto;
              height: auto;
            }
            .footer-text06 {
              width: auto;
              text-align: center;
            }
            .footer-container13 {
              align-items: center;
              justify-content: center;
            }
            .footer-text15 {
              text-align: center;
            }
            .footer-text16 {
              text-align: center;
            }
            .footer-text17 {
              text-align: center;
            }
            .footer-text18 {
              width: 100%;
              height: 100%;
              align-self: flex-start;
              text-align: center;
              padding-bottom: var(--dl-space-space-tripleunit);
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  text1: '308 Kamehameha Avenue, Suite 200',
  image_alt21: 'image',
  image_src1: '/playground_assets/phone%20icon1-200h.png',
  image_src2: 'd1a66251-1259-4713-8dca-e6d13de2b7ce',
  text21: 'Hours of Operation',
  rootClassName: '',
  image_src21: 'd1a66251-1259-4713-8dca-e6d13de2b7ce',
  image_alt2: 'image',
  image_alt1: 'image',
}

Footer.propTypes = {
  text1: PropTypes.string,
  image_alt21: PropTypes.string,
  image_src1: PropTypes.string,
  image_src2: PropTypes.string,
  text21: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src21: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default Footer
