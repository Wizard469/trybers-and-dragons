import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  private static _instancesCreated = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Orc._instancesCreated += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._instancesCreated;
  }
}
