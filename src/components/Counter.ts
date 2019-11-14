/**
 * Add and subtract values from a number.
 */
export default class Counter {
  count: number;
  
  constructor(count: number) {
    this.count = count;
  }

  getCount(): number {
    return this.count;
  }

  add(value: number) {
    this.count += value;
  }

  subtract(value: number) {
    this.count -= value;
  }
}