# Implementing Login

When processing an event listener on a form, need to pass in e (`e.preventDefault()`) as a form automatically reloads/refreshes the page. Prevent form from submitting.

Another thing that's great about forms, is that whenever we have one of the fields inputted, and hit enter, then that will automatically trigger a click event on the button.

`find` method will return `undefined` if no element matches it's condition.

Could do

```
  if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');
```

But can do better, as we learned about optional chaining.

```
 if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');
  }
```

The pin property will only be read in case the currentAccount actually exists.

```
inputLoginUsername.value= '';
inputLoginPin.value = '';
```

Can be rewritten as `inputLoginUsername.value = inputLoginPin.value = '';` because assignment operator works right to left.

To remove a cursor from blinking in the input login field, use `.blur()` : `inputLoginPin.blur();`
