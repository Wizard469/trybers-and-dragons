import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _instancesCreated = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Halfling._instancesCreated += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._instancesCreated;
  }
}
