function sum(...x) {
    sum = 0
    for (let data of x) {
        sum = sum+data
    }
    console.log(sum);
}
sum(1, 2, 3, 4, 5, 6)

let obj1 = {
    name: "Aman",
    age: 12,
    city: "Kolkata",
}

let obj2 = {
    gender:"Male"
}

let result = { ...obj1, ...obj2 }
console.log(result);

const { gender } = result;
console.log(gender);

let arr = ["Hello", "Dosto", "Goodbye", "Poster"]

// const [x, y, z] = arr
const [x,...z ] = arr

console.log(x,z);