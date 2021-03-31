import {IComputer} from "../../data/models/i-computer";
import {DellKeyboard} from "./dell-keyboard";
import {DellProcessor} from "./dell-processor";
import {DellScreen} from "./dell-screen";

export class DellComputer implements IComputer {
  keyboard: DellKeyboard;
  processor: DellProcessor;
  screen: DellScreen;
}
