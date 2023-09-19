const dotenv = require("dotenv");
dotenv.config();

exports.GetOpCode = async (req, res) => {
  return res.status(200).json({
    operation_code: 1,
  });
};

exports.AddData = async (req, res) => {
  const { data } = req.body;
  let maxAlphabet = "a";
  let numbers = [];
  let alphabets = [];
  let response = {
    is_success: false,
    user_id: process.env.USER_ID,
    email: process.env.COLLEGE_EMAIL,
    roll_number: process.env.COLLEGE_ROLL_NO,
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: [maxAlphabet],
  };

  if (!data) {
    return res.status(400).json(response);
  }

  data.forEach((element) => {
    const item = parseInt(element);
    if (item) {
      numbers.push(item);
    } else {
      maxAlphabet = Math.max(
        maxAlphabet.toLowerCase().charCodeAt(0),
        element.toLowerCase().charCodeAt(0)
      );
      maxAlphabet = String.fromCharCode(maxAlphabet);
      alphabets.push(element);
    }
  });

  if(alphabets.length == 0) {
    response.highest_alphabet = []
  }

  return res.status(200).json(response);
};
