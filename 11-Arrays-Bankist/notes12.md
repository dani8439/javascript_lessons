# the `findIndex` method

A close cousin of the `find` method. Works almost the same way, but, it returns the index of the found element and not the element itself.

Great use case is to close account in the app. So just delete the account from the accounts array.

To delete an element from an array, we use the `splice()` method. For the `splice` method, we need the index of what we want to delete, so that can come from the `findIndex` method.

`findIndex` takes a callback function, which is very similar to all the other methods. Will loop over the array, and in each iteration get access to what we want. (get access to the current account in code example.)

Pass in condition that will either return true or false. `findIndex` will return first index that satisfies this condition as true. Similar to `indexOf` method. Big difference with `indexOf` can only search for a value that's in the array. But with `findIndex` can create a complicated condition vs just checking if the array contains said value. `indexOf` is a lot simpler.

```
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
```

Both `find` and `findIndex` methods get access to also the current index, and also the current entire array. But not always useful.

Both `find` and `findIndex` methods were added into JS in ES6. Won't work in very old browsers.
