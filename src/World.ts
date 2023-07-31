import { Creature } from "./Creature";
import { Collector } from "./Collector";

export class World {
  creatures: Creature[] = [];
  collectors: Collector[] = [];

  addCreature(creature: Creature) {
    this.creatures.push(creature);
  }

  addCollector(collector: Collector) {
    this.collectors.push(collector);
  }
}
