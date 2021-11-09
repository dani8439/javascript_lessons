'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0); // 0 based
    const year = date.getFullYear();

    const displayDate = `${day}/${month}/${year}`;

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements_date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

// day/month/year

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0); // 0 based
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// Converting and checking numbers
/*
console.log(23 === 23.0);

// Base 10 - 0 to 9, 1/10 = 0.1. 3/10 = 3.333333
// Binary Base 2 - 0, 1
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); /// results in false when it should be true

// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e23')); // NAN

console.log(Number.parseInt('2.5rem')); // 2
console.log(Number.parseFloat('2.5rem')); // 2.5

// Check if value is NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(20 / 0)); // false

// Checking if value is a number
console.log(Number.isFinite(20)); // true Not NaN
console.log(Number.isFinite('20')); // false NaN
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0)); // false because gives Infinity

console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // tre
console.log(Number.isInteger(23 / 0)); // false
*/

////// Math and Rounding
/*
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // cubic root - 2

console.log(Math.max(5, 8, 23, 11, 2)); // 23
console.log(Math.max(5, 8, '23', 11, 2)); // 23
console.log(Math.max(5, 8, '23px', 11, 2)); // NaN

console.log(Math.min(5, 8, 23, 11, 2)); // 2

console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = function (min, max) {
//   return Math.trunc(Math.random() * (max - min) + 1) + min;
// };

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0.. 1 ->  0...(max - min) -> min... (max - min + min) -> min... max

// console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.trunc(23.3)); // 23
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// Floating Point Numbers (decimals)
console.log((2.7).toFixed(0)); // 3
console.log((2.7).toFixed(3)); // 2.700
console.log((2.345).toFixed(2)); // 2.35
console.log(+(2.345).toFixed(2)); // 2.35 NUMBER
*/

//////////////////////
// The Remainder Operator
/*
console.log(5 % 2); // 1
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3); // 2
console.log(8 / 3); // 2.6666 // 8 = 2 * 3 + 2

console.log(6 % 2); // 0
console.log(6 / 2); // 3

console.log(7 % 2); // 1
console.log(7 / 2); // 3.5

const isEven = n => n % 2 === 0;
const isOdd = n => n % 2 !== 0;

console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(514)); // false

console.log(isOdd(3)); // true

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

// Nth
*/

///////////////
// Working with BigInt
/* 
console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(2 ** 53 + 1); // 9007199254740992
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(4822384234824829349234923498294928343294); // 4.8223842348248294e+39
console.log(4822384234824829349234923498294928343294n); // 4822384234824829349234923498294928343294n
console.log(4822384234824829349234923498294928343294); // 4.8223842348248294e+39
console.log(BigInt(4822384234824829349234923498294928343294)); // 4822384234824829355742065295432158806016n

// Operations
console.log(10000n + 10000n); // 20000n
console.log(3646488248288838483483484384891919n * 10000000n); // 36464882482888384834834843848919190000000n
// console.log(Math.sqrt(16n)); // UnCaught Type Error

const huge = 2030040040139392929293n;
const num = 23;
// console.log(huge * num); // UncaughtTypeError: Cannot mix BigInt and other types
console.log(huge * BigInt(num)); // 46690920923206037373739n

// Exceptions
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); // bigint
console.log(20 === 20); // true
console.log(20n == '20'); // true

console.log(huge + ' is REALLY big!!!'); // 2030040040139392929293 is REALLY big!!!

// Divisions
console.log(10n / 3n); // 3n
console.log(10 / 3);
console.log(12n / 3n); // 4n
*/

//////////////////////////////
// Dates and Times

// Create a new date
/*
const now = new Date();
console.log(now); // Mon Nov 08 2021 16:08:18 GMT-0500 (Eastern Standard Time)

console.log(new Date('Mon Nov 08 2021 16:07:12')); // Mon Nov 08 2021 16:07:12 GMT-0500 (Eastern Standard Time)
console.log(new Date('December 25, 2015')); // Fri Dec 25 2015 00:00:00 GMT-0500 (Eastern Standard Time)
console.log(new Date(account1.movementsDates[0])); // Mon Nov 18 2019 16:31:17 GMT-0500 (Eastern Standard Time)

console.log(new Date(2037, 10, 19, 15, 23, 5)); // Thu Nov 19 2037 15:23:05 GMT-0500 (Eastern Standard Time)
console.log(new Date(2037, 10, 31)); // Tue Dec 01 2037 00:00:00 GMT-0500 (Eastern Standard Time)

console.log(new Date(0)); // Wed Dec 31 1969 19:00:00 GMT-0500 (Eastern Standard Time)
// convert from days to milliseconds using this: 3 is the amount of days passed. But 24 hours times 60 minutes times 60 seconds times 1000 milliseconds.
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sat Jan 03 1970 19:00:00 GMT-0500 (Eastern Standard Time)
*/

// Working with dates
/*
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10 -> 0 based, month 11.
console.log(future.getDate()); // 19
console.log(future.getDay()); // actually the day of the week --> 0 is Sunday. 4 is Thursday.
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0
// The ISO string that follows an international standard. Same to the string from movements with the Z.
console.log(future.toISOString()); // 2037-11-19T20:23:00.000Z
// can also get the timestamp for the date. Time stamp is the Milliseconds that have passed since Jan 1 1970.
console.log(future.getTime()); // 2142274980000

// Can reverse it and pass in to get the date.
console.log(new Date(2142274980000)); // Thu Nov 19 2037 15:23:00 GMT-0500 (Eastern Standard Time)

// Timestamps are so important that we can use a special method to get the timestamps of right now.
console.log(Date.now()); // 1636406689637
console.log(new Date(1636406689637)); // Mon Nov 08 2021 16:24:49 GMT-0500 (Eastern Standard Time)

// Finally also the set versions of all of these methods:
// for year:
future.setFullYear(2040);
console.log(future); // Mon Nov 19 2040 15:23:00 GMT-0500 (Eastern Standard Time)

// also setMonth, setDay, etc, etc. Also perform autocorrection just like when we create a new date.
*/
