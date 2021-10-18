# Which Data Structure To Use?

Dealing and working with Data is the main thing we do as developers.

Arrays, Objects, Sets, and Maps

Pros and Cons of each data structure, and when to choose each of them.

Essentially 3 sources of data:

1. From the program itself: Data written directly in source code (e.g. status messages)
2. From the UI: Data input from the user or data written in DOM (e.g. tasks in todo app)
3. From external sources: Data fetched from web API (Application Programming Interface) (e.g. recipe objects)

Usually have collections of Data that we need to store.

Store them in Data Structures. Four built in Data Structures in JS.

If it's a simple list of values? Use an Array or a Set. In a list, just have the values without any description.

If we need key-value pairs, need an Object or a Map. With a Key-Value pair, have a way to describe the values.

Going back to example of getting data from a web API, data comes in a special data format of JSON. Essentially just a long string, easily converted to JS objects, uses same formatting as objects and arrays.

In example, have three objects describing recipes. It's an object, with an array inside of it, of objects. Key value pairs are essential. Which is why it's stored in an object and not an array, need that info of title, source_url, publisher, etc, and then the value. In example, They are all recipes objects. Do we want to describe it as an object? Whatever info we need about the recipes is already stored in each object, have a list where all recipes are together. So an `Array` is a perfect data structure for it, and creating an array of objects is a perfect data structure.

Other Built-in Data Structures in JavaScript:

- WeakMap
- WeakSet

Other things not built into JavaScript:

- Stacks
- Queues
- Linked lists
- Trees
- Hash Tables

## Arrays VS. Sets And Objects VS. Maps

### Arrays VS Sets

Should use them for simple lists of values when do not need to describe the values.

`Arrays`
`tasks = ['Code', 'Eat', 'Code']`

- Use when you need **ordered** list of values (might contain duplicates)
- Use when you need to **manipulate** data.

`Sets`
` tasks = new Set(['Code', 'Eat', 'Code'])`

- Use when you need to work with **unique** values.
- Use when **high-performance** is _really_ important. Can be up to 10x faster in Sets vs Arrays.
- Use to **remove duplicates** from arrays.

### Objects VS. Maps

`Objects`

```
task = {
    task: 'Code',
    date: 'today',
    repeat: true
};
```

- More "traditiona" key/value store ("abused" objects)
- Easier to write and access values with `.` and `[]`

- Use when you need to include **functions** (methods)
- Use when working with JSON (can convert to map)

`Maps`

```
task = new Map {[
    ['task', 'Code'],
    ['date', 'today'],
    [false, 'Start coding!']
]};
```

- Better performance
- Keys can have **any** data type
- Easy to iterate
- Easy to compute size.

- Use when you simply need to map keys to values.
- Use when you need keys that are **not** strings.
