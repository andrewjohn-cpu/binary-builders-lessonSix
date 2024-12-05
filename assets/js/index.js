let recipes = [
  {
    id: 1,
    recipeName: "Strawberry Cake",
    recipeImage: "./assets/images/strawberry-cake.jpg",
    recipeIngredient: [
      "400g graham crackers",
      "150g unsalted butters, melted",
      "300g marshmallows",
    ],
    recipePreparation: [
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
    ],
  },
  {
    id: 2,
    recipeName: "Strawberry Cake",
    recipeImage: "./assets/images/strawberry-cake.jpg",
    recipeIngredient: [
      "400g graham crackers",
      "150g unsalted butters, melted",
      "300g marshmallows",
    ],
    recipePreparation: [
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
    ],
  },
  {
    id: 3,
    recipeName: "Strawberry Cake",
    recipeImage: "./assets/images/strawberry-cake.jpg",
    recipeIngredient: [
      "400g graham crackers",
      "150g unsalted butters, melted",
      "300g marshmallows",
    ],
    recipePreparation: [
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
      "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
    ],
  },
];

let recipeListContainer = document.querySelector("#recipe-display-container");
let recipeCard = document.getElementById("card");

function displayAllRecipes() {
  recipes.map((recipe) => {
    let recipeCard = document.createElement("div");
    recipeCard.classList.add("card");
    recipeCard.innerHTML = `
       <img src="${recipe.recipeImage}" clStrawberry Cream Cheesecakeass="card-img-top"
                    alt="recipe-image">
       <div class="card-body">
            <h5 class="card-title">${recipe.recipeName}</h5>
            <a href="/detail-recipe.html" class="btn btn-primary">Read More</a>
       </div>
    `;
    console.log(recipeCard);
    recipeListContainer.appendChild(recipeCard);
  });
}

displayAllRecipes();

// recipeCard.innerHTML = `
//  <div class="card" style="width: 18rem;">
//     <img src="/assets/images/strawberry-cake.jpg" clStrawberry Cream Cheesecakeass="card-img-top"
//         alt="recipe-image">
//     <div class="card-body">
//         <h5 class="card-title">Strawberry Cream Cheesecake</h5>
//         <a href="/detail-recipe.html" class="btn btn-primary">Read More</a>
//     </div>
//  </div>
// `;
