import {IComputerFactory} from "../protocols/i-computer-factory";
import {IComputer} from "../models/i-computer";

export class Client {
  buildComputer<T extends IComputer>(factory: IComputerFactory<T>): T {
    const computer = factory.createComputer();
    computer.screen = factory.createScreen();
    computer.keyboard = factory.createKeyboard();
    computer.processor = factory.createProcessor();

    return computer;
  }
}
