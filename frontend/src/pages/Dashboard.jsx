import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { welcomeUser } from "../services/api";

function Dashboard() {

    const navigate = useNavigate()


    // // Auth through loacalstorage
    // useEffect(() => {

    //     const token = localStorage.getItem('token')
    //     // console.log("Dashboard token: ", token)
    //     if (!token) {
    //         navigate('/login')
    //     }
    // }, [navigate])


    // Auth through cookies


    useEffect(() => {

        const verifyUser = async () => {
            const response = await welcomeUser()

            console.log("response: ", response)
        }
        verifyUser();

    }, [navigate])

    return (
        <div>
            <h1 >Hello Dashboard</h1>
        </div>
    );
}

export default Dashboard;
