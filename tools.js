

// Class
export class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, I am ${this.name}`;
  }
}

// Async Function
export async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000);
  });
}

// Promises
export function delayedMessage(msg, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(msg), delay);
  });
}

// Maps
export const userMap = new Map();
userMap.set("Alice", { age: 25 });
userMap.set("Bob", { age: 30 });

