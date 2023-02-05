const hamburger = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobileMenu')

let MobileMenuOpen = false
hamburger.addEventListener('click', (e) => {
  if (MobileMenuOpen) {
    e.target.src = "./images/icon-hamburger.svg"
    mobileMenu.style.opacity = "0"
    setTimeout(() => {
      mobileMenu.style.display = "none"
    }, 500)
    document.body.style.overflow = "scroll"
    MobileMenuOpen = false
  }
  else {
    e.target.src = "./images/icon-close.svg"
    mobileMenu.style.display = "flex"
    setTimeout(() => {
      mobileMenu.style.opacity = "1"
    }, 10)
    MobileMenuOpen = true
    document.body.style.overflow = "hidden"
  }
})