const person = {
  name: 'John',
  age: 30,
  address: 'Beijing'
};

const defaults = {
  address: 'Shanghai'
};

Object.assign(person, defaults);

console.log(person); // { name: 'John', age: 30, address: 'Shanghai' }
