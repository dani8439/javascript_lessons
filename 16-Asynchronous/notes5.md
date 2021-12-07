# Promises and the Fetch API

Modern JS feature that helps us escape callback hell.

Modern way of making AJAX calls is with the `fetch` api.

To make a simple `get` request, all we need is to pass in the url and that's it.

```
const request = fetch('https://restcountries.com/v2/name/portugal');
console.log(request);

// Promise {<pending>}
```

`fetch` request immediately returns a `Promise`

What matters is we have a promise, (stored in the request variable).

## What exactly is a Promise and what can we do with it?

👉 **Promise** An object that is used as a placeholder for the future result of an asynchronous operation.

👉 **Promise** A container for an asynchronously delivered value.

👉 **Promise** A container for a future value.

A perfect example of a future value, is the response coming from an AJAX call. When we start the AJAX call, there's no value yet, but there will be in the future. We can use the promise to hold the future value.

🎟️ Analogy of the Lottery Ticket: A Promise is just like a lottery ticket, when you buy one, essentially receive a promise that you'll receive some amount of money in the future if you guess the right outcome.

☝️ Buy the lotto ticket right now -> 🔮 Lottery draw happens Asynchronously -> 💰 If correct outcome, will receive the money, because it was promised.

### Advantages of using Promises:

👉 We no longer need to rely on events and callbacks passed into asynchronous functions to handle asychnronous results.

👉 Instead of nesting callbacks, we can **chain promises** for a sequence of asynchronous operations, **escaping callback hell 🎉**

Promises are an ES6 feature. Became available in JS in 2015. Widely used by everyone.

## The Promise Lifecycle

Since promises work with Async operations, they are time sensitive. Change over time. Promises can be in different states. This is what we call the lifecycle of a promise.

**PENDING** Before the future value is available. Async task is doing it's work in the background.

**SETTLED** Asynchronous task has finished. Two types of Settled promises **FULFILLED** and **REJECTED**
A fulfilled promise is one that has successfully resulted as we expected. When we fetch data from an API, a fulfilled promise successfully got that data, and it's available to be used.

A Rejected promise means there has been an error during the asynchronously task. Say, user is offline and can't contact the server.

Going back to our lottery ticket, the lottery draw is the asynchronous task. Once the result is available, the ticket is settled. If we guess the correct outcome, promise is fulfilled. If we got it wrong, ticket is rejected.

Important to understand because when we use promises in our code, will be able to handle these different states in order to do something as a result of a successful or rejected promise.

Another important thing, is that a Promise is only settled once. State will remain unchanged forever from there. It's either fulfilled or rejected, but impossible to change that state.

These different states are relevant and useful to get the result, which is called to **CONSUME PROMISE** When we already have a promise, E.g. returned from Fetch API. But in order for a promise to exist in the first place, it must be built **BUILD PROMISE**. In the fetch api, the fetch function builds the promise and returns it for us to consume.

Most of the time, we will just consume promises, which is the easier and more useful part.
Sometimes we need to built it, and not consume it.
