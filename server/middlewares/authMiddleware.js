import jwt from "jsonwebtoken";
import User from "../models/user.js";

const protectRoute = async (req, res, next) => {
  console.log("CheckA");
    try {
      let token = req.cookies?.token;
      console.log(token);
      if (!token) {
         throw new Error("No cookies found");
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  
        const resp = await User.findById(decodedToken.userId).select(
          "isAdmin email"
        );

        req.user = {
            email: resp.email,
            isAdmin: resp.isAdmin,
            userId: decodedToken.userId,
          };
          
          next();
          
        } catch (error) {
            console.error(error);
            return res
              .status(401)
              .json({ status: false, message: "Not authorized. Try login again." });
          }
        };

        const isAdminRoute = (req, res, next) => {
            if (req.user && req.user.isAdmin) {
              console.log("CheckB");
              next();
            } else {
              return res.status(401).json({
                status: false,
                message: "Not authorized as admin. Try login as admin.",
              });
            }
          };

          export { isAdminRoute, protectRoute };