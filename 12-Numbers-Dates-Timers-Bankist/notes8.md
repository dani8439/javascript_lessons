# Internationalizing Numbers

We can format regular numbers.

We use the `new Intl.NumberFormat()` a local string is passed in, `('en-US')`. Then call `.format()` on that, and pass in what we want to actually format, which in this case is the `num`

```
const num = 3884764.23;
console.log('US: ', new Intl.NumberFormat('en-US').format(num)); // US:  3,884,764.23
console.log('Germany: ', new Intl.NumberFormat('de-DE').format(num)); // Germany:  3.884.764,23
console.log('Syria: ', new Intl.NumberFormat('ar-SY').format(num)); // Syria:  ٣٬٨٨٤٬٧٦٤٫٢٣

```

Can also do an options object. Can specify `style`, and `unit`. There are tons of units. And pass the options into the NumberFormat function. Unit, percent, or currency are 3 options for style. unit is ignored depending what it is. But we need the currency for currency.

Have to set the currency here. Currency is not set by the locale. We have to define it manually.

Can turn off grouping `useGrouping` Check out doc on MDN to see all the things that can be done.
