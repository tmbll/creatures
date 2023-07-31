import { Creature } from "./Creature";

export class Battle {
  creature1: Creature;
  creature2: Creature;

  constructor(creature1: Creature, creature2: Creature) {
    this.creature1 = creature1;
    this.creature2 = creature2;
  }

  fight() {
    const fighters = [this.creature1, this.creature2].sort(
      () => Math.random() - 0.5
    );
    let attacker = fighters[0];
    let defender = fighters[1];

    while (this.creature1.HP > 0 && this.creature2.HP > 0) {
      defender.takeDamage(attacker.CP);
      [attacker, defender] = [defender, attacker]; // Swap roles
    }

    return this.creature1.HP > 0 ? this.creature1 : this.creature2;
  }
}
