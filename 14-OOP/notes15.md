# Encapsulation: Protected Properties and Methods

Encapsulation means to keep some properties and methods private inside the class so not accessible outside of the class. Rest of the methods are exposed as a public interface (API). Essential to do in anything more than a toy application.

Two big reasons why we need encapsulation and data privacy.

1. To prevent code from outside of a class to accidentally manipulate our data inside of the class.
2. When we expose only a small interface (a small API) then we can change all the other internal methods with more confidence. We can be sure external code doesn't rely on these private methods. Therefore, our code won't break when we do this.

JS classes actually do not yet support real data privacy and encapsulation. There is a proposal to add truly private methods to the language, but not ready yet. We'll fake it for now.

First candidate is to protect the movements array. Add an underscore `_` in front of the property name. Doesn't actually make the property truly private, just a convention. Call it protected. If still wanted to give access to the movements array from the outside would have to give a public method for that.

```
 getMovements() {
    return this._movements;
  }

  console.log(acc1.getMovements());
```

This would be the correct way to access the movements, but can't set them, unless they use the underscore with the convention, but at least know it's wrong with the property. Can protect the pin too, and the `approveLoan()` method.

```
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);

```

This is how we protect fields from unwanted access. Developers need to know and follow it, otherwise everything would be public.
