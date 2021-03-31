import {Client} from "./data/usecases/client";
import {DellFactory} from "./main/factories/dell-factory";

const client = new Client();
const dellFactory = new DellFactory();

const dellComputer = client.buildComputer(dellFactory);

console.log(dellComputer);
