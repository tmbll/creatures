import { Entity } from "./Entity";
import { Species } from "./Species";

const randomNumberBetween1And10 = () => Math.floor(Math.random() * 10) + 1;

export class Creature implements Entity {
  species: Species;
  family: string;
  position: { x: number; y: number };
  HP: number;
  CP: number;

  constructor(
    species: Species,
    family: string,
    position: { x: number; y: number },
    HP?: number,
    CP?: number
  ) {
    this.species = species;
    this.family = family;
    this.position = position;

    // If HP is provided use the value otherwise use random number
    this.HP = HP ?? randomNumberBetween1And10();

    // If CP is provided use the value otherwise use random number
    this.CP = CP ?? randomNumberBetween1And10();
  }

  takeDamage(damage: number) {
    this.HP = Math.max(this.HP - damage, 0); // HP never below 0
  }
}
