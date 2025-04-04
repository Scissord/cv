import jwt from 'jsonwebtoken';
import * as User from '#models/user.js';
import ERRORS from '#constants/errors.js';

const verify = async (req, res, next) => {
  // 400 - error with message to show to client
  // 401 - access token expired need to refresh
  // 402 - no token provided or refreshToken expired, need to throw away user from system

  try {
    // 1. Make sure you have accessToken;
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(402).send({
        message: ERRORS.NO_ACCESS
      });
    }

    // 2. Delete Bearer prefix
    const accessToken = token.startsWith('Bearer ') ? token.slice(7) : token;

    // 3. Try to decode token
    let decoded;
    try {
      // 4. If ok continue;
      decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
    } catch (err) {
      // 5. Else mean accessToken is expired
      if (err.name === ERRORS.TOKEN_EXPIRED) {
        // 6. Taking refreshToken from cookies
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
          return res.status(402).send({
            message: ERRORS.NO_REFRESH
          });
        }

        try {
          // 7. Try to decode refreshToken
          const decodedRefresh = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

          // 8. Check if user exist
          const user = await User.find(decodedRefresh.userId);
          if (!user) {
            return res.status(402).send({
              message: ERRORS.USER_NOT_FOUND
            });
          }

          // 9. refreshToken is valid, but need new accessToken
          return res.status(401).send({
            message: ERRORS.INVALID_ACCESS
          });
        } catch (refreshError) {
          // 10. If refreshToken invalid too
          return res.status(402).send({
            message: ERRORS.INVALID_REFRESH
          });
        }
      } else {
        // 11. If token is not expired, but other error
        return res.status(402).send({
          message: ERRORS.INVALID_ACCESS
        });
      }
    }

    const user = await User.find(decoded.userId);

    if (!user) {
      return res.status(402).send({
        message: ERRORS.USER_NOT_FOUND
      });
    }

    req.user = user;
    next();
  } catch (err) {
    console.log('Error in verify middleware', err.message);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

export default verify;
