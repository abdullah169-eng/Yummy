// Get Default Data
export async function defaultData() {
  document.getElementById("loading").classList.remove("d-none");
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  const data = await res.json();
  displayData(data.meals);
  document.getElementById("loading").classList.add("d-none");
  document.getElementById("loading").classList.replace("z-3", "z-1");
}
// Get Searched meals
// By Letter
export async function searchLetter(letter) {
  document.getElementById("loading").classList.remove("d-none");
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
  );
  const data = await res.json();
  if (data.meals != null) {
    displayData(data.meals);
  } else {
    document.getElementById(
      "myRow"
    ).innerHTML = `<div class="text-center text-white w-100 fs-2">No Meals To Show</div>`;
  }
  document.getElementById("loading").classList.add("d-none");
}
// By Name
export async function searchName(name) {
  document.getElementById("loading").classList.remove("d-none");
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
  );
  const data = await res.json();
  if (data.meals != null) {
    displayData(data.meals);
  } else {
    document.getElementById(
      "myRow"
    ).innerHTML = `<div class="text-center text-white w-100 fs-2">No Meals To Show</div>`;
  }
  document.getElementById("loading").classList.add("d-none");
}
// display Data
function displayData(data) {
  let cartona = "";
  for (let i = 0; i < data.length; i++) {
    cartona += `<section class="col-md-3">
  <div class="par-move position-relative overflow-hidden rounded-2">
    <img class="w-100" src="${data[i].strMealThumb}" alt="meal" />
    <article
      class="move position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center p-2"
    >
      <div
        id="${data[i].idMeal}"
        class="position-absolute top-0 bottom-0 start-0 end-0"
      ></div>
      <span class="text-black fs-3 fw-semibold">${data[i].strMeal}</span>
    </article>
  </div>
</section>`;
  }
  document.getElementById("myRow").innerHTML = cartona;
}
// Get Categories
export async function getCategories() {
  document.getElementById("loading").classList.remove("d-none");
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  const data = await res.json();
  displayCategories(data.categories);
  document.getElementById("loading").classList.add("d-none");
}
// Get Category Meals
export async function catMeals(catName) {
  document.getElementById("loading").classList.remove("d-none");
  const res = await fetch(
    `https://themealdb.com/api/json/v1/1/filter.php?c=${catName}`
  );
  const data = await res.json();
  if (data.meals.length > 20) {
    displayData(data.meals.slice("0", "20"));
  } else {
    displayData(data.meals);
  }
  document.getElementById("loading").classList.add("d-none");
}
// display categories
function displayCategories(categories) {
  let cartona = "";
  for (let i = 0; i < categories.length; i++) {
    cartona += `<section class="col-md-3">
  <div class="par-move position-relative overflow-hidden rounded-2">
    <img class="w-100" src="${categories[i].strCategoryThumb}" alt="meal" />
    <article
      class="move position-absolute top-0 bottom-0 start-0 end-0 p-1 text-center"
    >
      <div
        id="${categories[i].idCategory}"
        class="position-absolute top-0 bottom-0 start-0 end-0"
      ></div>
      <span class="text-black fs-3 fw-semibold">${
        categories[i].strCategory
      }</span>
      <p>${categories[i].strCategoryDescription.split(" ", 20).join(" ")}</p>
    </article>
  </div>
</section>`;
  }
  document.getElementById("myRow1").innerHTML = cartona;
}
// Get Areas
export async function getAreas() {
  document.getElementById("loading").classList.remove("d-none");
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  const data = await res.json();
  displayArea(data.meals);
  document.getElementById("loading").classList.add("d-none");
}
// Get Area Meals
export async function areaMeals(areaName) {
  document.getElementById("loading").classList.remove("d-none");
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`
  );
  const data = await res.json();
  if (data.meals.length > 20) {
    displayData(data.meals.slice("0", "20"));
  } else {
    displayData(data.meals);
  }
  document.getElementById("loading").classList.add("d-none");
}
// display Areas
function displayArea(areas) {
  let cartona = "";
  for (let i = 0; i < areas.length; i++) {
    cartona += `<section class="col-md-3">
      <article
        class="point d-flex flex-column justify-content-center align-items-center text-white position-relative"
      >
        <i class="fa-solid fa-house-laptop fa-4x"></i>
        <span class="fs-3 fw-semibold">${areas[i].strArea}</span>
        <div
        id="${i}"
        class="position-absolute top-0 bottom-0 start-0 end-0"
      ></div>
      </article>
    </section>`;
  }
  document.getElementById("myRow2").innerHTML = cartona;
}
// Get Ingredients
export async function getIngredients() {
  document.getElementById("loading").classList.remove("d-none");
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  const data = await res.json();
  displayIngredients(data.meals);
  document.getElementById("loading").classList.add("d-none");
}
// Get Ingredients Meals
export async function IngredientsMeals(ingredName) {
  document.getElementById("loading").classList.remove("d-none");
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredName}`
  );
  const data = await res.json();
  if (data.meals.length > 20) {
    displayData(data.meals.slice("0", "20"));
  } else {
    displayData(data.meals);
  }
  document.getElementById("loading").classList.add("d-none");
}
// display Ingredients
function displayIngredients(ingred) {
  let cartona = "";
  for (let i = 0; i < 20; i++) {
    cartona += `<section class="col-md-3">
      <article
        class="point d-flex flex-column justify-content-center align-items-center text-white text-center position-relative"
      >
        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
        <span class="fs-3 fw-semibold">${ingred[i].strIngredient}</span>
        <p>${ingred[i].strDescription?.split(" ", 20).join(" ")}</p>
        <div
        id="${ingred[i].idIngredient}"
        class="position-absolute top-0 bottom-0 start-0 end-0"
      ></div>
      </article>
    </section>`;
  }
  document.getElementById("myRow3").innerHTML = cartona;
}
