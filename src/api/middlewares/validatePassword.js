export default (req, res, next) => {
  try {
    const password = req.body.password;
    const passwordVerify = req.body.passwordVerify;

    if (!password || !passwordVerify) {
      throw new Error("Please input a password");
    }

    if (password.length <= 0) {
      throw new Error("Passwords doesn't match");
    }

    if (password !== passwordVerify) {
      throw new Error("Passwords doesn't match");
    }

    next();
  } catch (error) {
    next(error);
  }
};
