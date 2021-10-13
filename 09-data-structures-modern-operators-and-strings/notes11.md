# Maps Fundamentals

Other new JS Data Structure. A lot more useful than sets.

What exactly is a map? A data structure we can use to map values to keys. Data is stored in key-value pairs in maps. Big difference between objects and maps, in maps, the keys can have any type. This can be huge. In objects, keys are basically always strings, but in maps, the key can be anything. They can even be objects, or arrays, or other maps. Can lead to some very advanced stuff.

To **create** a map, use the constructure `Map()`, easiest way to make one, is to create an empty map.
`const rest = new Map();`

To **fill it up**, can use the `set` method.

`.set()` method is very similar to the `.add()` method. Both allow us to add a new element to the data structure. Can use any data type we want for keys, so can have a key be a number. Calling `.set()` on a map does not only update the map that it's called on but it also returns the map.

```
console.log(rest.set(2, 'Lisbon, Portugal'));

// returns Map(3) {'name' => 'Classico Italiano', 1 => 'Firenza, Italy', 2 => 'Lisbon, Portugal'}
```

The fact that the `.set()` method returns the map, allows us to chain the set method like this:

```
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
```

To **read** data from a map, use the `.get()` method, and pass in th key.

```
console.log(rest.get('name'));
console.log(rest.get(true));

//returns Classico Italiano
// We are open :D
```

When you pass in the key, the datatype matters. If you passed in `true` as a string, would get `undefined`

Can also use the `.has()` method on a map to see if it has a certain key.
Can also delete elements from the map with the `.delete()` method.

```
console.log(rest.has('categories'));
// returns true

rest.delete(2);
console.log(rest);
// returns new Map
```

Maps have the `size` property.

Can also use `.clear()` to remove all the elements from the map.

Can use arrays or objects as map keys.

ex:

```
rest.set([1, 2], 'Test');
console.log(rest);
// Map(8) {'name' => 'Classico Italiano', 1 => 'Firenza, Italy', 'categories' => Array(4), 'open' => 11, 'close' => 23, …}
[[Entries]]
0: {"name" => "Classico Italiano"}
1: {1 => "Firenza, Italy"}
2: {"categories" => Array(4)}
3: {"open" => 11}
4: {"close" => 23}
5: {true => "We are open :D"}
6: {false => "We are closed :("}
7: {Array(2) => "Test"}
size: 8
```

`console.log(rest.get([1, 2])); // returns undefined`
Because, the two arrays are actually not the same object as the `[1,2]` that was passed in. Not the same object in the heap. Key is exactly the object that was passed into memory.
to make it work would have to set the array to a constant, and then pass that in, and then to read.

EX:

```
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

// returns Test
```

This can be very useful with DOM elements, are nothing more than a special type of object.
