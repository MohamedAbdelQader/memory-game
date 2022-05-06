let images = [
  "./1.gif",
  "./2.gif",
  "./3.gif",
  "./4.gif",
  "./5.gif",
  "./6.gif"
];

let allimgs = document.getElementsByTagName("section");


function myimag() {
  //for random order of imgs
  var array = [0, 1, 2, 3, 4, 5];
  for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * 6);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  //for print imgs
  for (let i = 0; i < images.length; i++) {
    border_of_game.innerHTML +=
      '<section id="sec_for_imgs"><img src="' +
      images[array[i]] +
      '"></section>';
  }
}
myimag();
myimag();

myarr = [];
  clicked = true;
//for event
for (let x = 0; x < allimgs.length; x++) {
  allimgs[x].addEventListener("click", function () {
    if (clicked) {
      this.firstChild.style.opacity = "1";
      if (myarr.length == 0) {
        myarr[0] = this;
      }
      else if (myarr.length == 1) {
        myarr[1] = this;
      }
      if (myarr.length == 2) {
        clicked = false;
        setTimeout(forcheck, 200);
      }
  } else {
      return;
    }
  });
 
  //for check 
  function forcheck() {
    if (
      myarr[0].firstChild.getAttribute("src") ===myarr[1].firstChild.getAttribute("src")
      ) {
        
      } else {
        
        myarr[0].firstChild.style.opacity = 0;
        myarr[1].firstChild.style.opacity = 0;
      }
      myarr = [];
      clicked = true;
  }
}

