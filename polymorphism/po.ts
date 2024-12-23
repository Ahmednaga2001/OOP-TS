/*
Method Overriding: A subclass provides a specific implementation of a method already defined in the superclass (runtime polymorphism).
Method Overloading: Multiple methods with the same name but different parameter lists are defined in the same class (compile-time polymorphism).
*/


class Animal {
    makeSound(): void {
      console.log("Animal makes a sound");
    }
  }
  
  class Dog extends Animal {
    makeSound(): void {
      console.log("Dog barks");
    }
  }
  
  class Cat extends Animal {
    makeSound(): void {
      console.log("Cat meows");
    }
  }
  
  const animal = new Animal();
  animal.makeSound(); // Output: Animal makes a sound
  
  const dog = new Dog();
  dog.makeSound(); // Output: Dog barks
  
  const cat = new Cat();
  cat.makeSound(); // Output: Cat meows
  