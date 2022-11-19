import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  private static _instancesCreated = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Elf._instancesCreated += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._instancesCreated;
  }
}
