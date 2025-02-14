import { useState } from 'react';
import '../css/login.css';
import { loginUser, welcomeUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [loginData, setLoginData] = useState({
        email: '', password: ''
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
        console.log("loginData: ", loginData)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await loginUser(loginData)
            console.log("response: ", response)
            let { token } = response.data


            // // Authentication Through Localstorage
            // localStorage.setItem('token', token);

            // Authentication Through Cookies
            const responseWelcome = await welcomeUser(token)
            console.log("responseWelcome: ", responseWelcome)
            navigate('/')

        } catch (error) {
            console.log("Error: ", error.message)
        }
    }


    return (
        <div>
            <div className="container">
                <div className="card">
                    <h2>Log In</h2>
                    <form>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            onClick={handleSubmit}
                        >Login</button>
                    </form>
                    <a href="/register">Register</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
