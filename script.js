// tablinks and tabcontents are collections of the tab links and tab content elements
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    // tablink is a collection of tab-links and iterates over all tabs
    
    for(i=0; i<tablinks.length; i++){
        tablinks[i].classList.remove("active-link")
    }
    /* for(tabcontent of tabcontents){
         tabcontent.classList.remove("active-tab");
     }
     The same way to write the for loop */
    for(i = 0; i < tabcontents.length; i++){
        tabcontents[i].classList.remove("active-tab")
    }
// Add the 'active-link' class to the clicked tab - refers to the element that triggered the event
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")

}
