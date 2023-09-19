const dotenv = require("dotenv");
dotenv.config();

exports.GetOpCode = async (req, res) => {
  return res.status(200).json({
    operation_code: 1,
  });
};

exports.AddData = async (req, res) => {
  const { data } = req.body;
  let numbers = [];
  let alphabets = [];
  let highest_alphabet = [];

  let response = {
    is_success: true,
    user_id: process.env.USER_ID,
    email: process.env.COLLEGE_EMAIL,
    roll_number: process.env.COLLEGE_ROLL_NO,
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: highest_alphabet,
  };

  if (!data) {
    response.is_success = false;
    return res.status(400).json(response);
  }

  data.forEach((item) => {
    const ele = parseInt(item);
    if (!isNaN(ele)) {
      response.numbers.push(item.toString());
    } else if (
      typeof item === "string" &&
      item.length === 1 &&
      /^[a-zA-Z]+$/.test(item)
    ) {
      response.alphabets.push(item);
    }
  });

  if (alphabets.length == 0) {
    response.highest_alphabet = [];
  } else {
    alphabets.forEach((alphabet) => {
      if (highest_alphabet.length == 0) {
        highest_alphabet.push(alphabet);
      } else {
        let prev = highest_alphabet.pop();
        // console.log(prev)
        let curr = alphabet;
        if(curr.toLowerCase().localeCompare(prev.toLowerCase())) {
            highest_alphabet.push(curr)
        } else {
            highest_alphabet.push(prev)
        }
      }
    });
  }

  return res.status(200).json(response);
};
