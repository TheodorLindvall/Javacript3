// Task 1:
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Task 2: 
let num = 10;
while (num <= 15) {
    console.log(num);
    num++;
}

// Task 3: 
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < lowest) {
        lowest = numbers[i];
    }
}
console.log(lowest);

// Task 4: 
const getLowest = (arr) => {
    let lowest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }
    return lowest;
};
console.log(getLowest(numbers));
