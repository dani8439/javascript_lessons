# Internationalizing Dates: 1

JavaScript has a new internationalization API. All it allows us to do is easily format numbers and strings to different languages. Can do this for different languages around the world, which is very important.

There are a lot of language specific things we can do with the Internationalization API.

Have dates in the movements, and on top.

Old Code Pre-API:

```
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0); // 0 based
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
```

`labelDate.textContent = new Intl.DateTimeFormat('en-US')`

Intl is the namespace for the API. For times and dates use the `DateTimeFormat()` function. Pass in a localstring, and that's usually the language then dash the country.

`labelDate.textContent = new Intl.DateTimeFormat('en-US');` Will create a formatter for this language and this country. And on that formatter, we can call `.format()` and pass in the date we want to format (`now`)

`labelDate.textContent = new Intl.DateTimeFormat('en-US').format(now);` // As of 11/9/2021

```
const now = new Date();
labelDate.textContent = new Intl.DateTimeFormat('en-GB').format(now); // England - As of 09/11/2021
labelDate.textContent = new Intl.DateTimeFormat('ar-SY').format(now); // Syria - As of ٩‏/١١‏/٢٠٢١

```

Can get the code by googling iso language code table. www.lingoes.net very easy to understand.

This is the most straightforward way of formatting dates and times. Can take it to the next level and add some options to customize a little bit. Right now only displays the date, and not time. Can change that by providing an options object to the DateTimeFormat function.

```
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
};

labelDate.textContent = new Intl.DateTimeFormat('en-US', options).format(now); // As of 1:15 PM
```

can write `long` for month instead of `numeric` or `2-digit`. long shows the whole month. Can write `numeric` or `2-digit` for year. `long` for weekday, or `short` or `narrow` as well.

```
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};

labelDate.textContent = new Intl.DateTimeFormat('en-US', options).format(now);
```

In many situations it makes sense not to define locale manually, but to get it from the users browswer, which is very easy to do:

Need `navigator`

```
const locale = navigator.language;
console.log(locale); // en-US
```

This will automatically load based on my browser:s

```
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};

const locale = navigator.language;
console.log(locale); // en-US

labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);
```

Looking at the accounts, all the locales have been defined in what format. Want to use that to switch things up based on who logged in.

```
  labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
```

Problem here is entire user interface is in English, but weekday and month in Portuguese. To fix that, lets set month back to numeric, and get rid of the weekday.

Now we've localized one day, need to do it with the movements.

Documentation is on MDN. MDN intl
