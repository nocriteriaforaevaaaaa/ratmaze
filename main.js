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
    if (boardArray[x][y]===1){       //1-path 0-wall
        cell.classList.add('path');
    }else{
        cell.classList.add('wall');
    }
    cell.dataset.x=x;
    cell.dataset.y=y;



if(x===0 && y===0){
    const rat=document.createElement('img');
    rat.src='jerry.png';
    cell.appendChild(rat);


}
board.appendChild(cell);
    }
}

let ratPosition={x:1,y:1};


function solve(x,y,path=[]){
    if(x===cols-1 && y===rows-1){
        path.push({x,y})
        return path;
    }


if(x<0||x>=cols || y<0||y>=rows||mazeArray[x][y]===0){
    return false;
}
if (boardArray[y][x] === 2) {
    return false;
}

boardArray[x][y] = 2; 
path.push({ x, y });

const directions=[
    {x:0,y:-1},
    {x:1,y:0},
    {x:-1,y:0},
    {x:0,y:1}
];

for(let direction of directions){
    const newPath=solve(x+direction.x,y+direction.y,path);
    if(newPath){
        return newPath;
    }
}
path.pop();
    boardArray[y][x] = 1;  
    return false;
}
