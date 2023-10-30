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
                        <li><a key="home-section" href="home">Home</a></li>
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
                        <li>hello@littlelemon.com</li>
                    </ul>

            </span>
            <span>
                <h6>Social Media Links</h6>
                <ul>
                    <li><a href="Facebook">Facebook</a></li>
                    <li><a href="Instagram">Instagram</a></li>
                    <li><a href="X">X</a></li>
                    <li><a href="Threads">Threads</a></li>
                </ul>
            </span>
        </footer>
    )
}

export default Footer;