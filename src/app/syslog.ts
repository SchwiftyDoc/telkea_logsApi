export class Syslog {
  date: String;
  ip: String;
  host: String;
  prival: number;
  facility: number;
  severity: number;
  type: String;
  message: String;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
