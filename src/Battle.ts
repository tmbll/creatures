import { Creature } from "./Creature";

export class Battle {
  creature1: Creature;
  creature2: Creature;

  constructor(creature1: Creature, creature2: Creature) {
    this.creature1 = creature1;
    this.creature2 = creature2;
  }
}
