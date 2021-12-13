# Common JS Modules

Also other module systems that have been used by JS in the past. Not native JS. Relied on some external implementations. Two examples are A & B Modules, and common JS modules.

Have been used in Node.js for almost all of its existence. Node.js is a way of running JS on a webserver outside of a Browser. Consequence is that almost all the modules in the NPM repository still use the common JS module system. Reason is because NPM was originally only inteded for Node. Only later did it become standard for the whole JS world. So now we're stuck with common JS.

One file is one module. Export something form a module using `export.` then the name of the export:

```
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
  );
};
```

This won't work in the browser, but will work in Node.js.

Export keyword is basically an object that's not defined in the code or the broswer. But in node.js it's an object that's used.

Import would be:

```
const { addToCart } = require('./shoppingCart.js');
```

There are different module systems and common JS is common in the world of JS. hopefully ES6 will replace these systems over time.
Good to know what this syntax is for when you run across it in the future.
