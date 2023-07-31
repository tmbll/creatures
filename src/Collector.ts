import { Entity } from "./Entity";

export class Collector implements Entity {
  position: { x: number; y: number };

  constructor(position: { x: number; y: number }) {
    this.position = position;
  }
}
