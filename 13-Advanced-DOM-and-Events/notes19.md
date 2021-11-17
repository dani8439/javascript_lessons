# DOM Lifecycle Events

A look at events that occur on the page during a lifecyle. By lifecycle mean from the time a person goes onto a page, and by the time they leave.

**DOMContentLoaded** Fired by the document as soon as HTML has been parsed (Downloaded and converted to the DOM tree) All scripts have to be converted before tree is loaded.

```
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});
```

Want our code to load only after the DOM is ready. Last thing read in the HTML is the script/index.js. When we have the script tag at the end of the HTML, don't have to listen for DOM Content loaded.

**The Load Event** Fired by the window as soon as HTML and images and external resources are loaded and parsed. When the complete page has finished loading is when it's fired.

```
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});
```

**beforeunload** created immediately before a user leaves a page. So say after clicking close button in browser tab. Can use it to ask if someone is sure they want to leave the page.

```
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});
```

`e.returnValue` is legacy code.

Don't abuse this. It's an intrusive message. Only time you should prompt a user when for say, they are leaving in the middle of filling out a form or filling out a blog post, a situation where data can be lost by accident.
