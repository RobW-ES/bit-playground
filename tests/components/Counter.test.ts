import Counter from '../../src/components/Counter';

import { expect } from 'chai';
import 'mocha';

describe('My Counter Class', () => {

  it('should be able to instantiate and get count' , () => {
    let counter = new Counter(3);
    expect(counter.getCount()).to.equal(3);
  });

  it('should be to add a value and get count' , () => {
    let counter = new Counter(3);

    counter.add(4);

    expect(counter.getCount()).to.equal(7);
  });

  it('should be to subtract a value and get count' , () => {
    let counter = new Counter(6);

    counter.subtract(2);

    expect(counter.getCount()).to.equal(4);
  });

  it('should be to add, subtract and add a value and get count' , () => {
    let counter = new Counter(6);

    counter.add(12)
    counter.subtract(5);
    counter.add(2);

    expect(counter.getCount()).to.equal(15);
  });

});