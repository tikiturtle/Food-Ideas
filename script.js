const food = ["Ramen",
"Fried Chicken",
"Curry",
"Steak",
"Gyudong",
"Sushi",
"Tacos",
"Donkatsu",
"Bahn Mi",
"Pho",
"Cheeseburgers",
"Pizza",
"Philly Cheesesteak",
"blackbean noodles",
"samgyupsal",
"galbi",
"pig feet",
"sandwiches",
"pasta",
"brunch",
"filipino"]

const foodoutput = document.querySelector(".food")
const foodbtn = document.querySelector(".foodbtn")

function RandomFoodGenerator(food) {
  let rng = Math.floor(Math.random()* food.length)
  foodoutput.innerHTML = food[rng];
};

function filler() {
  RandomFoodGenerator(food);
};


foodbtn.addEventListener("click", filler)
