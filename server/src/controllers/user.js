const UserModel = require("../db/models/user.model")


exports.Register = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            status: false,
            message: "Email and password are required for Register",
        });
    }

    try {
        const newUser = await UserModel.create({ email, password });

        if (newUser) {
            return res.status(201).json({
                status: true,
                message: "User registered successfully",
            });
        }

        res.status(500).json({
            status: false,
            message: "User creation failed, please try again",
        });

    } catch (error) {

        console.error("Error occurred while registering: ", error);

        res.status(500).json({
            status: false,
            message: "Failed to register the user",
            error: error.message,
        });
    }
};


exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                status: false,
                message: "Email and password are required for login",
            });
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                status: false,
                message: "User not found",
            });
        }

        // Compare password
        const isMatched = await user.comparePassword(password, user.password);
        if (!isMatched) {
            return res.status(401).json({
                status: false,
                message: "Invalid credentials",
            });
        }

        // Generate Token
        const token = user.CreateToken();
        if (!token) {
            return res.status(500).json({
                status: false,
                message: "Failed to generate token",
            });
        }

        return res.status(200).json({
            status: true,
            message: "User login successful",
            token
        });

    } catch (error) {
        console.error("Error occurred while logging in: ", error);
        return res.status(500).json({
            status: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};


exports.Welcome = async (req, res) => {

    try {

        console.log("WELCOME USER", req.user)
        return res.status(200).json({
            status: true,
            message: "WELCOME USER",
        });

    } catch (error) {
        console.error("Error occurred while Welocome: ", error);
        return res.status(500).json({
            status: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}
