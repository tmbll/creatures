import { Creature } from "../src/Creature";
import { Battle } from "../src/Battle";
import { Species } from "../src/Species";
import { Family } from "../src/Family";

describe("Battle", () => {
  it("should initialise a battle between two creatures", () => {
    const creature1 = new Creature(Species.Bird, Family.Flyer, { x: 0, y: 0 });
    const creature2 = new Creature(Species.Shark, Family.Swimmer, {
      x: 1,
      y: 1,
    });
    const battle = new Battle(creature1, creature2);

    expect(battle.attacker).toBe(creature1);
    expect(battle.defender).toBe(creature2);
  });

  it("should execute fight between two creatures and declare a winner", () => {
    const creature1 = new Creature(
      Species.Bird,
      Family.Flyer,
      { x: 0, y: 0 },
      10,
      1
    );
    const creature2 = new Creature(
      Species.Shark,
      Family.Swimmer,
      { x: 1, y: 1 },
      10,
      5
    );
    const battle = new Battle(creature1, creature2);

    const winner = battle.fight();

    // Shark should win because it has higher CP and the same HP
    expect(winner).toBe(creature2);
    expect(creature1.HP).toBe(0);
  });

  test.each([
    [Family.Flyer, Family.Runner, 2],
    [Family.Flyer, Family.Amphibian, 1],
    [Family.Flyer, Family.Flyer, 1],
    [Family.Amphibian, Family.Runner, 2],
    [Family.Amphibian, Family.Flyer, 2],
    [Family.Amphibian, Family.Amphibian, 1],
    [Family.Runner, Family.Runner, 1],
    [Family.Runner, Family.Flyer, 1],
    [Family.Runner, Family.Amphibian, 1],
  ])(
    "should calculate correct damage for super effective",
    (attackerType, defenderType, expectedDamage) => {
      const attacker = new Creature(
        Species.Bird,
        attackerType,
        { x: 0, y: 0 },
        10,
        1
      );
      const defender = new Creature(
        Species.Shark,
        defenderType,
        { x: 10, y: 10 },
        10,
        2
      );

      const battle = new Battle(attacker, defender);

      expect(battle.calculateDamage(attacker, defender)).toBe(expectedDamage);
    }
  );
});
