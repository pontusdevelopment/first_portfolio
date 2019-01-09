// Creates function that changes the side menu to go from 0 to 250px in width
// in other words - making it appear. Also setting margin left to the same value
// so that the menu creates the illusion of pushing the content to the side
function openSlideMenu(){
    document.getElementById('side-menu').style.width = '100%';
    // document.getElementById('main').style.marginLeft = '250px';
    // document.getElementById('navbar').style.marginLeft = '250px';
}

// Essentially the exact same thing but reversed, only changing the values
// back from 250px wide menu with the main area 250px margin on left side to 0px
// on both
function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0px';
    // document.getElementById('main').style.marginLeft = '0px';
    // document.getElementById('navbar').style.marginLeft = '0px';
}