import { Creature } from "../src/Creature";
import { Battle } from "../src/Battle";

describe("Battle", () => {
  it("should initialise a battle between two creatures", () => {
    const creature1 = new Creature("Bird", "flyer", { x: 0, y: 0 });
    const creature2 = new Creature("Shark", "swimmer", { x: 1, y: 1 });
    const battle = new Battle(creature1, creature2);

    expect(battle.creature1).toBe(creature1);
    expect(battle.creature2).toBe(creature2);
  });
});
