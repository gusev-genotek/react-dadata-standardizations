class Api {
  static FIO = 'fio';
  static ADDRESS = 'address';
  static ORGANISATION = 'party';
  static BANK = 'bank';
  static EMAIL = 'email';
  static NAME = 'name';

  constructor(token) {
    this.locations_boost = [];
    this.token = token;
  }
}

export default Api;
