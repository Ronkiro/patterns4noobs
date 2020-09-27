import {Car} from "../../domain/models/car-model";
import {Wheels} from "../../domain/models/wheels-model";
import {Engine} from "../../domain/models/engine-model";

export interface ICarFactory {
  buildCar(): Car;
  createCar(): Car;
  addWheels(): Wheels;
  addEngine(): Engine;
}
