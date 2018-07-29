var inputs = document.querySelectorAll(".rowTab input[type=text]");
console.log(inputs);

function addClass() {
  this.parentNode.classList.add("active");
}

function removeClass() {
  if (this.value === "") {
    this.parentNode.classList.remove("active");
  }
}

inputs.forEach(input => input.addEventListener("focus", addClass));
inputs.forEach(input => input.addEventListener("blur", removeClass));
