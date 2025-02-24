
const jwt = require("jsonwebtoken");

exports.Auth = async (req, res, next) => {
    try {

        const token = req.cookies.token;
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