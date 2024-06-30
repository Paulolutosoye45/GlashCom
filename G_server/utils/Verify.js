const asyncHandler = require('express-async-handler')
const { verify } = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()


const authMiddleware = asyncHandler(async (req, res, next)=> {
    const token = req.cookies.user_token ||req.headers.authorization?.split(' ')[1]
    if (!token) {
        res.status(401).json({ message: 'No token, authorization denied' });
        return;
    }

    try {
        const decoded = verify(token,process.env.jwt);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid', });
    }
});
export default authMiddleware