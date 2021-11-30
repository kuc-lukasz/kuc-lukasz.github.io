const projectsWindow = document.querySelector('.main-container-projects')

const blueCloseBtn = document.querySelector('.close-bottom-blue');
const singleProjectWindow = document.querySelector(".single-project-window");
const allSingleProjectWindows = document.querySelectorAll(".single-project-window");
const singleProject = document.querySelector(".single-project");
const allSingleProjects = document.querySelectorAll(".single-project");

allSingleProjects.forEach((singleProject)=>{
const oknoZprojektem = singleProject.nextElementSibling
function openWindow (){
    console.log('dziala')
    oknoZprojektem.classList.add('view')
}
singleProject.addEventListener('click', openWindow)
})

allSingleProjectWindows.forEach((singleProjectWindow)=>{
const closingBtn = singleProjectWindow.querySelector('.close-bottom-blue')
function closingWindow(){
    singleProjectWindow.classList.remove('view')
}
closingBtn.addEventListener('click', closingWindow)

})
