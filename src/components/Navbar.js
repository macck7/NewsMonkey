import { useLocation } from "react-router-dom"
import logo from './logo.png'

const NavBar = (props) => {
    let location = useLocation()
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a class="navbar-brand" href="/">
                        <div class="logo-image">
                            <img src={logo} alt = "logo" class="img-fluid"/>
                        </div>
                    </a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item"><a className={`nav-link ${location.pathname === "/business" ? "active" : ""}`} href="/business">Business</a></li>
                            <li className="nav-item"><a className={`nav-link ${location.pathname === "/entertainment" ? "active" : ""}`} href="/entertainment">Entertainment</a></li>
                            <li className="nav-item"><a className={`nav-link ${location.pathname === "/health" ? "active" : ""}`} href="/health">Health</a></li>
                            <li className="nav-item"><a className={`nav-link ${location.pathname === "/science" ? "active" : ""}`} href="/science">Science</a></li>
                            <li className="nav-item"><a className={`nav-link ${location.pathname === "/sports" ? "active" : ""}`} href="/sports">Sports</a></li>
                            <li className="nav-item"><a className={`nav-link ${location.pathname === "/technology" ? "active" : ""}`} href="/technology">Technology</a></li>
                            <li className="nav-item"><a className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} href="/about">Aboutus</a></li>
                        </ul>
                        <div className="container-fluid">
                            <form className="container ">
                                <a href="/search" className="btn btn-outline-success" type="button" style={{ color: 'white', background: "red" }} ><strong>Want to Search Something !!!</strong></a>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar