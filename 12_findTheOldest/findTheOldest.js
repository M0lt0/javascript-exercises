const findTheOldest = function (arr) {
  return arr.reduce((a, b) => {
    const age1 = getAge(a.yearOfBirth, a.yearOfDeath);
    const age2 = getAge(b.yearOfBirth, b.yearOfDeath);
    return age1 < age2 ? b : a;
  });
};
const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
