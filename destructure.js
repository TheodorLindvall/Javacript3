// Task 1: 
const [firstName, lastName] = fullName;

// Task 2: 
const { name, age } = user;

// Task 3: 
console.log(firstName); // "John"
console.log(lastName);  // "Doe"
console.log(name);      // "Alice"
console.log(age);       // 25

// Task 4:
const getFullName = ({ firstName, lastName }) => {
  return `${firstName} ${lastName}`;
};

// Task 5: 
console.log(getFullName(person)); // "Jane Smith"
