const findTheOldest = function(people) {
  // reduce people to oldest
  return people.reduce((oldestPerson, currentPerson) => {
    const opAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
    const cpAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

    // if current person age is more than oldest person age, set oldestPerson to currentPerson
    return cpAge > opAge ? currentPerson : oldestPerson;
  }); 
};

function getAge(birth, death) {
  return death ? death - birth : (new Date().getFullYear()) - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
