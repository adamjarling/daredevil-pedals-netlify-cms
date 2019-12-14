import React from "react";
import { Link } from "gatsby";
import footerLogo from "../img/daredevil-pedals-footer.png";
import reverb from "../img/logo-reverb.png";
import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="ui container">
        <div className="ui three column stackable grid">
          <div className="large screen computer tablet only column">
            <Link to="/" className="ui image">
              <img src={footerLogo} />
            </Link>
          </div>
          <div className="column">
            <h4>
              <strong>Quick Links</strong>
            </h4>
            <div className="ui link list footer-subnav">
              <Link className="item" to="/">
                Home
              </Link>
              <Link className="item" to="/bio">
                Bio
              </Link>
              <Link className="item" to="/dealers">
                Dealers
              </Link>
              <Link className="item" to="/press">
                Press
              </Link>
              <Link className="item" to="/artists">
                Artists
              </Link>
              <Link className="item" to="/faqs">
                F.A.Qs
              </Link>
            </div>
          </div>
          <div className="column">
            <h4>
              <strong>Follow us</strong> here
            </h4>
            <div className="social-media-wrapper">
              <a href="https://www.facebook.com/DaredevilPedals">
                <i className="facebook f icon"></i>
              </a>
              <a href="http://instagram.com/daredevilpedals">
                <i className="instagram icon"></i>
              </a>
              <a href="https://reverb.com/shop/daredevil-pedals-chicago">
                <img src={reverb} alt="Reverb logo" />
              </a>
            </div>

            <h4>
              <strong>Sign up</strong> for email offers, news &amp; events
            </h4>

            <link
              href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
              rel="stylesheet"
              type="text/css"
            />

            <div id="mc_embed_signup">
              <form
                action="//daredevilpedals.us6.list-manage.com/subscribe/post?u=60da2c5d20db397b405a9ba49&amp;id=ae9aa05f95"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate ng-pristine ng-valid"
                target="_blank"
                novalidate=""
              >
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group">
                    <label for="mce-EMAIL">Email Address </label>
                    <input
                      type="email"
                      value=""
                      name="EMAIL"
                      className="required email"
                      id="mce-EMAIL"
                    />
                  </div>
                  <div className="mc-field-group">
                    <label for="mce-FNAME">First Name </label>
                    <input
                      type="text"
                      value=""
                      name="FNAME"
                      className=""
                      id="mce-FNAME"
                    />
                  </div>
                  <div className="mc-field-group">
                    <label for="mce-LNAME">Last Name </label>
                    <input
                      type="text"
                      value=""
                      name="LNAME"
                      className=""
                      id="mce-LNAME"
                    />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: "none" }}
                    ></div>
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: "none" }}
                    ></div>
                  </div>
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_60da2c5d20db397b405a9ba49_ae9aa05f95"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                  <div className="clear">
                    <input
                      type="submit"
                      value="Sign Me Up!"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="ui container copyright-row">
          <p>
            DaredevilPedals.com - © 2012 - 2019 -{" "}
            <a href="mailto:daredevilpedals@gmail.com">
              Daredevilpedals@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
