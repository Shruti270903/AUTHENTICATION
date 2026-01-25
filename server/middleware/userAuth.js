// import jwt from "jsonwebtoken";

// const userAuth = (req, res, next) => {
//     const {token} = req.cookies;
//     if (!token) {
//         return res.status(401).json({ success: false, message: "Unauthorized access" });
//     }
//     try {
//         const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        
//         if(tokenDecode.id){
//             // req.body.userId = tokenDecode.id;
//             req.userId = tokenDecode.id;

//         }else{
//             return  res.status(401).json({ success: false, message: "Unauthorized access. Login again" });
//         }
//         next();
//     } catch (error) {
//         return res.status(401).json({ success: false, message: "Invalid token" });
//     }
// }
// export default userAuth;

import jwt from "jsonwebtoken";

const userAuth = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access"
    });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (!tokenDecode.id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access. Login again"
      });
    }

    req.userId = tokenDecode.id; // ✅ FIX
    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token"
    });
  }
};
export default userAuth;
