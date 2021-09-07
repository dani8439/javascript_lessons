# Variable Environment: Hoisting and the TDZ

## Hoisting in JavaScript

### Execution Context Contains Three Parts

- Variable Environment
- Scope Chain
- `this` keyword

### Variable Environment

In JS we have a mechanism called hoisting.

**Hoisting** Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope."

On the surface Hoisting looks like a variable being lifted to the top of the scope. But that's not really what's happening behind hte scenes.

**Before execution**, code is scanned for variable declarations, and for each variable, a new property is created in the **variable environment object**. That's how hoisting really works.

Hoisting does not work the same for all variable types.

                            HOISTED?                      INITIAL VALUE                    SCOPE
                               👇                              👇                            👇

function declarations ✅ YES Actual Function Block

`var` variables ✅ YES `undefined` Function

`let` and `const` variables 🚫 NO `<uninitialized>`, TDZ Block

function expressions and arrows Depends if using `var` or `let/const`

Can use function declarations even before they are declared in the code. Because of hoisting. Block scope is only for in strict mode.

`var` variables buggy. Why we don't really use `var` in modern JS, as it's initial value is `undefined`.

`let` and `const` values: Technically they are hoisted, but their value is set to uninitialized, so as if in practice, hoisting isn't happening at all. Saying the values are placed in a Temporal Dead Zone (TDZ). If we attempt to use a `let` or `const` before declared, get an error. Are block scoped, exist only within the block that they are acreated.

## Temporal Dead Zone

```
const myName = 'Jonas';
if (myName == 'Jonas') {
  console.log(`Jonas is a ${job}`);
  const age = 2037 - 1989;
  console.log(age);
  const job = 'teacher';
  console.log(x);
}
```

Temporal Dead Zone for `job` variable of the three lines before `job` is defined
Region where the variable is defined, but can't be used in anyway. As if the variable does not exist. If we still try to access the variable within the TDZ, get a ReferenceError: Cannot access 'job' before initialization.

If we tried to access a variable that has never been created (console.log(x)) get the error message of a ReferenceError: x is not defined.

`job` is in the TDZ where it will eventually be initialized. It's already read the code, and set the variable environment to uninitialized. In execution, when it reaches the line where it's declared, it moves out of the dead zone, and then safe to use.

Each and every `let` and `const` variable get their own TDZ that starts at the beginning of the scope, until where it's defined.

### Why TDZ?

Why does it exist?
The behavior makes it easier to avoid and catch errors.

Accessing variables before declaration is bad practice, and best practice is to avoid it.

Second reason TDZ exists, is to make `const` variables work as they are supposed to. Can't set them to `undefined` first and redefine later. `const` should never be reassigned.

### Why Hoisting?

Creator of JS created hoisting so we can use functions before actually declaring them. Some people think it also makes code a lot more readable.

`var` hoisting is just a byproduct. Probably seemed like a good idea to set things to `undefined` but in hindsight isn't that great. JS was never intended to become as big as it's become. Can't remove it now. Have to work around it.
