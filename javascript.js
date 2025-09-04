// creating the grid
let container = document.querySelector("div.container");

for (let i=0; i<16; i++){
  let row = document.createElement("div");
  row.classList.add("row");
  for (let j=0; j<16; j++) {
    let box = document.createElement("div");
    box.classList.add("box");
    row.appendChild(box);
  }
  container.appendChild(row);
}


// making the button to change size work
let btn = document.querySelector("button.sizeChange");

btn.addEventListener("click", () => {
  let numOfSquares = parseInt(prompt("Enter the number squares per side (maximum 100)"));

  // delete previous rows first
  let rows = document.querySelectorAll("div.row");

  rows.forEach((row) => {
    row.remove();
  });

  // then create and add in the new rows
  for (let i=0; i<numOfSquares; i++){
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j=0; j<numOfSquares; j++) {
      let box = document.createElement("div");
      box.classList.add("box");
      box.style.width = `${960/numOfSquares}px`;
      box.style.height = `${960/numOfSquares}px`;
      row.appendChild(box);    
    }
    container.appendChild(row);
  }
  
  let boxes = document.querySelectorAll("div.box");

  boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      box.style.backgroundColor = `rgb(${Math.floor(Math.random() * (255+1))}, ${Math.floor(Math.random() * (255+1))}, ${Math.floor(Math.random() * (255+1))})`;
    })
  })
  
  boxes.forEach((box) => {
    box.addEventListener("mouseleave", () => {
      const newOpacity = Math.min(parseFloat(window.getComputedStyle(box).opacity) + 0.1,1);
      box.style.opacity = newOpacity.toString();
    });
  });
});

// creating the hovering effect
let boxes = document.querySelectorAll("div.box");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = `rgb(${Math.floor(Math.random() * (255+1))}, ${Math.floor(Math.random() * (255+1))}, ${Math.floor(Math.random() * (255+1))})`;
  })
})

boxes.forEach((box) => {
  box.addEventListener("mouseleave", () => {
    const newOpacity = Math.min(parseFloat(window.getComputedStyle(box).opacity) + 0.1,1);
    box.style.opacity = newOpacity.toString();
  });
});
