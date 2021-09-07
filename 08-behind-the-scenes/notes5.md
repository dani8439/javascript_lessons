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

---

function declarations |✅ YES | Actual Function | Block |

`var` variables |✅ YES |`undefined` | Function |

`let` and `const` variables | 🚫 NO |`<uninitialized>`, TDZ | Block |

function expressions and arrows

Can use function declarations even before they are declared in the code. Because of hoisting. Block scope is only for in strict mode.

`var` variables buggy. Why we don't really use `var` in modern JS, as it's initial value is `undefined`.

`let` and `const` values: Technically they are hoisted, but their value is set to uninitialized, so as if in practice, hoisting isn't happening at all. Saying the values are placed in a Temporal Dead Zone.
