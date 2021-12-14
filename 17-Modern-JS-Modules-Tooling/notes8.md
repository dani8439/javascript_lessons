# An introduction to NPM

Node Package Manager

Why do we need a way of managing packaging dependencies in our projects? We used to do so using external libraries using the script tag. Exposes a global variable we could then use. This is what we did with the Mapty Project.

Creates a few problems especially in a big project. Not manageable. Doesn't make much sense to have the HTML load all of our javascript. Really need a way to manage our dependencies in a better, more modern way. NPM is how we do that.

`npm -v` checks version of npm that's installed.

In each project that we want to use NPM, need to start by initializing it.
`npm init` walks you through how to create a package.json file. Enter installs the defaults. Then we end up with a special package.json file. It's what stores the entire configuration of our project. T

Install the leaflet library using `npm install leaflet` can also use `npm i`. This alters the package.json file, updates the dependencies. Also creates a `nodule_modules` folder. Folder contains the leaflet folder. And all the code from the library. Contains everything about the library we need to include in our page. The more packages we install, they all get stored in the node_modules foliuder.

If we wanted to use the leaflet library, not easy to use without a module bundler. Cannot directly import it into our code. For now not doing it.

Lodash is one of the most popular libraries. Can't use common JS bundles without a module bundler. So want lodash es (es for ES modules). Our package.json updates. So does node_modules.

```
import cloneDeep from './node_modules/lodash-es/cloneDeep.js'
```

```
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
console.log(stateClone);
```

```
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
state.user.loggedIn = false; // change state.
console.log(stateClone); // updates in the deep clone.
```

```
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);
```

Good solution for a deep clone we got from NPM. The original object is false, but the copy is true.

Package.json file is very important. Say you want to share your project. Or check into version control. Should never include the node_modules folder. No reason to include it. In the real project it'll be huge. Will slow you down. Files are already at NPM. Can just get them back there.

If I copy project without dependencies, won't I have to install them? Package.json file comes into plate. Code won't work anymore. Easy way to get it back though is to `npm install` or `npm i`. Without package name. NPM will reach into your package file, find what's needed, and install them back.

Importing packages by specifying the path isn't really practical. So going to show in next video how to use parcel to fix this.
