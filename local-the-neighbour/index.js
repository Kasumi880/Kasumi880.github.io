// mobile navigation
function mNaviDisplay() {
    var mNavi =document.getElementById("mobileMenu");
     if(mNavi.style.display === "block"){
     mNavi.style.display = "none";
     } else {
         mNavi.style.display = "block";
     }
 }

// contact form
let form = document.getElementById("contactpageForm");
form.addEventListener("submit", function(event) {
    let confirmation = confirm("Do you want to send it?");
    if(!confirmation){
        event.preventDefault();
    }else{
    alert("your message has been submitted")
    }
    
});

