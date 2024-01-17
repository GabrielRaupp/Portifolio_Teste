function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#portifolio img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar2.jpeg")
  } else {
    img.setAttribute("src", "./assets/avatar.jpeg")
  }
}
