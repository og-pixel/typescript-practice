interface Vehicle {
  name: string
  age: number
}

class Car implements Vehicle {

  name: string;
  age: number;

  constructor(name: string){
    this.name = name;
    this.age = 22;
  }

  toString(): string {
    return this.name;
  }
}

var car = new Car("mazda")

console.log(car.toString())
console.log(car.name, car.age)