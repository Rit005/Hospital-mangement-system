import jwt from "jsonwebtoken";

export const generateToken = (user, message, statusCode, res) => {
  // 🔑 Generate JWT
  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET, // ✅ MUST match Render env
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );

  // 🍪 Cookie options (PRODUCTION SAFE)
  const cookieOptions = {
    httpOnly: true,
    secure: true,      // REQUIRED for HTTPS (Vercel)
    sameSite: "none",  // REQUIRED for cross-domain
    expires: new Date(
      Date.now() +
        process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
  };

  // 🎯 Send token based on role
  if (user.role === "Admin") {
    res.status(statusCode)
      .cookie("adminToken", token, cookieOptions)
      .json({
        success: true,
        message,
        user,
      });
  } else {
    res.status(statusCode)
      .cookie("patientToken", token, cookieOptions)
      .json({
        success: true,
        message,
        user,
      });
  }
};
