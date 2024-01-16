var tablinks=document.getElementsByClassName("tab-links")
var tabcontents=document.getElementsByClassName("tab-contents")
function opentab(tabname)
{
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function hello() {
let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
    let Message=document.getElementById("Message").value;
if(name=="" || email=="" || Message="")
{
    window.alert("Fill the all fields");
}
else{
window.alert("submitted successfuly")
}


}
