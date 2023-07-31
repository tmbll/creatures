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
      const catchRange = 5;
      return (
        Math.abs(creature.position.x - collector.position.x) <= catchRange &&
        Math.abs(creature.position.y - collector.position.y) <= catchRange
      );
    });
  }

  catchRandomCreature(collector: Collector) {
    const nearbyCreatures = this.getNearbyCreatures(collector);

    if (nearbyCreatures.length > 0) {
      const randomCreature =
        nearbyCreatures[Math.floor(Math.random() * nearbyCreatures.length)];
      collector.catch(randomCreature);
    }
  }
}
