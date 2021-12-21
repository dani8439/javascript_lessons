const btn = document.getElementById("btn");
btn.addEventListener("click", findYum);

async function findYum() {
  const response = await fetch(
    "https://foodish-api.herokuapp.com/api/images/dessert"
  );
  const dessert = await response.json();

  const image1 = dessert.image;

  const foodHolder = (document.getElementById(
    "foodHolder"
  ).innerHTML = `<img src=${image1}>`);
}

/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image: 
https://foodish-api.herokuapp.com/api/images/dessert

Stretch goals: 
- Show multiple desserts.
- Add the functionality to go back to the previous image.
*/
