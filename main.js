//values
let container = document.querySelector(".game");
let submit = document.getElementById("submit");
let displaySize = document.getElementById("size-label");
let gridSize = document.getElementById("new-size");
let rainbowColor = document.getElementById("rainbow-color");
let eraser = document.getElementById("eraser");
let clearAllColor = document.getElementById("clear");
let newSize = gridSize.value;
console.log(gridSize.value);
//Range Bar
displaySize.textContent = `${gridSize.value} x ${gridSize.value}`;
gridSize.addEventListener("change", function () {
  displaySize.textContent = `${gridSize.value} x ${gridSize.value}`;
});
//get grid size
function getGridSize(width, height) {
  // let width = gridSize.value;
  // let height = gridSize.value;
  let dimensions = width * height;
  container.innerHTML = "";

  for (let i = 0; i < dimensions; i++) {
    let squares = document.createElement("div");
    squares.style.width = `calc((100%) / ${width})`;
    squares.style.height = `calc((100%) / ${height})`;
    // mouse event

    function rainbowColors() {
      let colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet",
      ];
      let randomColor = Math.floor(Math.random() * 7);
      let color = colors[randomColor];
      return color;
    }
    rainbowColor.addEventListener("click", () => {
      squares.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = rainbowColors();
      });
    });
    eraser.addEventListener("click", () => {
      squares.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "#ebdbdb";
      });
    });
    clearAllColor.addEventListener("click", () => {
      squares.style.backgroundColor = "#ebdbdb";
    });
    // submit.addEventListener("click", () => {
    //   squares.addEventListener("mouseover", (e) => {
    //     e.target.style.backgroundColor = "blue";
    //   });
    // });

    // mouse event

    // squares.addEventListener("click", (e) => {
    //   e.target.style.backgroundColor = "blue";
    // });
    // let mouseIsDown = false;
    // document.addEventListener("mousedown", () => {
    //   mouseIsDown = true;
    // });
    // document.addEventListener("mouseup", () => {
    //   mouseIsDown = false;
    // });
    // squares.addEventListener("mouseover", (e) => {
    //   if (mouseIsDown) {
    //     e.target.style.backgroundColor = "blue";
    //   }
    // });

    container.appendChild(squares);
  }
}
submit.addEventListener("click", () => {
  getGridSize(gridSize.value, gridSize.value);
});
getGridSize(gridSize.value, gridSize.value);
