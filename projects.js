const blueCloseBtn = document.querySelector(".close-bottom-blue")
const projectWindow = document.querySelector('.single-project-window')
const singleProject = document.querySelector('.single-project')
blueCloseBtn.addEventListener('click', () => {
    console.log('dziala')
projectWindow.classList.remove('display')
projectWindow.classList.add('hide-display')
})

singleProject.addEventListener('click', ()=>{

    console.log('dziala')
    projectWindow.classList.remove('hide-display')
    projectWindow.classList.add('display')
})