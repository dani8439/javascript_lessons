# Exporting and Importing in ES6 Modules

### Named Exports

Convention to use camelCase names for files.

Have to specify that the script is of the type module in the html file: ` <script type="module" defer src="script.js"></script>`

Now can see in the console, exporting module is logged first, follwed by importing module. Means that the code in the exporting module is executed first. Code is parsed first, and before it's executed, everything that's imported is executed first. All the importing statements are hoisted. No strict mode used either. As all modules are executed in strict mode by default.

Variables that are declared in a module (like `shippingCost` and `cart`) are scoped to the module. All top level variables are private inside of a module. Unlike traditional scripts which would put the variables in the global scope.

If we wanted to use these variables in another file, then would have to use exports.

Two types: **named imports** and **default exports**

Named Imports are the simplest way of exporting something from a module, because all we have to do is put an export in front of anything we wanted to export:

```
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
```

Can import it in the file by writing it in the file:

`import { addToCart } from ('./shoppingCart.js');`

With named exports, have to put them inside curly braces.

Exports always happen in top level code. Couldn't do this:

```
if (true) {
    export const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart`);
    }
}
```

Would break.

Can also export multiple things from a module using named exports. (Main use case of named exports)

```
const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };
```

Then import in the file: `import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';`

Can change the name of the imports as well, if we wanted to rename `totalPrice` as `price` do it as so:

`totalPrice as price,`

Or could do it in the export file itself:

`export { totalPrice, totalQuantity as tq };`

Can take it farther and import everything from a module in one. Use the `*`:

`import * as ShoppingCart from './shoppingCart';` Will create a namespace of everything from that module.

when we want to take anything from the object that's been imported have to do like so:

`ShoppingCart.addToCart('bread', 5)`;

It's as if `ShoppingCart` is an object created from the class, that has all these methods and properties.

```
import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);
```

Not trying to replace classes, just showing how it works.

### Default Exports

Usually we use default exports when we only want to export one thing per module. That's the reason why they are called default:

```
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
```

No name for the once called `addToCart()` function. When we import it we can give it any name we want.

`import add from './shoppingCart.js';`
Will import the default.

```
import add from './shoppingCart.js';
add('pizza', 2);
```

If we wanted, could mix default and named exports at the same time.

```
import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
add('pizza', 2);
console.log(price);
```

But in practice, we don't usually do so.

Preferred style is to use one default export per module. Reason why it's easier to import default exports. Shouldn't really mix default and named exports.

Imports are in fact a live connection to exports.

```
export const cart = [];
```

```
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);
console.log(cart);
```

When we console.log(cart) we can see an array of arrays. It's not simply a copy, it's a live connection that updates as we call it!

```
(3) [{…}, {…}, {…}]
```

Imports are not copies of the export. They are like a live connection. They point to the same place in memory. Otherwise if it was a copy, we wouldn't get or see anything in the array.
