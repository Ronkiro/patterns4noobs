import {IScreen} from "../models/i-screen";
import {IKeyboard} from "../models/i-keyboard";
import {IProcessor} from "../models/i-processor";
import {IComputer} from "../models/i-computer";

export interface IComputerFactory<T extends IComputer> {
  createComputer(): T;
  createScreen(): IScreen;
  createKeyboard(): IKeyboard;
  createProcessor(): IProcessor;
}
