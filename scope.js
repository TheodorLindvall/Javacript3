// Task 1: 
var globalVar = "I am global";

// Task 2: 
function testScope() {
    var localVar = "I am local";

    // Task 3:
    console.log(globalVar); // Should print "I am global"
    console.log(localVar);  // Should print "I am local"
}

testScope();

// Task 4:
console.log(localVar); 
