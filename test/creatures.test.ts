describe("Creature", () => {
  it("creates a new creature with species, family and position", () => {
    const creature = new Creature("Bird", "flyer", { x: 0, y: 0 });
    expect(creature.species).toBe("Bird");
    expect(creature.family).toBe("flyer");
    expect(creature.position).toEqual({ x: 0, y: 0 });
  });
});

class Creature {
  species: string;
  family: string;
  position: { x: number; y: number };

  constructor(
    species: string,
    family: string,
    position: { x: number; y: number }
  ) {
    this.species = species;
    this.family = family;
    this.position = position;
  }
}
