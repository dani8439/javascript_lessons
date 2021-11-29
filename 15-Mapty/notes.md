# Project Planning

Always very important to start with a planning phase before starting a project, otherwise setting yourself up for confusion down the road.

1. User Stories - Basically a description of the applications functionality from the **user's perspective**. All the user stories put together describe the entire application.

2. Features

3. Flowchart - WHAT we build

4. Architecture - HOW we will build it (what holds all the code together)

5. Development step - Implementation of our plan using code.

1-4 are planning steps.

## User Stories

👉 **User Story**: Description of the applications functionality from the user's perspective.

👉 **Common format** As a [type of user - Who?], I want [an action - What?] so that [a benefit - Why?]

1. As a user, I want to log my running workouts with location, distance, time, pace and steps/minute, so that I can keep a log of all my running.

2. As a user, I want to log my cycling workouts with location, distance, time,s peed and eleveation gain, so I can keep a log of all my cycling.

3. As a user, I want to see all my workouts at a glance, so I can easily track my progress over time.

4. As a user, I want to also see my workouts on a map, so I can easily check where I workout the most.

5. As a user, I want to see all my workouts when I leave the app and come back later, so that I can keep using the app over time.

## Features

**USER STORIES** --> **FEATURES**

1. Log my running workouts with location, distance, time, pace and steps/minute -> 👉Map of where user clicks to add new workout (best way to get location coordinates). 👉 Geolocation to display map at current location (more user friendly. ) 👉 Form to input distance, time, pace, steps/minute

2. Log my cycling workouts with location, distance, time, speed, and elevation gain. -> 👉 For to input distance, time, speed, elevation gain.

3. See all my workouts at a glance -> 👉 Display all workouts in a list

4. See my workouts on a map -> 👉 Display all workouts on the map

5. See all my workouts when I leave the app and come back later -> 👉 Store workout data in the browser using local storage API. 👉 On page load, read the saved data from local storage and display.

## Flowchart

Should contain the different features we want to implement, how things will interact, and how things will flow across the app. (Flowchart with numbers png)

FEATURES

1. Geolocation to display map at current location.

2. Map where user clicks to add a new workout.

3. Form to input distance, time, pace, steps/minute.

4. Form to input distance, time, speed, elevationg gain.

5. Display workouts in a list.

6. Display workouts on the map.

7. Store workout data in the browser.

8. On page load, read the saved data and display.

9. Move map to workout location on click (add later)

☝️ In the real world, you don't have to come up with the final flowchart right in the planning phase. It's normal that it changes throughout implementation.

## Architecture

Don't always need to have the perfect final architecture figured out before implementation. For now, let's just start coding.
