# Which Array Methods to Use?

We have studied 23 different array methods. That's amazing. That means can now do everything you can imagine with arrays. Problem is chosing between 23 different methods isn't always easy, especially when first started learning. Probably confusion about the methods and which ones to use when now.

The best way to figure out which method to use, is by starting to ask, what do I actually want from this method?

**Do I want to mutate the original array?**

👉 Add to original:
`.push` (end)
`.unshift` (start)

👉 Remove from original:

`.pop` (end)
`.shift` (start)
`.splice` (any)

👉 Others:

`.reverse`
`.sort`
`.fill`

**Do I want a new Array?**

👉 Computed from original:
`.map` (loop)

👉 Filtered using condition:
`.filter`

👉 Portion of the original:
`.slice`

👉 Adding original to other:
`.concat`

👉 Flattening the original:
`.flat`
`.flatMap`

**Do I want an Array Index?**

👉 Based on value:
`.indexOf`

👉 Based on a test condition:
`.findIndex`

**Do I want an Array element?**

👉 Based on a test condition:
`.find`

**Do I want to know if an array includes?**

_returns a boolean value_
👉 Based on value:
`.includes`

👉 Based on test condition:
`.some` (some)
`.every` (all)

**Do I want a new string?**

👉 Based on separator string:
`.join`

**Do I want to transform to a value?**

👉 Based on accumulator:
`.reduce`

_(Boils down array to single value of any type: number, string, boolean, or even new array or object)_

**Do I want to just loop over an array?**

👉 Based on callback:
`.forEach`

_(Does not create a new array, just loops over it)_
