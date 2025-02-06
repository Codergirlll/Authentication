// import React from 'react';
import { useState } from 'react';
import '../css/register.css'
import { registerUser } from '../services/api';
import { useNavigate } from 'react-router-dom';


function Register() {

    const [formData, setFormData] = useState({
        username: '', email: '', password: ''
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log("formData: ", formData)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await registerUser(formData)
            console.log("response: ", response)

            navigate('/login')

        } catch (error) {
            console.log("Error: ", error.message)
        }
    }

    return (
        <form>
            <div className="container">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>

                <label htmlFor="username"><b>Username</b></label>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    required
                    onChange={handleChange}
                />

                <label htmlFor="email"><b>Email</b></label>
                <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    required
                    onChange={handleChange}
                />

                <label htmlFor="psw"><b>Password</b></label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    required
                    onChange={handleChange}
                />

                <div className="clearfix">
                    <button
                        type="submit"
                        className="btn"
                        onClick={handleSubmit}
                    >Sign Up</button>
                </div>

                <a href="/login">Login</a>

            </div>
        </form>
    );
}

export default Register;
