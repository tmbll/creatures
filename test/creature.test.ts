import { Creature } from "../src/Creature";

describe("Creature", () => {
  it("creates a new creature with species, family and position", () => {
    const creature = new Creature("Bird", "flyer", { x: 0, y: 0 });
    expect(creature.species).toBe("Bird");
    expect(creature.family).toBe("flyer");
    expect(creature.position).toEqual({ x: 0, y: 0 });
  });

  it("should have HP and CP attributes", () => {
    const creature = new Creature("Bird", "flyer", { x: 0, y: 0 });
    expect(creature.HP).toBeDefined();
    expect(creature.CP).toBeDefined();
  });

  it("should lose HP when taking damage", () => {
    const creature = new Creature("Bird", "flyer", { x: 0, y: 0 });
    const initialHP = creature.HP;
    const damage = 1;
    creature.takeDamage(damage);
    expect(creature.HP).toBe(initialHP - damage);
  });
});
