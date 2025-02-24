

// import { useNavigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../css/navbar.css'
import { logoutUser } from '../services/api'

function Navbar() {

    const navigate = useNavigate()

    // // for LocalStoreage
    // const navigate = useNavigate()
    // const handleLogout = () => {
    //     console.log("Hello logout")
    //     localStorage.removeItem('token')
    //     navigate('/login')
    // }


    // for cookies 
    const handleLogout = async () => {

        await logoutUser()
        console.log(`Logout successfully`)
        navigate('/login')
    }


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

                        {/* LOGOUT FUNCTIONALITY */}

                        {/* Through Local Storeage
                        {localStorage.getItem('token') && <button onClick={handleLogout}>Logout</button>}
                        */}


                        {/* Through Cookies */}
                        <button onClick={handleLogout}>Logout</button>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar
