const fruits = ["Apple", "Banana", "Orange"];

// Task 1: 
const moreFruits = [...fruits, "Mango", "Pineapple"];
console.log(moreFruits); // Should print ["Apple", "Banana", "Orange", "Mango", "Pineapple"]

const startingFruits = ["Pear", "Melon", "Kiwi"];

// Task 2:
const totalFruits = [...startingFruits, ...moreFruits];
console.log(totalFruits); // Should print ["Pear", "Melon", "Kiwi", "Apple", "Banana", "Orange", "Mango", "Pineapple"]

const car = { make: "Toyota", model: "Corolla", year: 2020 };

// Task 3: 
const updatedCar = { ...car, year: 2022 };
console.log(updatedCar); // Should print { make: "Toyota", model: "Corolla", year: 2022 }

// Task 4:
const coloredCar = { ...updatedCar, color: "Red" };
console.log(coloredCar); // Should print { make: "Toyota", model: "Corolla", year: 2022, color: "Red" }

// Task 5: 
const updateCarModel = (car, newModel) => {
    return { ...car, model: newModel };
};

// Task 6: 
const newModelCar = updateCarModel(coloredCar, "Camry");
console.log(newModelCar); // Should print { make: "Toyota", model: "Camry", year: 2022, color: "Red" }
