export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(cd) {
    this._code = cd;
  }

  get name() {
    return this._name;
  }

  set name(nm) {
    this._name = nm;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
