const container = document.querySelector(".container");
const carImage = document.querySelector(".car-image");

const cursor = {
  isDragging: false, //To know if user is dragging
  initialPosition: 0,
};
let currentImage = 1;

//Function to change img.
const updateImage = (direction) => {
    if (direction < 0) {
        if(currentImage == 12){
            currentImage = 1;

        }else{ 
            currentImage += 1
    } 
    }
    if (direction > 0){
        if(currentImage == 1){
            currentImage = 12;

        } else{
            currentImage -=1
        }
    }

    //The way of images
    carImage.src = `./imagens/${currentImage}.jpg`
};

//Event -> When mouse is down show where is it.
container.addEventListener("mousedown", (event) => {
  cursor.isDragging = true;
  cursor.initialPosition = event.clientX; //gets where is the cursor X
});

//When "up" stop to show.
container.addEventListener("mouseup", () => {
  cursor.isDragging = false;
});

//Know if is on Right or Left.
container.addEventListener("mousemove", ({ clientX }) => {
  if (!cursor.isDragging) return; //if false

  const offSet = cursor.initialPosition - clientX;

  //Here is if cursor "walked" 50px change img.
  if (Math.abs(offSet) >= 50) {
    updateImage(offSet);
    cursor.initialPosition = clientX;
    console.log((Math.abs(offSet)))
  }
});
