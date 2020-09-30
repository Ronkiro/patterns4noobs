import {IScreen} from "./i-screen";
import {IKeyboard} from "./i-keyboard";
import {IProcessor} from "./i-processor";

export interface IComputer {
  screen: IScreen;
  keyboard: IKeyboard;
  processor: IProcessor;
}
