import {ICarFactory} from "../../data/protocols/i-car-factory";
import {Wheels} from "../../domain/models/wheels-model";
import {Car} from "../../domain/models/car-model";
import {Engine} from "../../domain/models/engine-model";

export class CarFactory implements ICarFactory {
  buildCar(): Car {
    let car: Car = this.createCar();
    const wheels = this.addWheels();
    const engine = this.addEngine();

    car.wheels = wheels;
    car.engine = engine;

    return car;
  }

  createCar(): Car {
    return new Car();
  }

  addEngine(): Engine {
    return new Engine();
  }

  addWheels(): Wheels {
    return new Wheels();
  }
}
