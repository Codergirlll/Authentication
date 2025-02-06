

// import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import '../css/navbar.css'

// function Navbar() {
//     return (
//         <div>

//             <div className="navbar">
//                 <div className="navbar-container">
//                     <div className="logo">
//                         Authentication
//                     </div>
//                     <ul className="nav-links">
//                         <nav>
//                             <Link to="/">Dashboard</Link>
//                             <Link to="/login">Login</Link>
//                             <Link to="/register">Register</Link>
//                             {/* {localStorage.getItem('token') && <button onClick={handleLogout}>Logout</button>} */}
//                         </nav>
//                     </ul>
//                 </div>
//             </div>

//         </div>
//     )
// }
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
