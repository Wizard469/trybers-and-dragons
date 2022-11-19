import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _instancesCreated = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'stamina';
    Warrior._instancesCreated += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instancesCreated;
  }
}
