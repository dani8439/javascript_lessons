# Asynchronous Behind the Scenes: The Event Loop

We learned what AJAX and API's are. Used a bunch of Asynchronous code. And used promises. What's missing is to finally understand how all of it works behind the scenes of JS.

JS Runtime - "Container" which includes all of the pieces necessary to execute JS Code.

The Heart is the JS Engine (Call stack and the Heap). Important to note that JS has one thread of execution. No multitasking.

Then we have the WEB API's. API's provided to the engine.

Then the Callback Queue - Data Structure that holds all the ready-to-be-executed callback functions that are attached to some event that has occurred.

Finally when the callstack is empty, the event loop takes callbacks from the callback queue and puts them into the call stack so that they can be executed. So teh event loop is the essntial piece that makes Asynchronous behavior possible in JS.

It's the reason why we can have non-blocking concurrency model in JS.

A **Concurrency model** How JavaScript handles multiple tasks happening at the same time.

How does non-blocking concurrency actually work? And Why is the Event Loop so important?

A JS engine is built around the idea of a single thread. If there's only one thread of execution in the engine, how can asynchronous code be executed in a non-blocking way?

```
el = document.querySelector('img');
el.src = 'dog.jpg';
el.addEventListener('load', () => {
    el.classList.add('fadeIn');
});

fetch('https://someurl.com/api')
    .then(res => console.log(res));

// More code...

```

1. Select image attribute.
2. Set src attribute of image to dog.jpg.
   This will start to load the image asynchronously in the background. Everything related to the DOM is not really part of JS, but of the web API's. In the web api's, the async tasks related to the DOM will run (Same true for timer's, ajax calls, and async tasks). All run in web api's environment in browser.

Loading images is asynchronous, because if it happened in callstack (main thread) it would block everything else. Happens in the web environment. If we want to do something to the image after it's finished loading, we do it to the load event.

3. That's what's happening in the third step. Attach an eventListener to the load event of the iamge, and pass in a callback function as always. In practice, means to register this callback in teh web API's environment exactly where the image is loading. The callback will stay there until the load event is emitted. Handling asynchronous behavior with a callback.

4. In next line, make an AJAX call using the `fetch()` api. This happens in teh Web API's environment, because otherwise we'd be blocking our callstock and create a huge lag in our application.

5. Finally use the `then()` method on the promise returned by the `fetch` function. Will also register a callback in the Web API's environment so we can register a future reaction to the Promise. This callback is associated with the promise that is fetching the data from the API.

Now we've executed all the top level code (that's not inside any callback function) in a synchronous way. Also have image loading in the background, and have fetched from an API.

Now it's time for everything to get really interesting. Say image has finished loading, therefore the load event has been emitted for this image. What happens is that the callback for this event is put in the callback queue.

The **callback queue** is basically an ordered list of all the callback functions that are in line to be executed. Can think of it as a To-Do list you'd write for yourself with all the tasks you have to complete. It has tasks the callstack has to eventually complete.

If there were already other callbacks waiting in line, this particular callback would go to the end of the queue, waiting for it's turn to run. Has big implications. Say set a timer for 5 seconds. After 5 seconds that timers callback will be put on teh callback queue. Say other callbacks waiting, and it took 1 sec to run all those callbacks. In that case, your timers callback would run after 6 seconds, and not after 5. The 6 seconds are the 5 seconds of the timer + 1 second to run all the callbacks waiting in line ahead. Means that the timers duration that you define is not a guarantee. The only guarantee is that the timers callback will not run before 5 seconds, but might very well run after 5 seconds have passed. All depends on state of the callback queue, and another queue.

Another thing that's important to mention, is that the callback queue also contains callbacks coming from DOM events like clicks or key presses, etc. DOM events aren't async behavior, but they use the callback queue to run their attached callbacks. If a click happens on a button with an event listener, same thing happens as what we illustrated with the load event.

**Event Loop** Looks into the callstack and determines whether it's empty or not, except for the global context. If the stack is indeed empty, there is currently no code being executed, then it will take the first callback from the callback queue, and put it onto the callstack to be executed. This is called an **Event Loop Tick**. Event loop has the extremely important task to coordinate between the callstack and the callbacks in the callback queue. So the Event Loop decides exactly when each callback is executed. The Event Loop does the orchestration of the entire JS runtime.

Another thing that becomes clear from this whole explanation, the JS language itself has no sense of time. Everything that is Asynchronous doesn't happen in the JS engine. It's the runtime who manages all the async behavior, and event loop decides which code will be executed next. The engine itself simply executes whatever code it is given.

## To Recap

Async code is code we defer into the future because we only want to execute it once something else happens.

In a nutshell, the WEP API's environment, the callback queue and the Event Loop altogether make it possible that async code can be executed in a non-blocking way, even with one thread of execution in the engine.

With a Promise, things happen in a slightly different way. Callbacks related to Promises, don't actually go into the callback queue. Callbacks of promises have a special queue from themselves. The **Microtasks Queue**. What's special about the Microtasks Queue is that it has priority over the callback queue!

After the end of an Event Loop Tick (after a callback has been taken from teh callback queue), the Event Loop will check if there are any tasks within the Microtasks Queue. If there are, it will run all of them before it will run anymore callbacks from the callback queue. Call these callbacks on promises **Microtasks** which is why it's the Microtask Queue.

In our original example, we have a microtask sitting in the Microtasks queue. with the fetch call. Microtasks ALWAYS have prioty. Means, in practice, they can cut in line in front of regular callbacks. If one callback adds a Microtask, that too is executed in front of other callbacks as it's added to the Microtask queue. This means that the Microtask queue can essentially starve the callback queue. Especially if we keep adding more and more microtasks, then callbacks in the callback queue can never execute (Usually never a problem). But maybe you'll be asked it one day on a job interview?

Idea of running async code with callbacks and microtasks with promises is very similar. Only difference is they go into different queues, and microtasks have priory over other callbacks.
