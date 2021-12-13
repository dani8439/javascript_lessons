# The Module Pattern

Old pattern, will still see it around.

Main goal of module pattern is to encapsulate functionality to have private data, and to expose a public API. Best way of achieving all that is by simply using a function. Functions give us a private data by default, and allow us to return values, which can become our public API.

Start by writing a function. Usually start by writing an IFFE, and it's only called once.

```
(function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuanitity,
  };
})();

```

Right now all of this data is private because it's inside of the scope of the function.
All we have to do is to return some of this stuff in order to return a public API. To do that, we simply return an object that contains the stuff we want to make public.

```
return {
    addToCart,
    cart,
    totalPrice,
    totalQuanitity,
  };
```

Could have also defined all these things right in the object as methods. Find this way a bit easier. However, we are not really storing the returned object anywhere. If we run it. The object disappears into nothing. That's easy to fix. Can simply assign the result of running the IFFE to a new variable

```
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuanitity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
```

Can't access it in the console, as it's only consoled in the module. Can print out to the console, but can't just call `ShoppingCart2` in console and return info.

```
ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
```

Can't do `console.log(ShoppingCart2.shippingCost)` it returns `undefined` as it's private.

That's it, the implementation of the module pattern. How do we have access to the cart variable and even able to manipulate it? Even if the IFFE has already returned long ago? Function was only executed once in teh beginning, returned the object and assigned it to the variable. But then we were able to manipulate it. How?

Answer is closures. Closures allow a function to have access to all the variables that were present at it's birthplace.

`addToCart()` function is created in the `return` statement. It never loses the connection to it's birthplace of the entire function. All of the scope, which contains the cart. Therefore the `addToCart()` function outside can still access the cart variable that's available inside the function.

In essence, this is how the module pattern works. It works very well, and has been for a long time for developers. Problem is that if we wanted one module per file, we would have to create different scripts and link all of them in the HTML file. Creates a couple of problems. Have to be careful with order we declare them. Couldn't bundle them. Have them all existing in global scope.

Module pattern works quite good, but does have some limitations. It's why native modules were added to the pattern in ES6.
