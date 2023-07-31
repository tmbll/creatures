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

  getNearbyCreatures(collector: Collector): Creature[] {
    return this.creatures.filter((creature) => {
      return (
        Math.abs(creature.position.x - collector.position.x) <= 5 &&
        Math.abs(creature.position.y - collector.position.y) <= 5
      );
    });
  }
}
