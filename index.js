// index.js

import { Person, fetchData, delayedMessage, userMap } from './tools.js';

const p = new Person("Jordan");
console.log(p.greet());

fetchData().then(console.log);

delayedMessage("Hello after 2 seconds", 2000).then(console.log);

console.log("User Map:");
for (const [name, details] of userMap.entries()) {
  console.log(`${name} is ${details.age} years old.`);
}