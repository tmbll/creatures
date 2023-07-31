import { Creature } from "./Creature";
import { Entity } from "./Entity";

export class Collector implements Entity {
  position: { x: number; y: number };
  collection: Creature[] = [];

  constructor(position: { x: number; y: number }) {
    this.position = position;
  }

  catch(creature: Creature) {
    this.collection.push(creature);
  }
}
