let search = document.querySelector(".search-icon");

search.onclick = function(){
    document.querySelector(".search-box").classList.toggle("active");
}

let filterDropmenu = document.querySelector("#filter-optin");

function filterDropdownmobile(){
   if(filterDropmenu.style.display == "none"){
    filterDropmenu.style.display = "block";
   }
   else{
    filterDropmenu.style.display = "none";
   }
}



function productImg(smallImg){
    var mainImg = document.getElementById("main-image");
    mainImg.src = smallImg.src
}