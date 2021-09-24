# Destructuring Arrays

Destructuring is an ES6 feature. It is a way of unpacking values from an array or an object into separate variables. Destructuring is to break a complex data structure down into a smaller data structure such as a variable.

with destructuring can declare all three variables at same time

start with `const []` put between brackets as destructuring an array, and then within brackets (the destructuring assignment), the elements we want to abstract, so `const [x, y, z] = arr`, which will then pull out `2 3 4`

original array is not affected at all, not destroying the array.

To take say, the first element, and the third element in an array with destructuring, you leave a hole. So

`const [first, second] = restaurant.categories` for the first and second categories, becomes `const [first, , second] = restaurant.categories` for the first and third categories

Use destructuring to do a lot of powerful things.

Can have a function return an array, and immediately destruct the results into variables.
`const [starter, mainCourse] = restaurant.order(2, 0);`
`console.log(starter, mainCourse);`

Nested destructuring:
destructuring inside of descruturing in order to get to the nested array.
`const [i, , [j, k]] = nested;`
`console.log(i, j, k);`

Can set default values for variables when extracting them.
Default values
`const [p = 1, q = 1, r = 1] = [8, 9];`
`console.log(p, q, r);`
returns undefined for position 2.
but can set default values, set them all to 1. So if no element, default value of 1.

# Destructuring Objects

Object destructuring, to do that we use the curly braces to destructure, because this is also how we create objects. All we have to do is provide variable names that exactly match property names that we want to extract from the object.

The order of elements in an object doesn't matter.

Very useful, especially when dealing with getting information from an API call, as it usually comes in an object.

Destructuring is a lifesaver, lets us write a lot less code.

What if we wanted variable names to be different than the property names? Still need to reference property names like before, but can then use a colon, and specify a new name. Ex:

` const {name: restaurantName, openingHours: hours, categories: tags} = restaurant`

Can assign default values when value might not be there, which is very helpful when data isn't hardcoded. Useful because might not know how the data will look when you get it in the real world.
