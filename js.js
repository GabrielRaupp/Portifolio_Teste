;(function initTheme() {
  const savedTheme = localStorage.getItem("theme")
  const html = document.documentElement

  if (savedTheme === "light") {
    html.classList.add("light")
  }

  updateAvatar()
  updateSwitchAria()
  updateYear()
})()

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const isLight = html.classList.contains("light")
  localStorage.setItem("theme", isLight ? "light" : "dark")

  updateAvatar()
  updateSwitchAria()
}

function updateAvatar() {
  const html = document.documentElement
  const img = document.querySelector("#avatar")

  if (!img) return

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar2.jpeg")
  } else {
    img.setAttribute("src", "./assets/avatar.jpeg")
  }
}

function updateSwitchAria() {
  const html = document.documentElement
  const btn = document.querySelector("#switch")

  if (!btn) return

  const isLight = html.classList.contains("light")
  btn.setAttribute("aria-pressed", isLight ? "true" : "false")
  btn.setAttribute(
    "aria-label",
    isLight ? "Alternar para tema escuro" : "Alternar para tema claro"
  )
}

function updateYear() {
  const yearSpan = document.querySelector("#year")
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear()
  }
}
