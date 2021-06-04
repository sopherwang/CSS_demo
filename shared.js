let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let noButton = document.querySelector('.modal__action--negative')
let selectPlanButton = document.querySelectorAll('.plan button')

for (let i = 0; i < selectPlanButton.length; i++ ) {
  selectPlanButton[i].addEventListener('click', () => {
    modal.style.display='block'
    backdrop.style.display = 'block'
  })
}

backdrop.addEventListener('click', () => {
  modal.style.display='none'
  backdrop.style.display = 'none'
})

noButton.addEventListener('click', () => {
  modal.style.display='none'
  backdrop.style.display = 'none'
})

