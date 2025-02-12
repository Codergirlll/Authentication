

import '../css/navbar.css'

function Navbar() {
    return (
        <div>

            <div className="navbar">
                <div className="navbar-container">
                    <div className="logo">
                        Authentication
                    </div>
                    <ul className="nav-links">
                        <li><a href="/">Dashboard</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                        <li><a href="/logout">Logout</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar
