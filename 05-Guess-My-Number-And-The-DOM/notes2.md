# What's the DOM and DOM manipulation

DOM stands for Document Object Model. A structured representation of HTML documents. It allows JavaScript to access HTML elements and styles to manipulate them.

Can change text, HTML attributes, and even CSS styles through our JS.

The DOM is basically a connection point between HTML documents and JS code.

It's automatically created by the browswer as soon as the page is loaded. Stored as a tree. Each tree element is one object.

```
<html>
 <head>
    <title> A Simple Page </title>
 </head>
 <body>
    <section>
        <p>A paragraph with a <a>Link</a></p>
        <p>A second paragraph</p>
    </section>
    <section>
        <img src="whitespace_tree.png" alt="The DOM" />
    </section>
 <body>
</html>
```

Can interact with each node using JS.

Always start with Document at the top. Special object that is the entry point to the DOM (ex `document.querySelector()`) We need it to start selecting element.

First child element is usually the `html` element. Then, two child elements, `head`, and `body`. They are adjacent elements, siblings.

Then as we keep going deeper into the nested structure, keep adding more children to the DOM tree. Have more child elements, and they have child elements, etc, etc. Goes deeper and deeper.

The DOM tree has more than element nodes, has nodes for text, comments, and other stuff. Rule is whatever is in the HTML document, has to be in the DOM.

It really is a complete representation of the HTML document.

## The DOM is not JavaScript

Many people believe the DOM methods and properties are part of JavaScript.

JavaScript is just a dialect of ECMA script. All the DOM stuff isn't in there.

If the DOM isn't a part of the JS language, how does it work?

The DOM and DOM methods, are actually part of the WEB API's. Things we can access from our JS code. (API - Application Programming Interface) API's are libraries that are also written in JS, and are automatically available for us to use. All this happens behind the scenes. We don't have to import or do anything.

There is an official DOM specification that browsers implement, which is why DOM manipulation works in all browsers. There are a lot more API's, like Timers, and Fetch API's.
