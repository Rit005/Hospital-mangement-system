import jwt from "jsonwebtoken";

export const generateToken = (user, message, statusCode, res) => {
  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,   // ✅ MATCH Render env
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );

  const cookieOptions = {
    httpOnly: true,
    secure: true,        // REQUIRED (HTTPS)
    sameSite: "none",    // REQUIRED (cross-domain)
    expires: new Date(
      Date.now() +
        Number(process.env.COOKIE_EXPIRE) * 24 * 60 * 60 * 1000
    ),
  };

  if (user.role === "Admin") {
    res
      .status(statusCode)
      .cookie("adminToken", token, cookieOptions)
      .json({
        success: true,
        message,
        user,
      });
  } else {
    res
      .status(statusCode)
      .cookie("patientToken", token, cookieOptions)
      .json({
        success: true,
        message,
        user,
      });
  }
};
