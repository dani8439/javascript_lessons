# The MVC Architecture

## Why worry about architecture?

Architecture will give our project the structure where we can write the code. In software, architecture means how we organize the code in classes, functions, etc.

Maintainability. When we build a project, always need to think about the future and keep in mind that it's never finished.

Expandability - We may want to add new features down the road.

The perfect architecture allows for all 3 aspects.

In order to achieve it, we can create our own architecture from scratch (Did that in Mapty). But it only works in small projects.

We can opt for a well-established pattern like MVC, MVP, Flux. (model view presenter).

These days, many developers use a framework to take care of the architecture for them (React, Angular, Vue, Svelte, etc). But it's very important to know JS before moving onto a framework.

## Components of any architecture

1. Business Logic 👉 Code that solves the actual business problem. 👉 Directly related to what business does and what it needs. 👉 Example: sending messages storing transactions, calculating taxes...
2. State 👉 Essentially stores all the data about the application. 👉 Should be the single source of truth. 👉 UI should be kept in sync with the state. 👉 State libraries exist (Redux, MobX)
3. HTTP Library 👉 Responsible for making and receiving AJAX requests. 👉 Optional but almost always necessary in real-world apps.
4. Application Logic (Router) 👉 Code that is only concerned about the implementation of application itself. 👉 Handles navigation and UI events.
5. Presentation Logic (UI Layer) 👉 Code that is concerned about the visible part of the application. 👉 Essentially displays application state.

## Model-View-Controller (MVC) Architecture

MODEL: About the applications data. Contains business logic and state. Also what contains the HTTP library that might get some data from the web. Also about the data. HTTP library.

VIEW: Presentation Logic. Part interacting with the user.

CONTROLLER: What contains the application logic. Sits between the model and the view. 👉 Bridge between model and views (which know nothing about each other). 👉 Handles UI events and dispatches tasks to model and view.

Model and view exist completely independent from the other.

One of the Big goals of the MVS pattern, is to separate business logic from application logic. Which makes developing the application so much easier. As a consequence, we need something to connec these parts, and that's the controller.
