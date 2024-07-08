import React from 'react'
import { Link } from 'react-scroll'
// import { Link ,NavLink} from 'react-router-dom'


const Heders = () => {
    return (
        <>
            <div class="preloader">
                <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
                </svg>

                <div class="preloader-heading">
                    <div class="load-text">
                        <span>L</span>
                        <span>o</span>
                        <span>a</span>
                        <span>d</span>
                        <span>i</span>
                        <span>n</span>
                        <span>g</span>
                    </div>
                </div>
            </div>
            <header className="tj-header-area header-absolute">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap align-items-center">

                            <div className="logo-box">
                                <Link to="">
                                    <img src="assets/img/logo/logo2.png" alt="Logo" />
                                </Link>
                            </div>

                            <div className="header-info-list d-none d-md-inline-block">
                                <ul className="ul-reset">
                                    <li><Link to="mailto:dhameliyamiral@gmail.com">dhameliyamiral@gmail.com</Link></li>
                                </ul>
                            </div>

                            <div className="header-menu">
                                <nav>
                                    <ul>

                                        <li><Link to="resume">Resume</Link></li>
                                        <li><Link to="skills">skills</Link></li>
                                        <li><Link to="contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="header-button">
                                <Link to="#" className="btn tj-btn-primary">Hire me!</Link>
                            </div>

                            <div className="menu-bar d-lg-none">
                                <button>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <div class="progress-wrap" id="scrollUp">
                <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
        </>
    )
}

export default Heders