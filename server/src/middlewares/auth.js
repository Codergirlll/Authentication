
const jwt = require("jsonwebtoken");

exports.Auth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const token = authHeader.split(" ")[1]; // Extract token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (error) {
        console.error("Error occurred while Auth Middleware: ", error);


        return res.status(401)
            .json({
                status: false,
                message: "Unauthorized: Invalid token",
                error: error.message
            });
    }
};