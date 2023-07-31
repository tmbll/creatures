import { Creature } from "../src/Creature";
import { Collector } from "../src/Collector";
import { World } from "../src/World";
import { Species } from "../src/Species";
import { Family } from "../src/Family";

describe("World", () => {
  it("creates a world and adds a creator and collector to it", () => {
    const world = new World();
    world.addCreature(new Creature(Species.Bird, Family.Flyer, { x: 0, y: 0 }));
    world.addCollector(new Collector({ x: 0, y: 0 }));
    expect(world.creatures.length).toBe(1);
    expect(world.collectors.length).toBe(1);
  });

  it("returns nearby creatures for a given collector", () => {
    const world = new World();

    const collector = new Collector({ x: 0, y: 0 });
    const nearbyCreature = new Creature(Species.Bird, Family.Flyer, {
      x: 1,
      y: 1,
    });
    const farAwayCreature = new Creature(Species.Shark, Family.Swimmer, {
      x: 10,
      y: 10,
    });

    world.addCollector(collector);
    world.addCreature(nearbyCreature);
    world.addCreature(farAwayCreature);

    const nearbyCreatures = world.getNearbyCreatures(collector);
    expect(nearbyCreatures).toContain(nearbyCreature);
    expect(nearbyCreatures).not.toContain(farAwayCreature);
  });

  it("allows a collector to catch a random nearby creature", () => {
    const world = new World();

    const collector = new Collector({ x: 0, y: 0 });
    const nearbyCreature = new Creature(Species.Bird, Family.Flyer, {
      x: 1,
      y: 1,
    });

    world.addCollector(collector);
    world.addCreature(nearbyCreature);

    world.catchRandomCreature(collector);

    expect(collector.collection).toContain(nearbyCreature);
    expect(world.creatures).not.toContain(nearbyCreature);
  });
});
