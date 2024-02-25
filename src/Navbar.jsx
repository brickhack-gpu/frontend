import { Link } from "react-router-dom"

export default function Navbar() {
    return (
      <nav className="navbar">
        <Link className="logo-link" to="/">
          <img src="public\unboltedfinl.png" className="logo" alt="Logo" />
        </Link>
        <div className="cent-menu">
          {/* <Link className="spinup-button" to="/spinup">Spinup</Link> */}
          <Link className="home" to="/">
            <img src="public\home.png" alt="Home" className="home1234" />
          </Link>
          <Link className="pricing-button" to="/pricing">Pricing</Link>
          <Link className="faq-button" to="/faq">FAQ</Link>
          <Link className="contact-button" to="/contact">Contact</Link>
        </div>
        <Link className="login-button" to="/login">Login</Link>
      </nav>
    )
}