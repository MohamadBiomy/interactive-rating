let buttons = document.querySelectorAll(".btn")
let numOfStars = 0;

buttons.forEach((ele) => {
  ele.onclick = function (event) {
    buttons.forEach((v) => {
      v.classList.remove("selected")
    })
    this.classList.add("selected")
    numOfStars = this.dataset.num
    console.log(numOfStars)
    event.preventDefault()
  }
})