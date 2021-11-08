# Creating Dates

Dates and Times.

Can be a little bit messy and confusing in JS.

First need to create a date. 4 ways of doing so. All use the new `Date` constructor function, but can accept different parameters.

1. `const now = new Date();`

2. parse the date from date string. `console.log(new Date('Nov 08 2021 16:07:12'))`
   `console.log(new Date('December 25, 2015'))`
   Kind of unreliable doing it because it can be unreliable. Unless the string was created by JS itself, then the data is pretty safe.

3.

4.

```
const now = new Date();
console.log(now); // Mon Nov 08 2021 16:08:18 GMT-0500 (Eastern Standard Time)

console.log(new Date('Mon Nov 08 2021 16:07:12')); // Mon Nov 08 2021 16:07:12 GMT-0500 (Eastern Standard Time)
console.log(new Date('December 25, 2015')); // Fri Dec 25 2015 00:00:00 GMT-0500 (Eastern Standard Time)
console.log(new Date(account1.movementsDates[0])); // Mon Nov 18 2019 16:31:17 GMT-0500 (Eastern Standard Time)

console.log(new Date(2037, 10, 19, 15, 23, 5)); // Thu Nov 19 2037 15:23:05 GMT-0500 (Eastern Standard Time)
```

The Z at the end of the `movementDates` means the UTC, coordinated Universal time. Time without any time zone in London, and without daylight savings.

```
movementsDates: Array(8)
0: "2019-11-18T21:31:17.178Z"
1: "2019-12-23T07:42:02.383Z"
2: "2020-01-28T09:15:04.904Z"
3: "2020-04-01T10:17:24.185Z"
4: "2020-05-08T14:11:59.604Z"
5: "2020-05-27T17:01:17.194Z"
6: "2020-07-11T23:36:17.929Z"
7: "2020-07-12T10:51:36.790Z"
```

Month in JavaScript is 0 based, like indexes. Passed in 0 for the month in constructor, meaning November the 11th month. What's cool is that JS automatically auto corrects the date. 33rd for the day becomes the 2nd depending on the month, etc.

```
console.log(new Date(2037, 10, 19, 15, 23, 5)); // Thu Nov 19 2037 15:23:05 GMT-0500 (Eastern Standard Time)
console.log(new Date(2037, 10, 31)); // Tue Dec 01 2037 00:00:00 GMT-0500 (Eastern Standard Time)
```

Can also pass in the amount of milliseconds since the beginning of the unix time (Jan 1 1970)

```
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sat Jan 03 1970 19:00:00 GMT-0500 (Eastern Standard Time)
```

convert from days to milliseconds using this: 3 is the amount of days passed. But 24 hours times 60 minutes times 60 seconds times 1000 milliseconds.

```
3 * 24 * 60 * 60 * 1000
259200000
```

the 25 number is the timestamp.

The date we just created just another type of object. Therefore they have their own methods just like arrays, maps, or strings. Can use these methods to get or set components of a date.

```
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
```
