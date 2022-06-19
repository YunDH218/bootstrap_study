const emailInputEl = document.querySelector('#exampleInputEmail1')
const modalEl = document.querySelector('#exampleModal')

// modal이 열리면 email input에 focus
modalEl.addEventListener('shown.bs.modal', () => {
  emailInputEl.focus()
})