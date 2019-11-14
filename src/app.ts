/** 
 * An example Bit project which shows how to create and share
 * components via Bit.
 * 
 * @author Rob Waller
 */
import Appender from './components/Appender';
import Counter from './components/Counter';

let appender = new Appender('Hello');

appender.append('World!!');

console.log(appender.getSentence());

let counter = new Counter(6);

counter.add(3);

console.log(counter.getCount());