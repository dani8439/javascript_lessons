# Efficient Script Loading: defer and async

Up to this point, we've always used the regular way of loading JS files. However, we can also add the async attribute or the defer attribute. These attributes are going to influence the way the JS file is fetched (downloaded) and executed.

In the HTML, we can write the script tag in the Document Head, or the End of the Body.

**REGULAR**

When we include it without any attribute in the head, what will the page loading process look like over time? The HTML will start to be parsed by the browser (building the DOM tree from the HTML elements). Then at a certain point it'll find the script tage, fetch the script and execute it. During this time the HTML parsing will stop. Will wait for the script to be fetched ane executed. When it's finished, it'll finish parsing.

This is not ideal at all. Don't want the browser to be sitting there doing nothing. Can have a huge impact on page performance. In this case, a script can be executed before page is ready. So never include script in the head. We always put it at the end of the body, so all HTML is parsed by the time we reach the script tag. Much better to put it in the body. First HTML is parsed, then the script is fetched and executed.

**ASYNC**

In the head: Differences is that the script is loaded at the same time the HTML is parsed, an ASYNCHRONOUS way. However parsing still stops for script execution. Makes page loading time shorter.

**DEFER**
In the head: Script is loaded asynchronously, but the execution is deferred until the end of the HTML parsing. In practice, loading time is similar to ASYNC attribute, but in key difference HTML parsing is never interrupted, as script is loaded at the end. Many times, this is exactly what we wan.

Neither ASYNC or DEFER make sense in the body. No practical effect at all in the body.

There are of course use cases for all these strategies.

When loading an Async script,
DOMCOntentLoaded event usually waits for all scripts to executed, but scrips loaded with that are different. It's fired off as soon as HTML is finished parsing.

Using Defer forces DOMContentLoaded only to fire after defer script is executed.

Async scripts are not guaranteed to execute in order they are declared.

Defer that is not the case, scripts are executed in order.

Using DEFER in HTML head is the best solution, should use it when execution of the scripts and when order is important.

For 3rd party scripts where order doesn't matter, should use ASYNC.

If you have to worry about old browsers, put everything at the end of the body so it can support them.

Put `defer` attribute as it's the preferred way of loading our own scripts and when the order matters.
