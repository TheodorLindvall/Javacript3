const student = { name: "Alex", age: 20, grades: [85, 90, 78] };
const course = {
  title: "JavaScript Basics",
  duration: "3 months",
  instructor: {
    firstName: "Sara",
    lastName: "Jones",
  },
};
const numbers = [0, 15, -3, 9, null, 22, undefined, 8, NaN, false, 100];

// Task 1: 
const updatedStudent = { 
    ...student, 
    age: 21, 
    major: "Computer Science" 
};
console.log(updatedStudent);

// Task 2: 
const { instructor: { firstName: instructorFirstName, lastName: instructorLastName } } = course;
console.log(instructorFirstName);
console.log(instructorLastName);

// Task 3:
const filterValidNumbers = (arr) => {
    return arr.filter(value => value && value >= 0);
};
console.log(filterValidNumbers(numbers));

// Task 4:
const analyzeStudentGrades = (student) => {
    const { name, grades } = student;
    const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
    if (average > 85) {
        console.log(`Excellent performance, ${name}!`);
    } else if (average >= 70) {
        console.log(`Good job, ${name}!`);
    } else {
        console.log(`${name}, you need to improve.`);
    }
};
analyzeStudentGrades(updatedStudent);
