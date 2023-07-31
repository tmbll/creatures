import { Creature } from "../src/Creature";
import { Family } from "../src/Family";
import { Species } from "../src/Species";

describe("Creature", () => {
  it("creates a new creature with species, family and position", () => {
    const creature = new Creature(Species.Bird, Family.Flyer, { x: 0, y: 0 });
    expect(creature.species).toBe(Species.Bird);
    expect(creature.family).toBe(Family.Flyer);
    expect(creature.position).toEqual({ x: 0, y: 0 });
  });

  it("should have HP and CP attributes", () => {
    const creature = new Creature(Species.Bird, Family.Flyer, { x: 0, y: 0 });
    expect(creature.HP).toBeDefined();
    expect(creature.CP).toBeDefined();
  });

  it("should lose HP when taking damage", () => {
    const creature = new Creature(Species.Bird, Family.Flyer, { x: 0, y: 0 });
    const initialHP = creature.HP;
    const damage = 1;
    creature.takeDamage(damage);
    expect(creature.HP).toBe(initialHP - damage);
  });
});
