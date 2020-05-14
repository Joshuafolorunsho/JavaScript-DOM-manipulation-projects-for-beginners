// Get the button and store inside a variable
const button = document.querySelector('button');


// colorInfo function
const colorInfo = (red, blue, green) => {
   const colorInformation = `
      RGB(${red}, ${blue}, ${green});
   `;
   // Get the element with a class of color-code
   const colorCode = document.querySelector('.color-code');
   colorCode.textContent = colorInformation;
}


// changeBackground function
const changeBackground = () => {
   //create random numbers from 0 to 255
   const red = Math.floor(Math.random() * 256 );
   const green = Math.floor(Math.random() * 256 );
   const blue = Math.floor(Math.random() * 256 );
   colorInfo(red, green, blue);
   document.body.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
}

// Add Eventlister on the button
button.addEventListener('click', changeBackground);