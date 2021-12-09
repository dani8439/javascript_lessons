# The Event Loop in Practice

```
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
console.log('Test end');

```

SetTimer should be called after 0 seconds. Put immediately on callback queue.
Promise that's immediately resolved.

In what order will the 4 messages be logged to the console?

first two logs will be the `Test start` and `Test end`

Both timer and Promise will finish at exact time. Timer because we told it to finish after 0. Promise because we told it to immediately become resolved. Both finish at exact same time. Promise resolves first because of the Microtask queue. Callback of the resolved promise will be put on the Microtask queue, which has priority over the callback queue. After whole code runs will have one callback in the callback queue, and one in the microtask queue. One in the microtasks queue is executed first.

```
Test start
script.js:303 Test end
script.js:302 Resolved promise 1
script.js:301 0 sec timer
```

Microtasks have priority over reg callbacks. If one of microtasks takes a long time to run, timer will be delayed and not run after specified time.

Simulation of a Microtask taking a long time:

```
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  // Microtask that takes a long time.
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});

console.log('Test end');
```

Takes a while for the second promise to resolve and for the looping to finish. Then it resolves at same times as 0 sec timer ends. Proves that the 0 seconds is not a guarantee. Cannot do high precision things using JS timers.
