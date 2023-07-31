import { Creature } from "../src/Creature";
import { Collector } from "../src/Collector";

describe("Creature", () => {
  it("creates a new creature with species, family and position", () => {
    const creature = new Creature("Bird", "flyer", { x: 0, y: 0 });
    expect(creature.species).toBe("Bird");
    expect(creature.family).toBe("flyer");
    expect(creature.position).toEqual({ x: 0, y: 0 });
  });
});

describe("Collector", () => {
  it("creates a collector with a position", () => {
    const collector = new Collector({ x: 0, y: 0 });
    expect(collector.position).toEqual({ x: 0, y: 0 });
  });
});
