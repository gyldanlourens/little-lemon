//

import monochromeLogo from "../images/monochrome-logo.png"

function Footer(){
    return (
        <footer className="footer">
            <img src={monochromeLogo} alt="Logo"/>
            <span>
                <h6>Doormat Navigation</h6>
                <nav>
                    <ul>
                        <li><a key="home-section" href="/">Home</a></li>
                        <li><a key="about-section" href="about">About</a></li>
                        <li><a key="menu-section" href="menu">Menu</a></li>
                        <li><a key="reservations-section" href="reservations">Reservations</a></li>
                        <li><a key="order-online-section" href="order-online">Order Online</a></li>
                        <li><a key="login-section" href="login">Login</a></li>
                    </ul>
                </nav>
            </span>
            <span>
                <h6>Contact</h6>
                    <ul>
                        <li>100 Happy Road</li>
                        <li>Paradise City</li>
                        <li>3210</li>
                        <li>(012) 345 3789</li>
                        <li><a href = "mailto:hello@littlelemon.com">hello@littlelemon.com</a></li>
                    </ul>

            </span>
            <span>
                <h6>Social Media Links</h6>
                <ul>
                    <li><a href="https://www.facebook.com/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/">Instagram</a></li>
                    <li><a href="https://twitter.com/">X</a></li>
                    <li><a href="https://www.threads.net/">Threads</a></li>
                </ul>
            </span>
        </footer>
    )
}

export default Footer;