import { Creature } from "../src/Creature";
import { Collector } from "../src/Collector";
import { World } from "../src/World";

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

  it("catches a creature and adds it to its collection", () => {
    const collector = new Collector({ x: 0, y: 0 });
    const creature = new Creature("Bird", "flyer", { x: 0, y: 0 });

    collector.catch(creature);
    expect(collector.collection).toContain(creature);
  });
});

describe("World", () => {
  it("creates a world and adds a creator and collector to it", () => {
    const world = new World();
    world.addCreature(new Creature("Bird", "flyer", { x: 0, y: 0 }));
    world.addCollector(new Collector({ x: 0, y: 0 }));
    expect(world.creatures.length).toBe(1);
    expect(world.collectors.length).toBe(1);
  });

  it("returns nearby creatures for a given collector", () => {
    const world = new World();

    const collector = new Collector({ x: 0, y: 0 });
    const nearbyCreature = new Creature("Bird", "flyer", { x: 1, y: 1 });
    const farAwayCreature = new Creature("Shark", "Swimmer", { x: 10, y: 10 });

    world.addCollector(collector);
    world.addCreature(nearbyCreature);
    world.addCreature(farAwayCreature);

    const nearbyCreatures = world.getNearbyCreatures(collector);
    expect(nearbyCreatures).toContain(nearbyCreature);
    expect(nearbyCreatures).not.toContain(farAwayCreature);
  });
});
