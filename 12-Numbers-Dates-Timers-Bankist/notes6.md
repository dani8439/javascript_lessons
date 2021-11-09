# Operations with Dates

One cool thing we can do with dates, is perform calculations with them.

For example, can subtract one date from another, in order to calc how many days have passed between both.
Works because whenever we convert a date to a number, result will be a timestamp with milliseconds, and with those milliseconds we can perform calculations.

```
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) => date2 - date1;

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1);
```

Can minus one date from another in the `calcDaysPassed` function. That gives us these milliseconds, which we can now just convert. Divide by 1000, so that converts milliseconds to seconds, then times 60 to convert to minutes, then times 60 to convert to hours, then times 24 to convert to days.

```
const calcDaysPassed = (date1, date2) =>
  (date2 - date1) / (1000 * 60 * 60 * 24);


  // 10
```

Result is 10, for 10 days.

Then change to do absolute value to make sure that even if one date is before the other, don't get a negative value.

```
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);

// 10
```

If you need really precise calculations, including time changes (daylight savings) and weird edge cases, then should use a Date library like Moment.js. That's a date library that's available for free to developers.

Want to format a bit more nicely in the app... 2 days ago... yesterday... 10 days ago etc... very nice use case of using the `calcDaysPassed()` function.

```
const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0); // 0 based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
};
```
