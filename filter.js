const ages = [12, 18, 25, 8, 30, 16];

// Task 1: 
const adultAges = ages.filter(age => age >= 18);
console.log(adultAges);

// Task 2:
const getAdultAges = (agesArray) => {
    return agesArray.filter(age => age >= 18);
};

// Task 3:
const adultAges2 = getAdultAges(ages);
console.log(adultAges2);
