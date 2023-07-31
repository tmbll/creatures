import { Creature } from "../src/Creature";
import { Battle } from "../src/Battle";

describe("Battle", () => {
  it("should initialise a battle between two creatures", () => {
    const creature1 = new Creature("Bird", "flyer", { x: 0, y: 0 });
    const creature2 = new Creature("Shark", "swimmer", { x: 1, y: 1 });
    const battle = new Battle(creature1, creature2);

    expect(battle.attacker).toBe(creature1);
    expect(battle.defender).toBe(creature2);
  });

  it("should execute fight between two creatures and declare a winner", () => {
    const creature1 = new Creature("Bird", "flyer", { x: 0, y: 0 }, 10, 1);
    const creature2 = new Creature("Shark", "swimmer", { x: 1, y: 1 }, 10, 5);
    const battle = new Battle(creature1, creature2);

    const winner = battle.fight();

    // Shark should win because it has higher CP and the same HP
    expect(winner).toBe(creature2);
    expect(creature1.HP).toBe(0);
  });
});
