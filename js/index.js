/// <reference types="../@types/jquery" />;
import { getDetails } from "./details.js";
import {
  defaultData,
  searchLetter,
  searchName,
  getCategories,
  catMeals,
  getAreas,
  areaMeals,
  getIngredients,
  IngredientsMeals,
} from "./display.js";
import { displayForm, checkData } from "./contact.js";
defaultData();
// Open Bar
$("#open").on("click", function () {
  $("#sideBar").animate({ width: "270px" }, 500);
  $("nav").animate({ marginLeft: "270px" }, 500);
  $(".ele-up h6").animate({ top: "0", left: "0" }, 1000);
  $("#close").removeClass("d-none");
  $("#open").addClass("d-none");
});
// Close Bar
$("#close").on("click", closeBar);
function closeBar() {
  $("#sideBar").animate({ width: "0px" }, 500);
  $("nav").animate({ marginLeft: "0px" }, 500);
  $(".ele-up h6").animate({ top: "120%", left: "-100%" }, 350);
  $("#open").removeClass("d-none");
  $("#close").addClass("d-none");
}
// Get ID and Show Details
document.getElementById("myRow").addEventListener("click", function (e) {
  if (e.target.id) {
    const num = Number(e.target.id);
    if (isNaN(num) == false) {
      getDetails(num);
      document
        .querySelector("#detailCon")
        .classList.replace("d-none", "d-block");
      document.querySelector("#dataCon").classList.replace("d-block", "d-none");
    }
  }
});
// Close Details
$("#exitDetails").on("click", closeDetails);
function closeDetails() {
  document.querySelector("#dataCon").classList.replace("d-none", "d-block");
  document.querySelector("#detailCon").classList.replace("d-block", "d-none");
}
// Set Page
function setPage() {
  closeBar();
  closeDetails();
  document.getElementById("myRow").innerHTML = "";
  document.getElementById("myRow1").innerHTML = "";
  document.getElementById("myRow2").innerHTML = "";
  document.getElementById("myRow3").innerHTML = "";
  document.getElementById("myRow4").innerHTML = "";
}
// Search Meals
$("#search").on("click", function () {
  setPage();
  $("#searchCon").removeClass("d-none");
});
// By Name
$("#nameInput").on("input", function () {
  searchName(this.value);
});
// By Letter
$("#letterInput").on("input", function () {
  if (this.value.length != 0) {
    searchLetter(this.value);
  }
});
// Categories
$("#category").on("click", function () {
  setPage();
  $("#searchCon").addClass("d-none");
  getCategories();
});
// Get Category Name
document.getElementById("myRow1").addEventListener("click", function (e) {
  handle(e.target, "myRow1");
});
// Areas
$("#area").on("click", function () {
  setPage();
  $("#searchCon").addClass("d-none");
  getAreas();
});
// Get Area Name
document.getElementById("myRow2").addEventListener("click", function (e) {
  handle(e.target, "myRow2");
});
// Ingredients
$("#ingredients").on("click", function () {
  setPage();
  $("#searchCon").addClass("d-none");
  getIngredients();
});
// Get Area Name
document.getElementById("myRow3").addEventListener("click", function (e) {
  handle(e.target, "myRow3");
});
// Handle Rows
function handle(ele, row) {
  if (ele.id) {
    const num = Number(ele.id);
    if (!isNaN(num)) {
      setPage();
      if (row == "myRow1") {
        catMeals(ele.nextElementSibling.innerHTML);
      } else if (row == "myRow2") {
        areaMeals(ele.previousElementSibling.innerHTML);
      } else if (row == "myRow3") {
        IngredientsMeals(
          ele.previousElementSibling.previousElementSibling.innerHTML
        );
      }
    }
  }
}
// Contact
$("#contact").on("click", function () {
  setPage();
  $("#searchCon").addClass("d-none");
  displayForm();
  let userData = document.querySelectorAll("#userData input");
  checkData(userData);
});
