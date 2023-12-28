const form = document.querySelector("#newsletter-form");
const submittedEmail = document.querySelector("#submitted-email");
const signup = document.querySelector("#signup");
const success = document.querySelector("#success");
const successor = document.querySelector("#successor")
const dismiss = document.querySelector("#dismiss");
const next = document.querySelector("#next")

function updateSuccessMessage(email) {
  // update the strong tag with email
  submittedEmail.textContent = email;
}

function switchSection() {
  success.classList.toggle("hidden");
  successor.classList.toggle("hidden");
}

function switchSections() {
  signup.classList.toggle("hidden");
  success.classList.toggle("hidden");
}

function isValidEntry(str) {
  const reg = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  return reg.test(str);
}

function showErrors() {
  const errorMss = document.querySelector(".error-message");
  const input = document.querySelector("#email");
  errorMss.classList.remove("hidden");
  input.classList.add("error");
}

next.addEventListener("click", () => {
  switchSection();
})

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.querySelector("#email");
  const valid = isValidEntry(email.value);
  if (!valid) {
    return showErrors();
  }
  if (valid) {
    updateSuccessMessage(email.value);
    switchSections();
  }
});

dismiss.addEventListener("click", () => {
  switchSections();
  updateSuccessMessage("");
});

/* <p>
            A confirmation email has been sent to
            <strong id="submitted-email"></strong>. Please open it and click the
            button inside to confirm your subscription.
          </p> */