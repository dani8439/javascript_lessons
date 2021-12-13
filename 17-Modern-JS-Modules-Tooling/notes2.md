# An Overview of JS Modules:

**Module**
👉 Reusable piece of code that **encapsulates** implementation details.
👉 Usually a **standalone file**, but it doesn't have to be.

Not always the case, but normally when we think of a module, think of a separate file. Can have imports and exports. Can export values out of a module. Simple values or entire functions. Whatever we export from a module is called a public API. In the case of modules, the public API is consumed by importing values into a module.

In modules we can also import values from other modules. These other modules are called dependencies. Because the code can't work without importing the code from this other module. This is true for all modules in all programming languages, not just true to JS.

Modules are a pattern developers have been using for a long time.

We can absolutely write code without modules. But as a code base grows bigger and bigger, advantage to using modules.

👉 **Compose software** Modules are small building blocks that we put together to build complex applications.

👉 **Isolating components** Modules can be developed in isolation without thinking about the entire codebase.

👉 **Abstract code** Implement low-level code in modules and import these abstractions into other modules.

👉 **Organized code** modules naturally lead to a more organized codebase.

👉 **Reuse code** Modules allow us to easily reuse the same code, even across multiple projects.

Each engineer can work on their own module without understanding how it all works together.

## Native JS (ES6) Modules

ES6 Modules - Modules stored in files, **exactly one module per file**.

Aren't script's files too? Differences between the twos.

                            **ES6 module** VS **SCRIPT**

👉 Top-level variables: Scoped to module | Global
👉 Default mode Strict Mode | "Sloppy" mode
👉 Top Level `this` undefined | window
👉 Imports and Exports Yes | No
(Imports and exports can only happen at the top level - outside of any function or if block. Imports are hoisted. Always happens first)
👉 HTML linking <script type="module"> | <script>
👉 File downloading Asynchronous | Synchronous

### How ES6 Modules are Imported

index.js

```
import { rand } from '..math.js'
import { showDice } from '..dom.js'
const dice = rand(1, 6, 2);
showDice(dice);
```

When a piece of code is executed, first step is to parse that code. First step is to parse index.js. Parsing means to just read the code but without executing it. This is the moment in which imports are hoisted. Whole process of importing modules, happens before the main module is executed.

In this ex, index.js imports the math and dom modules in a synchronous way. Means that only after all imported modules have been downloaded and executed, the main index.js will be executed as well. Only possible because of top level imports and exports, which makes imports known before execution.

If we were allowed to import a module inside a function, function would have to first be executed before that could happen. Then it wouldn't be synchronous.

Why would we want things loaded in a synchronous way? This makes bundling and dead code elimination possible. It's very important in large projects with hundreds of modules and third party modules.

By knowing things before hand, bundlers can eliminate unecessary code.

After the parsing process has figured out which modules it needs to import, then these modules are actually downloaded from the server (this happens in an asychronous way). After a module arrives, it's also parsed, then the modules exports and linked to the exports. Then everything is connected within the module. Exported values are not copied to imports. The import is just kind of like a reference to the exported value. Like a pointer. When the value changes in the exported value, then the same value changes in the importing module. Important to understand as it's unique to ES6 modules. JS modules work this way.

Next up, the code in the imported modules is executed. Then the process of importing modules is finished. Time for the importing module to be executed as well.
