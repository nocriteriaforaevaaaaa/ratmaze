const board=document.getElementById('board');
const rows=5;
const cols=5;
const boardArray=[
    [1,0,1,0,1],
    [1,1,1,1,1],
    [0,1,0,1,0],
    [1,0,0,1,1],
    [1,1,1,0,1]
];

for(let x=0;x<rows;x++){
    for(let y=0;y<cols;y++){
    const cell=document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
    if (boardArray[x][y]===1){
        cell.classList.add('path');
    }else{
        cell.classList.add('wall');
    }
    cell.dataset.x=x;
    cell.dataset.y=y;



if(x===1 && y===1){
    const rat=document.createElement('img');
    rat.src='jerry.jpg';
    cell.appendChild(rat);


}
board.appendChild(cell);
    }
}

let ratPosition={x:0,y:0};
const rat=document.createElement('div');
rat.classList.add('rat');
document.querySelector(`[data-x="${ratPosition.x}"][data-y="${ratPosition.y}"]`).appendChild(rat);