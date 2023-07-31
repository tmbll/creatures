import { Creature } from "./Creature";

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

  private randomiseRoles() {
    const fighters = [this.attacker, this.defender].sort(
      () => Math.random() - 0.5
    );
    this.attacker = fighters[0];
    this.defender = fighters[1];
  }
}
