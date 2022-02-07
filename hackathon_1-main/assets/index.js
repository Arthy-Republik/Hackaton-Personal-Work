// ************ start slider effect  ********** 

const images = document.querySelectorAll(".image");
const navbtn = document.getElementById("navbtn");
const windowWidth = screen.width;


if( windowWidth > 1000){
  images.forEach((img) => {

    // I called the event mouseover
  
    img.addEventListener("mouseover", (e) => {
      images.forEach((img) => {
        img.classList.remove("active");
      });
      img.classList.add("active");
    });
  });
  
}

// when there is a mouse'hover on the card it swips to the next one 

// *********** End of slidder effect********


// *********burger effect*****
navbtn.addEventListener("click", () => {
  navitem.classList.toggle("navactive");
  navbtn.classList.toggle("btnActive");
});


