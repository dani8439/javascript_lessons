# Functions Calling Other Functions

Going back to the original fruit processor analogy. Say we want to use that function, but, to use it, we need to use another machine first, that cuts the fruit into smaller pieces before making the juice.

Why not multiply within the original function and call it a day rather than going through the process of a function calling another function?

Because it's very common for one function to call another function. Also illustrates the DRY principle. could hard code the logic into main function, but then might have to change in multiple places with similar logic. Say, wanted fruit cut in more than 4 pieces, etc. Quickly becomes annoying, and a potential source of bugs. Better functionality to put logic into it's own function.
