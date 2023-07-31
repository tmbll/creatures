import { Entity } from "./Entity";

const randomNumberBetween1And10 = Math.floor(Math.random() * 10) + 1;

export class Creature implements Entity {
  species: string;
  family: string;
  position: { x: number; y: number };
  HP: number = randomNumberBetween1And10;
  CP: number = randomNumberBetween1And10;

  constructor(
    species: string,
    family: string,
    position: { x: number; y: number }
  ) {
    this.species = species;
    this.family = family;
    this.position = position;
  }

  takeDamage(damage: number) {
    this.HP = Math.max(this.HP - damage, 0); // HP never below 0
  }
}
