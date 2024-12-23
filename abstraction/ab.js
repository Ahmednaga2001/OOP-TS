//Abstract Class
/*
Abstract classes can have both abstract methods (methods without implementation) and non-abstract methods (methods with implementation).
Doesn’t support Multiple Inheritance.
support access modifiers
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(engineType, gpsModel) {
        this.engineType = engineType;
        this.gpsModel = gpsModel;
    }
    Car.prototype.startEngine = function () {
        console.log("Starting the ".concat(this.engineType, " engine."));
    };
    Car.prototype.enableGPS = function () {
        console.log("Enabling the ".concat(this.gpsModel, " GPS."));
    };
    return Car;
}());
// Example usage
var myCar = new Car("V6", "TomTom");
myCar.startEngine(); // Output: Starting the V6 engine.
myCar.enableGPS(); // Output: Enabling the TomTom GPS.
var Vehicle = /** @class */ (function () {
    function Vehicle(model) {
        this.model = model;
    }
    // Shared method
    Vehicle.prototype.displayModel = function () {
        console.log("This vehicle is a ".concat(this.model, "."));
    };
    return Vehicle;
}());
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Motorcycle.prototype.drive = function () {
        console.log("".concat(this.model, " is speeding down the highway."));
    };
    return Motorcycle;
}(Vehicle));
var bike = new Motorcycle("Motorcycle");
bike.displayModel(); // Output: This vehicle is a Motorcycle.
bike.drive(); // Output: Motorcycle is speeding down the highway.
