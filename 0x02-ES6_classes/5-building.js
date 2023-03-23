export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sq() {
    return this._sqft;
  }

  set sq(s) {
    this._sqft = s;
  }
}
