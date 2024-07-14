// Get Details
export async function getDetails(id) {
  document.getElementById("loading").classList.remove("d-none");
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await res.json();
  displayDetails(data.meals);
  document.getElementById("loading").classList.add("d-none");
}
// display Details
function displayDetails(data) {
  // Know Number of Recipes
  let cartona = "";
  for (let i = 1; i <= 20; i++) {
    if (data[0][`strIngredient${i}`]) {
      const recipe =
        data[0][`strMeasure${i}`] + " " + data[0][`strIngredient${i}`];
      cartona += `<li class="alert alert-info m-2 p-1">${recipe}</li>`;
    }
  }
  // Know Number of Tags
  let container = "";
  if (data[0].strTags != null) {
    let tags = data[0].strTags.split(",");
    for (let x = 0; x < tags.length; x++) {
      container += `<li class="alert alert-danger m-2 p-1">${tags[x]}</li>`;
    }
  }
  // display
  document.getElementById("myDetails").innerHTML = `<article class="col-md-4">
            <div>
              <img
                class="w-100 rounded-2"
                src="${data[0].strMealThumb}"
                alt="meals"
              />
              <h2 class="text-white">${data[0].strMeal}</h2>
            </div>
          </article>
          <article class="col-md-8 text-white">
            <h2>Instructions</h2>
            <p>${data[0].strInstructions}</p>
            <h3><span class="fw-bolder">Area : </span>${data[0].strArea}</h3>
            <h3><span class="fw-bolder">Category : </span>${data[0].strCategory}</h3>
            <h3><span class="fw-bolder">Recipes : </span></h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">${cartona}</ul>
            <h3><span class="fw-bolder">Tags : </span></h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">${container}</ul>
            <a
              href="${data[0].strSource}"
              class="btn btn-success text-white me-2"
              target="_blank"
            >
              Source
            </a>
            <a
              href="${data[0].strYoutube}"
              class="btn btn-danger text-white"
              target="_blank"
            >
              Youtube
            </a>
          </article>`;
}
