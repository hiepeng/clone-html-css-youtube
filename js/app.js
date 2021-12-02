// const openMenu = document.querySelector("#show-menu")
// const hideMenuIcon = document.querySelector("#hide-menu")
// const sideMenu = document.querySelector("#nav-menu")

// openMenu.addEventListener('onclick', function() {
//     sideMenu.classList.add('acctive')
// }
// )


// hideMenuIcon.addEventListener('click', function() {
//     sideMenu.classlist.remove('active')
// })


function hidemenu(){
    document.getElementById("hide").style.display = "none";
    document.getElementById("show").style.display = "block";
    document.getElementById("content").style.paddingLeft = "70px";
}

function showmenu(){
    document.getElementById("hide").style.display = "block";
    document.getElementById("show").style.display = "none";
    document.getElementById("content").style.paddingLeft = "215px";
    
}



// function showmenu(){
//     document.getElementById("hide").style.display = "block";
// }


// function showmenu() {
//     document.getElementById("hide").style.display = "block";
// }