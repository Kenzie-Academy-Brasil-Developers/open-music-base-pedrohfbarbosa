const html = document.querySelector("html")

const checkDarkMode = localStorage.getItem("darkmode")

if (checkDarkMode == "true"){
    html.classList.add("dark-mode")
}

function darkMode (){
    const btnDarkMode = document.getElementById("btn-dark-mode")
    
    btnDarkMode.addEventListener("click", () => {
        html.classList.toggle("dark-mode")
        
        const darkModePref = localStorage.getItem("darkmode")
        if (!darkModePref) {
            localStorage.setItem("darkmode", true)
        } else {
            localStorage.removeItem("darkmode")
        }
    })
}

darkMode()





