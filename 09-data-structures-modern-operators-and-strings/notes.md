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
