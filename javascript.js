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
  box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "blue";
  })
})

boxes.forEach((box) => {
  box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "white";
  });
});

// making the button to change size work
let btn = document.querySelector("button.sizeChange")';

btn.addEventListener("click", () => {
  let numOfSqaures = prompt("Enter the number squares per side (maximum 100)");
  boxes.forEach((box) => {
    box.style.width = `960/${numOfSqaures}px`;
    box.style.height = `960/${numOfSqaures}px`;
  });
})
