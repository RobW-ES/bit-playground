import Appender from '../../src/components/Appender';

import { expect } from 'chai';
import 'mocha';

describe('My Appender Class', () => {

  it('should be able to instantiate and get sentence' , () => {
    let appender = new Appender('Hello World!!');
    expect(appender.getSentence()).to.equal('Hello World!!');
  });

  it('should be able to append word and get sentence' , () => {
    let appender = new Appender('Hello World!!');

    appender.append('Rob');

    expect(appender.getSentence()).to.equal('Hello World!! Rob');
  });

  it('should be able to prepend word and get sentence' , () => {
    let appender = new Appender('Hello World!!');

    appender.prepend('Rob');

    expect(appender.getSentence()).to.equal('Rob Hello World!!');
  });

  it('should be able to append, prepend, append word and get sentence' , () => {
    let appender = new Appender('Hello World!!');

    appender.append('You');
    appender.prepend('Rob');
    appender.append('Are Great!!')

    expect(appender.getSentence()).to.equal('Rob Hello World!! You Are Great!!');
  });

});