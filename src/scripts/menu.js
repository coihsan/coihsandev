const toggleCheckbox = document.getElementById("toggle-checkbox");
const sidenav = document.getElementById('sidenav')
const active = "active";

toggleCheckbox.addEventListener('change', function(){
    if(toggleCheckbox.checked){
        sidenav.style.display = "block"
    } else{
        sidenav.style.display = "none"
    }
});
document.addEventListener('keyup', function(event){
    if(event.target === document.body && event.key === "Escape"){
        sidenav.style.display = "none"
        toggleCheckbox.checked = false
    }
})