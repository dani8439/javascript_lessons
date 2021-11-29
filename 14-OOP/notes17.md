# Chaining Methods

Remember how we chained array methods one after another? By chaining the methods, could first `filter` and array, then `map` the results, and then `reduce` all in one line of code.

Very easy to do. All we have to do is at the end return the object itself that we want to be chainable.

Say we wanted to call a bunch of `deposit` `witdhraw` and `requestLoan` at once?

```
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)
```

Right now it's not going to work. The first call will, but then the second call after that to deposit will return nothing because not returning anything explicitly in the method. Trying to call the methods on `undefined`. What we need to do is to call `deposit` on an account. want for the result to be an account.

All we have to do is add a `return this` to our `deposit` method, and `withdraw` and `requestLoan`

```
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

```

returning `this` will essentially make the method chainable. This makes sense in methods that set the property.
