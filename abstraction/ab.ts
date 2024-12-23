//Abstract Class
/*
Abstract classes can have both abstract methods (methods without implementation) and non-abstract methods (methods with implementation).
Doesn’t support Multiple Inheritance.	
support access modifiers
*/

// Interfaces
/*
only have abstract methods (no implementation).
Only supports public members.
*/


interface Engine {
    engineType: string; // Property for engine type
    startEngine(): void;
  }
  
  interface GPS {
    gpsModel: string; // Property for GPS model
    enableGPS(): void;
  }
  
  class Car implements Engine, GPS {
    engineType: string;
    gpsModel: string;
  
    constructor(engineType: string, gpsModel: string) {
      this.engineType = engineType;
      this.gpsModel = gpsModel;
    }
  
    startEngine(): void {
      console.log(`Starting the ${this.engineType} engine.`);
    }
  
    enableGPS(): void {
      console.log(`Enabling the ${this.gpsModel} GPS.`);
    }
  }
  
  // Example usage
  const myCar = new Car("V6", "TomTom");
  
  myCar.startEngine(); // Output: Starting the V6 engine.
  myCar.enableGPS();   // Output: Enabling the TomTom GPS.

  
  abstract class Vehicle {
    model: string;
  
    constructor(model: string) {
      this.model = model;
    }
  
    // Shared method
    displayModel(): void {
      console.log(`This vehicle is a ${this.model}.`);
    }
  
    // Abstract method (to be implemented by subclasses)
    abstract drive(): void;
  }
  

  
  class Motorcycle extends Vehicle {
    drive(): void {
      console.log(`${this.model} is speeding down the highway.`);
    }
  }
  
  
  const bike = new Motorcycle("Motorcycle");
  bike.displayModel();  // Output: This vehicle is a Motorcycle.
  bike.drive();         // Output: Motorcycle is speeding down the highway.
  
  