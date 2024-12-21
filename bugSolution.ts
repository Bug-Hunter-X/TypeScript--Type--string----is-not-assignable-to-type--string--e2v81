function greeter(person: string | string[]): string {
  if (Array.isArray(person)) {
    return "Hello, " + person.join(", ");
  } else {
    return "Hello, " + person;
  }
}

let user = ["Alice", "Bob", "Charlie"];
console.log(greeter(user)); // Works correctly now

console.log(greeter("Alice")); //Also works