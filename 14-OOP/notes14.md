# Another Class Example

There are a few more things we need to learn about classes. Going to use the bank account from the Bankist App as an example.

Doesn't make sense to pass in an empty array for movements like you pass in other attributes. instead, can do something different:

```

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
```

Could just push the movements in for deposit, and a negative value for a withdrawal. However it's not a good idea at all to do this:

```
acc1.movements.push(250);
acc1.movements.push(-140);
console.log(acc1);
```

It's a lot better to create methods that interact with properties, rather than interacting with them directly. Especially true for things like the movements.

Can call methods inside of other methods, so after creating a `deposit()` method, can call it inside of the `withdraw()` method.

```
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.desposit(-val);
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);

console.log(acc1);
```

Looks the same as before (our object) but now we are actually using this public interface that we built here. These methods are the interface to our objects (API).

Also the `withdraw` method abstracts the fact that a withdrawl is a negative movement. The - is something the user shouldn't be caring about. Abstracted it away into the object.

Nothing stopping anyone from interacting with the movements array directly, and introducing bugs. Same goes for the pin. Can access these things from outside the account, but they shouldn't be. A very real concern.

```
console.log(acc1.pin)
```

Say wanted to do an `approveLoan` and `requestLoan` method:

```
  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
```

In the public interface we only want the `requestLoan()` method.
