const themeCB = document.getElementById("theme-toggle");
themeCB.addEventListener("change", handleThemeChange);

function handleThemeChange(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    
    //
    console.log(evt.target.value)
    
}
