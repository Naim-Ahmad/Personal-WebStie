// Dom references

const navBar = document.getElementById('nav-bar')
const navPos = navBar.getBoundingClientRect('nav-bar').top

let navbarLinks = document.querySelectorAll('nav ul li a')

const displays = document.querySelectorAll('.display')

const progressBar = document.querySelectorAll('.progress-bar')

const contact_form = document.getElementById('contact_form')

const interval = 1000

let isStartCount = false

// windows onload handler

window.onload = () => {
  main()
}

// main function

function main() {
  navBarActive()
  progressAnimation()

  window.addEventListener('scroll', () => {
    navBarActive()
    progressAnimation()
  })
}

function progressAnimation() {
  let scrollPos = window.scrollY

  progressBar.forEach((prog) => {
    if (scrollPos + 675 > prog.offsetTop) {
      showProgress(prog)
      startCounter()
    } else {
      // hideProgress(prog);
    }
  })
}

// Utility Function

// menu bar show hide script

function showHide() {
  document.getElementById('nav-link').style.right = '0px'
  document.getElementById('close').style.display = 'block'
}

function hide() {
  document.getElementById('nav-link').style.right = '-100%'
  document.getElementById('close').style.display = 'none'
}

// Contact form Send functionality

contact_form.addEventListener('submit', function (event) {
  event.preventDefault()(function () {
    emailjs.init('M16bWlzMeuACVCees')
  })()
  const content = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  }
  emailjs.send('service_qvi04wg', 'template_lx9aa5s', content).then(
    function () {
      alert(
        `Hey ${
          document.getElementById('name').value
        }! You have successfully Sent Messages.`
      )
    },
    function (error) {
      console.log('FAILED...', error)
    }
  )
})

function startCounter() {
  if (!isStartCount)
    displays.forEach((display) => {
      let startValue = 1
      const endValue = parseInt(display.getAttribute('data-counter'))
      const duration = Math.floor(interval / endValue)
      const counter = setInterval(() => {
        startValue += 1
        display.textContent = startValue + '%'

        if (startValue === endValue) {
          clearInterval(counter)
          isStartCount = true
        }
      }, duration)
    })
}

function showProgress(prog) {
  const value = prog.getAttribute('aria-valuenow')
  prog.style.width = `${value}%`
  prog.style.opacity = '1'
}

function hideProgress(pro) {
  pro.style.width = `0%`
  pro.style.opacity = '0'
}

function navBarActive() {
  let scrollPos = window.scrollY

  if (scrollPos > navPos) {
    navBar.classList.add('bg-dark')
  } else {
    navBar.classList.remove('bg-dark')
  }

  navbarLinks.forEach((link) => {
    let section = document.querySelector(link.hash)

    if (
      scrollPos + 300 > section.offsetTop &&
      scrollPos + 300 < section.offsetTop + section.offsetHeight
    ) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })
}
