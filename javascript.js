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

// creating the hovering effect
let boxes = document.querySelectorAll("div.box");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", (e) => {
    box.style.backgroundColor = "blue";
  })
})

boxes.forEach((box) => {
  box.addEventListener("mouseleave", (e) => {
    box.style.backgroundColor = "white";
  })
})
