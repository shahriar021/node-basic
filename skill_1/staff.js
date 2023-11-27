const getName = () => {
  return "shahriar";
};

const getAge = () => {
  return "24";
};

// exports.name = getName;
// exports.age = getAge;

//if i want to export all together

module.exports = {
  getAge,
  getName,
};
