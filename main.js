const board = document.getElementById("board");
const rows = 5;
const cols = 5;

function addJerry(newCoord,oldCoord){
const newJerry=document.getElementById(`${newCoord[0]}-${newCoord[1]}`);
const oldJerry=document.getElementById(`${oldCoord[0]}-${oldCoord[1]}`);
const innerElem=oldJerry.innerHTML;
oldJerry.innerHTML="";
newJerry.innerHTML=innerElem;
}


const boardArray = [
  [1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 0, 1, 1],
  [1, 1, 1, 0, 1],
];

for (let x = 0; x < rows; x++) {
  for (let y = 0; y < cols; y++) {
    const cell = document.createElement("div");
    cell.setAttribute("id",`${x}-${y}`);

    cell.classList.add("cell");
    board.appendChild(cell);

    if (boardArray[x][y] === 1) {
      //1-path 0-wall
      cell.classList.add("path");
    } else {
      cell.classList.add("wall");
    }
    cell.dataset.x = x;
    cell.dataset.y = y;

    if (x === 0 && y === 0) {
      const rat = document.createElement("img");
      rat.src = "jerry.png";
      cell.appendChild(rat);
    }
    board.appendChild(cell);
  }
}

let ratPosition = { x: 0, y: 0 };


let animationList = [];

function getSolution(board, start, end) {
  let fr = end[0];
  let fc = end[1];

  let sr = start[0];
  let sc = start[1];

  if (sr < 0 || sr > 4) return false;
  if (sc < 0 || sc > 4) return false;

  if (!board[sr][sc]) return false;

  if (sr === fr && sc === fc) {
    animationList.push([sr, sc]);
    return true;
  }

  const a =
    getSolution(board, [sr + 1, sc], end) ||
    getSolution(board, [sr, sc + 1], end);

  if (a) {
    animationList.push([sr, sc]);
  }
  return a;
}

getSolution(boardArray, [ratPosition.x, ratPosition.y], [4, 4]);
animationList.reverse();
let oldPos = [0, 0];

const btn = document.getElementById("start");
btn.onclick = () => {
  for (let i in animationList) {
    const coord = animationList[i];
    setTimeout(() => {
      addJerry(coord, oldPos);
      oldPos = coord;
    }, parseInt(i) * 1000);
  }
};

  

