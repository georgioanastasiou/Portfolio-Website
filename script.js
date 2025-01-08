// tablinks and tabcontents are collections of the tab links and tab content elements
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    // tablink is a collection of tab-links and iterates over all tabs
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
// Add the 'active-link' class to the clicked tab - refers to the element that triggered the event
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")

}