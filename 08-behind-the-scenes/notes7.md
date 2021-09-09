# Primitives vs Objects

## Review

### Primitives

- Number
- Strings
- Boolean
- Undefined
- Null
- Symbol
- BigInt

Primitive Types

### Objects

- Object Literal
- Arrays
- Functions
- Many More...

Reference Types

JS Engine has two components, Call Stack, and the Heap.
The Call Stack where functions are executed
The Heap where objects are stored in memory.

All our objects, or reference types, will get stored right in the memory heap.

Primitives or Primitive Types, are stored in the Call Stack, primitive types are stored within the execution contexts that they are declared. For now, simplifying that Primitive Types are stored in the Call Stack.

```
// Primitive Values example
let age = 30;
let oldAge = age;
age = 31;

console.log(age); // 31
console.log(oldAge); // 30

// Reference Values example
const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
// { name: 'Jonas', age: 27 }
console.log('Me', me);
// { name: 'Jonas', age: 27}
```

#### Primitive Values example:

When we declare something like `age = 30` what happens within the Call Stack.

First JS will create a unique identifier with the variable name. Then they will allocate the memory to an address, with a value. All happens in the callstack where primitive values are stored.

The identifier actually points to the address, not the value itself. Say the age is equal to value of 30. But age is equal to the memory address of 0001, which holds the value of 30. This subtle distinction is important to keep in mind.

oldAge will point to the same memory address as the age variable. Will look like oldAge is simply 30 as well.

But then in next line, set age to 31. Value at address 0001 will not become 31. Value at a certain memory address is immutable. What will happen is a new piece of memory is allocated/created, age identifier simply points to new address, that has the new value of 31.

That's why, when we log both variables to the console at the end, return values we expect.

### Reference Values Example:

Works a bit differently, which is what gave the weird behavior in practice.

When a new object is created, it is stored in the heap. There is a memory address (ex D30F), then the value itself. In the case of reference values like the me object, the me identifier does not point directly to memory address in heap. It will point to a new piece of memory in the stack (say 0003) that will then point the the memory address in the heap (D30F) by using the memory address as its value.

The piece of memory in the callstack has a reference to the piece of memory in the heap, which holds our object. This is why we call objects Reference types in this context. When we declare a variable as an object, an identifier is created, which points to a piece of memory in the stack, which in turn points to a piece of memory in the heap, where the object is stored. Works this way, because objects might be too big to be stored in the stack, so instead they are stored in the heap, which is like an almost unlimited memory pool. Stack keep sa reference to where it's stored in the heap, so it can find it whenever necessary.

Moving on in the code, create a new variable `friend`, set equal to the me object. Just like with primitive values, `friend` identifier will point to same memory address as the `me` identifier, which contains the reference to the object itself. So the `friend` is the exact same as the `me` object. Here comes the interesting part, trying to change something in the friend object. We reset `friend.age = 27`. so the friend object is found in the heap, and `age` is changed to `27`. Can still manipulate the object even though the me object was defined as a constant, because we're technically only manipulated the `friend` identifier. All we did was change the value in the, which is not a problem. It's a misconception that all values declared with `const` are immutable, it's only true with primitive values, not reference values.

When we log `friend`, get age as `27`, but then the weird behavior when logging `me` we get age as `27`. Happens because `me` and `friend` point to exact same object in memory heap. Whenever we change something in the object, changes everywhere. `me` and `friend` are two identifiers pointing to the same thing. That value is the memory address D305, which points to the reference in the memory heap.

Whenever you think you're copying an object, you're really just creating a new variable, that points to the same object. Has huge implications. There are also ways around this, which we'll learn about later. But this is how reference values work in JS.

#### How JS works behind the scenes.... topics for later

- Prototypal Inheritance
- Event Loop
- How the DOM really works
