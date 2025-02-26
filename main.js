
let buttons = document.querySelectorAll(".btn")
let submitButton = document.querySelector("input[type='submit']")
let numOfStars = 0;
let firstCard = document.querySelector("div.first-case")
let submitCard = document.querySelector("div.submit-case")
let spanOfStars = document.querySelector("span.stars-num")
let warning = document.querySelector(".warning")

buttons.forEach((ele) => {
  ele.onclick = function (event) {
    buttons.forEach((v) => {
      v.classList.remove("selected")
    })
    this.classList.add("selected")
    numOfStars = this.dataset.num
    event.preventDefault()
  }
})

submitButton.onclick = function (event) {
  if (numOfStars !== 0) {
    firstCard.classList.add("none")
    spanOfStars.append(numOfStars)
    submitCard.classList.remove("none")
  } else {
    warning.style.visibility = "visible"
    // removeInVisibility(warning);
  }
  event.preventDefault()
}

let removeInVisibility = function (ele) {
  setTimeout(() => {
    ele.style.visibility = "hidden"
  }, 1500);
}