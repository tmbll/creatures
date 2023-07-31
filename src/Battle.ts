import { Creature } from "./Creature";
import { Family } from "./Family";

export class Battle {
  attacker: Creature;
  defender: Creature;

  constructor(attacker: Creature, defender: Creature) {
    this.attacker = attacker;
    this.defender = defender;
  }

  fight() {
    this.randomiseRoles();

    while (this.attacker.HP > 0 && this.defender.HP > 0) {
      this.defender.takeDamage(this.attacker.CP);
      [this.attacker, this.defender] = [this.defender, this.attacker]; // Swap roles
    }

    return this.attacker.HP > 0 ? this.attacker : this.defender;
  }

  calculateDamage(attacker: Creature, defender: Creature): any {
    if (
      (attacker.family === Family.Flyer && defender.family === Family.Runner) ||
      (attacker.family === Family.Amphibian &&
        defender.family !== Family.Amphibian)
    ) {
      return attacker.CP * 2;
    }

    return attacker.CP;
  }

  private randomiseRoles() {
    const fighters = [this.attacker, this.defender].sort(
      () => Math.random() - 0.5
    );

    this.attacker = fighters[0];
    this.defender = fighters[1];
  }
}
