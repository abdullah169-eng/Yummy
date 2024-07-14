// Display Form
export function displayForm() {
  document.getElementById(
    "myRow4"
  ).innerHTML = `<div class="d-flex justify-content-center align-items-center vh-100">
    <section class="w-75 text-center mx-auto">
            <article id="userData" class="row g-4">
              <div class="col-md-6">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  class="form-control"
                  id="userName"
                />
                <div class="alert alert-danger text-center my-2 px-2 py-3 d-none">
                  Special characters and numbers not allowed
                </div>
              </div>
              <div class="col-md-6">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  class="form-control"
                  id="userEmail"
                />
                <div class="alert alert-danger text-center my-2 px-2 py-3 d-none">
                  Email not valid *exemple@yyy.zzz
                </div>
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  placeholder="Enter Your Phone"
                  class="form-control"
                  id="userNumber"
                />
                <div class="alert alert-danger text-center my-2 px-2 py-3 d-none">
                  Enter valid Phone Number
                </div>
              </div>
              <div class="col-md-6">
                <input
                  type="number"
                  placeholder="Enter Your Age"
                  class="form-control"
                  id="userAge"
                />
                <div class="alert alert-danger text-center my-2 px-2 py-3 d-none">
                  Enter valid age
                </div>
              </div>
              <div class="col-md-6">
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  class="form-control"
                  id="userPassword"
                />
                <div class="alert alert-danger text-center my-2 px-2 py-3 d-none">
                  Enter valid password *Minimum eight characters, at least one letter
                  and one number:*
                </div>
              </div>
              <div class="col-md-6">
                <input
                  type="password"
                  placeholder="Repassword"
                  class="form-control"
                  id="userRepassword"
                />
                <div class="alert alert-danger text-center my-2 px-2 py-3 d-none">
                  Enter valid repassword
                </div>
              </div>
            </article>
            <button id="submit" class="btn btn-outline-danger mx-auto mt-3" disabled>Submit</button>
          </section>
          </div>`;
}
// Check Data
export function checkData(data) {
  for (let i = 0; i < data.length - 1; i++) {
    data[i].addEventListener("input", function (e) {
      validateInputs(e.target);
      i == 4 && checkRepass(data);
      buttonOn(data);
    });
  }
  data[5].addEventListener("input", function (e) {
    checkRepass(data);
    buttonOn(data);
  });
}
// Check Repassword
function checkRepass(data) {
  if (data[5].value == data[4].value) {
    data[5].classList.add("valid");
    data[5].classList.remove("invalid");
    data[5].nextElementSibling.classList.replace("d-block", "d-none");
  } else {
    data[5].classList.add("invalid");
    data[5].classList.remove("valid");
    data[5].nextElementSibling.classList.replace("d-none", "d-block");
  }
}
// Check Button
function buttonOn(data) {
  if (
    data[0].classList.contains("valid") &&
    data[1].classList.contains("valid") &&
    data[2].classList.contains("valid") &&
    data[3].classList.contains("valid") &&
    data[4].classList.contains("valid") &&
    data[5].classList.contains("valid")
  ) {
    $("#submit").removeAttr("disabled");
  } else {
    $("#submit").attr("disabled", "disabled");
  }
}
// Validation
function validateInputs(element) {
  const regex = {
    userName: /^[A-Za-z][a-z]{2,8}$/,
    userEmail: /^[a-z0-9]{3,16}@(gmail|yahoo)\.(com|net)$/,
    userNumber: /^01[0125][0-9]{8}$/,
    userAge: /^(0[1-9]|[1-9][0-9]?|1[01][0-9]|120)$/,
    userPassword: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  };
  if (regex[element.id].test(element.value)) {
    element.classList.add("valid");
    element.classList.remove("invalid");
    element.nextElementSibling.classList.replace("d-block", "d-none");
  } else {
    element.classList.add("invalid");
    element.classList.remove("valid");
    element.nextElementSibling.classList.replace("d-none", "d-block");
  }
}
