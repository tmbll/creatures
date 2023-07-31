import { Creature } from "../src/Creature";
import { Collector } from "../src/Collector";
import { Species } from "../src/Species";

describe("Collector", () => {
  it("creates a collector with a position", () => {
    const collector = new Collector({ x: 0, y: 0 });
    expect(collector.position).toEqual({ x: 0, y: 0 });
  });

  it("catches a creature and adds it to its collection", () => {
    const collector = new Collector({ x: 0, y: 0 });
    const creature = new Creature(Species.Bird, "flyer", { x: 0, y: 0 });

    collector.catch(creature);
    expect(collector.collection).toContain(creature);
  });
});
