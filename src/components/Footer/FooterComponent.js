import React from 'react'
import ButtonComponent3 from '../ButtonComponent/Button3/ButtonComponent3'
import ButtonComponent1 from '../ButtonComponent/Button1/ButtonComponent1'
import { faInstagram, faFacebookF, faTwitter, faYoutube, faWeixin, faWeibo, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './StyleFooter.scss'
class FooterComponent extends React.Component {
    render() {
        return (
            <div className="footer-wrapper">
                <div className="footer-upper-part">
                    <div className="subscribe footer-upper-child">
                        <span className="title-holder">subscribe to our newsletter</span>
                        <div className="input-container-cuabomay">
                            <div className="input-wrapper-cuabomay">
                                <input type="text" className="input-cuabomay" required></input>
                                <span className="input-holder-text">Enter your email address</span>
                            </div>
                            <a>
                                <div className="button3-container">
                                    <ButtonComponent3 text="submit" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="fake-border"></div>
                    <div className="followus footer-upper-child">
                        <span className="title-holder">follow us</span>
                        <div className="brand-icon-container">
                            <FontAwesomeIcon icon={faInstagram} className="brand-icon" />
                            <FontAwesomeIcon icon={faFacebookF} className="brand-icon" />
                            <FontAwesomeIcon icon={faTwitter} className="brand-icon" />
                            <FontAwesomeIcon icon={faYoutube} className="brand-icon" />
                            <FontAwesomeIcon icon={faWeixin} className="brand-icon" />
                            <FontAwesomeIcon icon={faWeibo} className="brand-icon" />
                            <FontAwesomeIcon icon={faPinterest} className="brand-icon" />
                        </div>
                    </div>
                </div>
                <div className="footer-middle-part">
                    <a href="#">
                        <div className="button1-container">
                            <ButtonComponent1 text="contact us" />
                        </div>
                    </a>
                    <div className="middlle-part-1">
                        <ul>
                            <li>the collection</li>
                            <li><a href="#">Globemaster</a></li>
                            <li><a href="#">Constellation</a></li>
                            <li><a href="#">Diver 300M</a></li>
                            <li><a href="#">Aqua terra 150M</a></li>
                            <li><a href="#">Seamaster 300</a></li>
                            <li><a href="#">Planet Ocean 600M</a></li>
                            <li><a href="#">Moonwatch</a></li>
                            <li><a href="#">Dark side of the Moon</a></li>
                            <li><a href="#">Ladymatic</a></li>
                            <li><a href="#">Hour Vision</a></li>
                            <li><a href="#">Trésor</a></li>
                            <li><a href="#">Prestige</a></li>
                            <li><a href="#">Tourbillon</a></li>
                        </ul>
                        <div className="child">
                            <ul>
                                <li>find your omega</li>
                                <li><a href="#">Women's Selection</a></li>
                                <li><a href="#">Man's Selection</a></li>
                                <li><a href="#">Gold watches</a></li>
                                <li><a href="#">Chronograph Watches</a></li>
                                <li><a href="#">Master Chronometer</a></li>

                            </ul>
                            <ul>
                                <li>planet omega</li>
                                <li><a href="#">Watchmaking</a></li>
                                <li><a href="#">Space</a></li>
                                <li><a href="#">Sport</a></li>
                                <li><a href="#">James Bond</a></li>
                                <li><a href="#">The OMEGA Museum</a></li>
                                <li><a href="#">Chronicle</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="middlle-part-2">
                        <div className="child">
                            <ul>
                                <li>master chrometter</li>
                                <li><a href="#">Access my Test Results</a></li>
                                <li><a href="#">iPhone Card Scanner App</a></li>
                            </ul>
                            <ul>
                                <li>store locator</li>
                                <li><a href="#">Find a store</a></li>
                                <li><a href="#">Locate me</a></li>
                            </ul>
                        </div>
                        <div className="child">
                            <ul>
                                <li>customer service</li>
                                <li><a href="#">Interventions and Prices</a></li>
                                <li><a href="#">Preserve your OMEGA</a></li>
                                <li><a href="#">Find a Service Center</a></li>
                                <li><a href="#">Order an Extract from the Archives</a></li>
                                <li><a href="#">Order a CataloguePreserve your OMEGA</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Glossary</a></li>
                            </ul>
                            <ul>
                                <li>more</li>
                                <li><a href="#">Press room</a></li>
                                <li><a href="#">Jobs</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-part">
                    <div className="legal-container">
                        <span>Copyright OMEGA SA. All rights reserved.</span>
                        <div className="legal-wrapper">
                            <a href="#"><span>Terms of Use</span></a>
                            <div className="fake-border-xxx"></div>
                            <a href="#"><span>Privacy Notice</span></a>
                            <div className="fake-border-xxx"></div>
                            <a href="#"><span>Cookie Notice</span></a>
                        </div>
                    </div>
                    <div className="language">
                        <FontAwesomeIcon icon={faGlobe} />
                        <span>english</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default FooterComponent