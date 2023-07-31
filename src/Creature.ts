import { Entity } from "./Entity";

export class Creature implements Entity {
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
