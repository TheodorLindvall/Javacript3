// Task 1:
const values = [0, "hello", null, undefined, false, "false", -1, "JavaScript"];

// Task 2:
const checkTruthiness = (value) => {
    if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }
};

// Task 3:
values.forEach(checkTruthiness);

// Task 4: 
for (let i = 0; i < values.length; i++) {
    checkTruthiness(values[i]);
}

// Task 5:
let index = 0;
while (index < values.length) {
    checkTruthiness(values[index]);
    index++;
}
