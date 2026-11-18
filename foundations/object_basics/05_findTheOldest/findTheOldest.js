const findTheOldest = function(people) {
    people.sort((a, b) => {
        let ayearOfDeath = "yearOfDeath" in a? a.yearOfDeath : new Date().getFullYear();
        let byearOfDeath = "yearOfDeath" in b? b.yearOfDeath : new Date().getFullYear();
        return (ayearOfDeath - a.yearOfBirth) - (byearOfDeath - b.yearOfBirth)
    });
    return people[people.length - 1]
}

// Do not edit below this line
module.exports = findTheOldest;
