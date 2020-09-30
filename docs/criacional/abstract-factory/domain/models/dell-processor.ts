import {IProcessor} from "../../data/models/i-processor";

export class DellProcessor implements IProcessor {
  performance: number;
  socket: string;
}
