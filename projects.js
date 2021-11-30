const blueCloseBtn = document.querySelector(".close-bottom-blue");
const singleProjectWindow = document.querySelector(".single-project-window");
const singleProjects = document.querySelector(".single-project");
const allSingleProjects = document.querySelectorAll(".single-project");

// blueCloseBtn.addEventListener('click', () => {
//     console.log('dziala')
// projectWindow.classList.remove('display')
// projectWindow.classList.add('hide-display')
// })

// singleProject.addEventListener('click', ()=>{
//     projectWindow.classList.remove('hide-display')
//     projectWindow.classList.add('display')
// })

allSingleProjects.forEach((singleProject) => {
 
  const blueCloseBtn = document.querySelector(".close-bottom-blue");

  blueCloseBtn.addEventListener("click", closeSingleWindow);
  singleProject.addEventListener("click", openSingleWindows);
  
});

function closeSingleWindow() {
    console.log('dziala')
    singleProjectWindow.classList.remove("view")
  singleProjectWindow.classList.add("hide-display");
}
function openSingleWindows() {
    singleProjectWindow.classList.remove("hide-display");
    singleProjectWindow.classList.add("view");
}
