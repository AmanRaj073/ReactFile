// const data = {
//     name: "Aman",
//     age: 12,
//     message: function () {
//         console.log(`${this.name}, Good Morning`);
//     }
// }
// data.message();
// data.name="Nidhi"
// data.message()

// console.log(this);

// function abc() {
//     console.log('====================================');
//     console.log(this);
//     console.log('====================================');
// }
// abc()

// const abz = function () {
//    console.log("====================================");
//    console.log(this);
//    console.log("====================================");

// }
// abz()

// const abx = () => {
//     console.log("====================================");
//     console.log(this);
//     console.log("====================================");

// }
// abx()

// const num = (num1, num2) => (num1 + num2)
// console.log(num(2,3))

/////////////////////////////////////////////////////////////////

// const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 }
// const input2 = { a: 2, e: 12, f: 6, d: 10 }

// const output = { d: 10, e: 12 }

// function result(input1, input2) {
//     let obj={}
//     for (let i in input1) {
//         if (input1[i] == input2[i]) {
//             console.log(input1[i]);
//             console.log(input2[i]);
//             obj[i]=input1[i]
//         }
//     }
//     return obj
// }
// let a = result(input1, input2)
// console.log(a);

// const apiData = async () => {
//   const baseUrl = "https://fakestoreapi.com/products";
//   const data = await fetch(baseUrl);
//   const res = await data.json()
//   return res
// };
// console.log(apiData());

//   const apiData = async () => {
//     const baseUrl = "https://fakestoreapi.com/products";
//     const data = await fetch(baseUrl);
//     data.then(async (res) => {
//       await res.json()
//     }).then((res) => {
//       console.log(res);
//     })
//   };
// apiData()
// const apiData = async () => {
//   const baseUrl = "https://fakestoreapi.com/products";
//   try {
//     const response = await fetch(baseUrl);
//     const data = await response.json();
//     console.log(data); // do whatever you want with the data here
//     return data; // return data if you want to use it outside of the function
//   } catch (error) {
//     console.error(error);
//   }
// };

// apiData(); // call the function

// let data = [1, 2, 9, 4, 5, 6, 12]

// function Sum(params) {
//   let sum = 0;
//   for (let i = 0; i < data.length; i++) {
//     sum = sum + data[i]
//   }
//   console.log(sum);
// }
// Sum()

// let reducer = data.reduce((prev, current) => {
// prev = prev + current
//   return prev
// })
// console.log(reducer);

// function greater() {
//    let sum = 0;
//   for (let i = 0; i < data.length; i++) {
//     if (data[i] > sum) {
//       sum = data[i]
//     }
//   }
//   console.log(sum);
// }
// greater()

// let dataz = data.reduce((acc, current) => {
//   if (current >acc ) {
//     acc=current
//   }
//   return acc
// }, 0)
// console.log(dataz);

// let datr = data.reduce((acc, current) => {
//   return current-acc
// })
// console.log(datr);

// const users = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 30 },
//   { name: "David", age: 25 },
// ];

// let res = users.filter((item) => {
//   return item.age==25
// })
// console.log(res);

// let resreduc = users.reduce((acc, current) => {
//   if (acc[current.age]) {
//     acc[current.age] = ++acc[current.age];
//   } else {
//     acc[current.age]=1
//   }
//   return acc
// }, {})
// console.log(resreduc);

// let resreducz = users.reduce((acc, current) => {
//   if (acc.age == current.age) {
//     acc.age = ++1;
//   } else {
//     acc[current.age] = 1;
//   }
//   return acc;
// }, {});
// console.log(resreducz);

// a i not defined
// class abc {
//   constructor(name,age) {

//   }
// }

// const a = new abc

// const a = [1, 2, 3, 4, 5]

// for (i = a.length; i >= 0 ; i--){
//   console.log(a[i]);
// }

// const a = [
//   {
//     name: "Ak",
//     age: 12,
//   },
//   {
//     name: "Ak",
//     age: 12,
//   },
//   {
//     name: "Ak",
//     age: 12,
//   },
//   {
//     name: "Ak",
//     age: 12,
//   },
//   {
//     name: "Ak",
//     age: 12,
//   },
//   {
//     name: "Ak",
//     age: 12,
//   }
// ];


// const b = { a }
// console.log(b);



// function nthChar(a, n) {
//   if (n >= 0 && n < a.length) {
//     return a.charAt(n)
//   } else {
//     return "invalid index"
//   }
// }
// let a = nthChar("HELLO BHAIYO",4)
// console.log(a);

// let b = "HKAJSKJKSAJ"
// let c = b.charAt(4)
// console.log(c);

let a = "amanraj"
let s = a.split("")