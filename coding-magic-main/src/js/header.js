const filterList = document.getElementById("header-submenu-filter-list");
const sections = document.querySelectorAll("main section");
const filterBtn = document.getElementById("nav-link");


filterList.addEventListener("click", onFilterItemClick);
filterBtn.addEventListener("click", onAllButtonClick);


function onFilterItemClick(event){
    
    const filterTarget = event.target.id;

    if(filterTarget === "numerical" || filterTarget === "game" || filterTarget === "acquaintance"){
        sections.forEach(section => {
            if(section.dataset.category === filterTarget){
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        }) 
    }
}


function onAllButtonClick(event){
    event.preventDefault();
    sections.forEach(section => {
        section.style.display = "block";
    });
}