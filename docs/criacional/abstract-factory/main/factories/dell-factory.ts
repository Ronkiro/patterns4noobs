import {IComputerFactory} from "../../data/protocols/i-computer-factory";
import {DellComputer} from "../../domain/models/dell-computer";
import {DellKeyboard} from "../../domain/models/dell-keyboard";
import {DellProcessor} from "../../domain/models/dell-processor";
import {DellScreen} from "../../domain/models/dell-screen";

export class DellFactory implements IComputerFactory<DellComputer> {
  createComputer(): DellComputer {
    return new DellComputer();
  }

  createKeyboard(): DellKeyboard {
    return new DellKeyboard();
  }

  createProcessor(): DellProcessor {
    return new DellProcessor();
  }

  createScreen(): DellScreen {
    return new DellScreen();
  }

}
