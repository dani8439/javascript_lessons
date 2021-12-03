# Asynchronous JavaScript, AJAX and API's.

To understand what **Aync** code is, need to understand what **Synchronous** code is.

```
const p = document.querySelector('.p');
p.textContent = 'My name is Jonas!';
alert('Text set!);
p.style.color = 'red';
```

👉 Most code is **synchronous**.

👉 Synchronous code is **executed line by line** in order that it's defined.

👉 Each line of code **waits** for the previous line to finish.

In the Thread of execution - Part of execution context that actually executes the code in the computer's CPU. (Not really important)

Each line of code always waits for the previous line to finish execution. Can create problems when one line of code takes a long time to run. Like say with the `alert` code. Will block the execution of what's after until it's executed. Alert statement is prefect example of a 👎**Long running operation that blocks code execution**

Most of the time synchronous code is fine and makes perfect sense. But, what happens when something lags for five seconds?

```
const p = document.querySelector('.p');
setTimeout(function() {
    p.textContent = 'My name is Jonas!';
}, 5000);
p.style.color = 'red';
```

👉 **Example**: Timer with callback.

First line of code is synchronous, so is the next. But the timer is asynchronous. It'll run in the background without preventing the code from executing. Callback will run _after_ timer.

It's Asynchornous because 👉 it's executed **after a task that runs in the "background" finishes;**

The callback is reginstered, then we immediately move onto th enext line.

👍 Asynchronous code is non-blocking;

👉 Execution doesn't wait for an asynchornous task to finish its work;

Previously we had to wait for user to click on alert window to complete execution. But now with timer, the callback is async. So only executed after timer has finished, so it's **non-blocking**. Rest of code can finish executing. When the timer finally finishes after 5 seconds, the callback function finishes executing as well. Action was deferred into the future in order to make the code non-blocking. Already saw this before when we first saw timers.

Asynchronous programming is about coordinating behavior of a program over a period of time.
This is essential to understand. Async means literally not occurring at the same time.

As we saw in example, need a callback function to make this async behavior. HOWEVER, 👉 callback functions alone do **NOT** make code asynchronous!

For example, the array `map` method accepts a callback function as well, doesn't make it async (`[1,2,3].map(v => v * 2)`). Callback functions alone do not make code asynchronous.

Another example:

```
const img = document.querySelector('.dog');
img.src = 'dog.jpg';
img.addEventListener('load', function() {
    img.classList.add('fadeIn');
});
p.style.width = '300px';
```

First two lines run synchronously. Second line we set the src attribute of the image of what we selected in the first line. Setting src of any image is actually asynchornous. It's essentially loading an image in the background while rest of the code can keep running. Imagine if it's a huge image, wouldn't want our entire code to wait to load. That's why the src attribute was implemented in JS in an asychnonrous way. Once it's finished submitting, a loadEvent will be submitted, Listening for th eloadEvent is what we do in the third line. Registering a callback function for the load event. Provide a callback function that will be executed once the image is loaded. Because all this code is non-blocking.

Once the img is completely loaded, it's displayed on the web page, and the load event is emitted. Since we're listening for that event, then our callback function is executed. Deferred an action into the future, making the code asynchronous and non-blocking.

Event Listeners alone do NOT make code asynch, just as callback functions alone do not make code async.

For example, an event listener waiting for a click, isn't async. It's not doing anything, just waiting for the click. In this example, the code is asynch because the image is loading. Or say running a timer, is what makes it asnychronous. Also AJAX calls, and Geolocation API's.

## AJAX

Asynchronous JavaScript and XML: Allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically. Don't have to reload the page. Can use the data in our app dynamically.

Possibilities are endless.

How does AJAX work? Let's say we have our JS app running in the browser (the client). Say we want to get some data from a web server. Say data about countries. With AJAX we can do an HTTP request to the server that has this data. Server will send back a response with the data we've requested. This back and forth between the client and the server happens asynchronously. All types of requests (GET, POST, PUT, PATCH, etc.)

When we're asking a server to send us some data, server usually contains a Web API, that API is the one that has the data that has the data that we're asking for. An API is pretty important.

### WHAT IS AN API?

API 👉 Application Programming Interface: Piece of software that can be used by another piece of software, in order to allow applications to talk to each other and exchange information.

👉 In JS and web development, there are countless types of API's. (DOM API, Geolocation API) Called API's because they are self contained pieces of software that allow other softwares to interact with them.

For example, our Mapty app. Also, we can always implement a small API in a class where we make some methods available in a public interface. Objects made from a class can be seen as self-contained encapsulated pieces of software that other pieces of software can interact with.

When we use AJAX, we use "Online" API's.

👉 "Online" API: Application running on a server, that receives requests for data, and sends data back as a response.

When building applications in practice, call these "Online" API's just API. Term online API isn't really real (he's made it up). Of course we can build our own online API's, but that require's backend development, or use 3rd Party API's. API's other developers make available to us for free.

Imagine building a travelling app. With different destinations and tours. On your own server, could build your own API that receives requests from Frontend in JS. Own API hosted on own server. On own, not enough to build a compelte app. So could use some 3rd party API's. There are API's for everything (Weather data, data about countries, flights data, currency conversion data, API's for sending email or SMS, Google Mapes, millions of possibilities.).

API's made the modern web possible in the first place.

API data formats. AJAX stands for XML. (XML data format) - used to be widely used to transmit data on the web. However these days, no one really uses XML anymore. Most API's use JSON data format. Basically just an object but converted to a string. Very easy to use once the data arrives.
