interface Vehicle {
  name: string
}

class Car implements Vehicle {

  constructor(name: String){
    name = name
  }
  name: string;
}


console.log(new Car("hello"))