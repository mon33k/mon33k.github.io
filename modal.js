const dayLog = [
  {
    buttonImgUrl: 1,
    title: 'Day 1',
    date: '3/9/2019',
    entry: 'today I did this etc',
    githubUrl: 'https://github.com/mon33k'
  },
  {
    buttonImgUrl: 2,
    title: 'Day 2',
    date: '3/9/2019',
    entry: 'today I did this etc',
    githubUrl: 'https://github.com/mon33k'
  },
  {
    buttonImgUrl: 3,
    title: 'Day 3',
    date: '3/9/2019',
    entry: 'today I did this etc',
    githubUrl: 'https://github.com/mon33k'
  },
  {
    buttonImgUrl: 4,
    title: 'Day 4',
    date: '3/9/2019',
    entry: 'today I did this etc',
    githubUrl: 'https://github.com/mon33k'
  },
  {
    buttonImgUrl: 5,
    title: 'Day 3',
    date: '3/9/2019',
    entry: 'today I did this etc',
    githubUrl: 'https://github.com/mon33k'
  },
  {
    buttonImgUrl: 6,
    title: 'Day 4',
    date: '3/9/2019',
    entry: 'today I did this etc',
    githubUrl: 'https://github.com/mon33k'
  },
  {
    buttonImgUrl: 7,
    title: 'Day 3',
    date: '3/9/2019',
    entry: 'today I did this etc',
    githubUrl: 'https://github.com/mon33k'
  },
  {
    buttonImgUrl: 8,
    title: 'Day 4',
    date: '3/9/2019',
    entry: 'today I did this etc',
    githubUrl: 'https://github.com/mon33k'
  }
]


// Get DOM Elements
const daysContainer = document.querySelector('.nested-days-container')

// Create elements 
let modalContainer = dayLog.map((e,i) => {

  let createBtn = document.createElement('button') // create btn
  let createModalContainer = document.createElement('div')
  let modalContent = document.createElement('div')
  let modalHeader = document.createElement('h2')
  let modalText = document.createElement('p')
  let modalFooter = document.createElement('div')
  let createCloseBtn = document.createElement('span')

  createModalContainer.className = 'modal-container'
  createBtn.className = 'modal-btn'
  modalContent.className = 'modal-content'
  modalHeader.className = 'modal-header'
  modalText.className = 'modal-body'
  modalFooter.className = 'modal-footer'
  createCloseBtn.className = 'close-btn'

  daysContainer.appendChild(createBtn)
  createModalContainer.appendChild(modalContent)
  modalContent.appendChild(createCloseBtn)
  modalContent.appendChild(modalHeader)
  modalContent.appendChild(modalText)
  modalContent.appendChild(modalFooter)

  createCloseBtn.innerHTML = '&times;'
  createBtn.addEventListener('click', () => {createModalContainer.style.display = 'block'});
  createCloseBtn.addEventListener('click', () => {createModalContainer.style.display = 'none'})
  createBtn.innerHTML = e.buttonImgUrl
  modalHeader.innerText = e.title
  modalText.innerText = e.entry
  modalFooter.innerText = e.date + ' ' + e.githubUrl
  return createModalContainer
})

// Events
for (let i = 0; i < dayLog.length; i++) {
  daysContainer.appendChild(modalContainer[i])
  // window.addEventListener('click', outsideClick);
}

// Close If Outside Click
// function outsideClick(e) {
//   if (e.target == modal) {
//     modalContainer.style.display = 'none';
//   }
// }