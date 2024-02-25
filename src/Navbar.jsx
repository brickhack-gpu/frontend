import { Link } from "react-router-dom"

export default function Navbar() {
    return (
      <nav className="navbar">
        <Link className="logo-link" to="/">
          <img src="public\fiunainfainfnajfnaifnaskofbafbosfbkfsablkfbaslkf.png" className="logo" alt="Logo" />
        </Link>
        <div className="cent-menu">
          {/* <Link className="spinup-button" to="/spinup">Spinup</Link> */}
          <Link className="pricing-button" to="/">
            Home
          </Link>
          <Link className="pricing-button" to="/pricing">Pricing</Link>
          <Link className="faq-button" to="/faq">FAQ</Link>
          <Link className="contact-button" to="/contact">Contact</Link>
        </div>
        <button className="button1 login-button" onClick={() => {window.location.href='/login'}}>Login</button>
      </nav>
    )
}