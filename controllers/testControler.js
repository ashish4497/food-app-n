const testController = (req, res) => {
  try {
    res.status(200).send("<h2>Controller Connection Fired On!!!</h2>");
  } catch (error) {
    console.log(error, "log controller Error".bgBlue);
  }
};

module.exports = { testController };
