# Implementing Game Logic

Mean implementing how the game works. What happens when guess is correct. Need to implement when guess is too low, or too high. First need to define secret number, otherwise nothing to compare the guess too. Should define it outside, as we only want it defined once (rather than doing it within the button handler)

`Math` is an object JS gives us. Between 0 and 1.

Next step is to work with the score. Want it to go higher or lower depending on the guess.

Can call the `score` variable, a state variable. Could have saved it in the DOM, but then not have that value in our code. Our app would have no way of knowing the score at all points. Always good to keep a variable that holds the value in our code, and not hold it in the DOM. Makes it a state value. It's then part of the application state. (same thing goes for the `secretNumber` variable.)
