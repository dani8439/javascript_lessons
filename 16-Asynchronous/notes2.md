# Our First AJAX Call: XMLHttpRequest

Going to build a UI component, which contains data about a certain country. Going to come from a 3rd party API.

Multiple ways of doing AJAX calls. Most old school is the XMLHttpRequest function.

```
const request = new XMLHttpRequest();
```

then need the url we're going to make the call to. Have to pass in the type of request to get information is `GET`. Then where we're actually going to call to.

Big repo on github: https://github.com/public-apis/public-apis

Using the REST Countries API. Any API you use should have CORS set to Yes or Unknown. Cross Origin Resource Sharing. Without it, can't access a 3rd party API from our own code.

Click, then look for the endpoint where the call is being made. We don't want all, we want to search the API by country name.

we've opened the request. Then we need to send it.

```
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/united');
request.send();
```

In order to get the result, can't just set some variable equal to the result. Can't do that, because the data isn't there yet. Because of asynchronous non-blocking behavior. Instead, need to register a callback on the request object for the load event.

As soon as it's loaded, callback function will be called. `this` keyword inside the function is the request. The response is in the property response text. Only set once the data has arrived.

```
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/usa');
request.send();
console.log(request.responseText);

request.addEventListener('load', function () {
  console.log(this.responseText);
});

```

Need to convert it from JSON to an object.

```
const data = JSON.parse(this.responseText)
```

Now, it's an array containing one object. We can destructure it as:

```
const [data] = JSON.parse(this.responseText)
```

Which remember is the same as doing: `const data = JSON.parse(this.responseText)[0]`

Now we're going to create a template literal, copying the element from the HTML:

```
  const html = `
        <article class="country">
          <img class="country__img" src="" />
          <div class="country__data">
            <h3 class="country__name">COUNTRY</h3>
            <h4 class="country__region">REGION</h4>
            <p class="country__row"><span>👫</span>POP people</p>
            <p class="country__row"><span>🗣️</span>LANG</p>
            <p class="country__row"><span>💰</span>CUR</p>
          </div>
        </article>
  `;
```

And we have to replace the data we want to display.

For the population, want to convert the string to a number so `+`. Then want to divide by 1000000. And then only want one decimal place so call `toFixed(1)`

```
${(
              +data.population / 1000000
            ).toFixed(1)}
```

Need to do the same thing for currencies as languages. Want the first element of the array, and then call the key value pair, the name.

```
 const html = `
        <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}/p>
          </div>
        </article>
  `;
```

Then need to insert this HTML into our page.

Have the countries element, and have called it the countriesContainer. Then set opacity to 1, to trigger the animation in the countries CSS>

```
countriesContainer.insertAdjacentElement('beforeend', html);
  countriesContainer.getElementsByClassName.opacity = 1;
```

Put the function into it's own function, replaced the country with a template literal, so can just call the function and display multiple countries at once.

If we reload the page multiple times, shows non-blocking behavior in action. As we call `getCountryData('use')` first time, it calls right away, then moves onto the next line `getCountryData('portugal')`. Whichever one finishes first will display first. Flags flip around as you click refresh over and over. Whichever arrives first is displayed first.

If we wanted them made in a specific order, would have to chain the requests. Meaning don't fire it until you deliver the first.
