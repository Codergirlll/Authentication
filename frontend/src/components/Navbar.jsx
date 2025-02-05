

import React from 'react'
import '../css/navbar.css'

function Navbar() {
    return (
        <div>

            <div class="navbar">
                <div class="navbar-container">
                    <div class="logo">
                        Authentication
                    </div>
                    <ul class="nav-links">
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
