// class hero{
//     //Automatically call only need to make class as an object
//     constructor(name,age) {
//         this.studentName = name;
//         this.studentAge = age;
//         console.log("I am Constructor");
//     }

//     // Need to make object then we can call using object method
//     message() {
//         console.log(this.studentName," i am from Message", this.studentAge);
//     }

//     // Static method
//     static greet() {
//         console.log("I am from Static");
//     }

// }

// let a = new hero("Hello",26)
// a.message()
// hero.greet()

// Defining class using es6
    // class Vehicle {
    //   constructor(name, maker, engine) {
    //     this.name = name;
    //     this.maker =  maker;
    //     this.engine = engine;
    //   }
    //   getDetails(){
    //       return (`The name of the bike is ${this.name}.`)
    //   }
    //   getMaker(){
    //       return (`The name of the maker is ${this.maker}.`)
    //   }
    // }
    // // Making object with the help of the constructor
    // let bike1 = new Vehicle('Honda', 'Suzuki', '1340cc');
    // //let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
      
    // console.log(bike1.name);
    // console.log(bike1.maker);
    // //console.log(bike2.maker);   // Kawasaki
    // console.log(bike1.getDetails());
    // console.log(bike1.getMaker());


class hello {
  constructor(name) {
    this.ename = name;
    console.log("Constr:Emp");
  }
  info() {
    console.log("info from parent :" ,this.ename);
  }
    }
class manager extends hello {
  info() {
    super.info()
    console.log("info from child :", this.ename);
  }
}
let a = new manager("Yahoo baba")
a.info()