const pawn = document.getElementById("pawn")
const rowhead = document.getElementsByClassName("rowhead")
var upward = document.getElementById("up")
var leftward = document.getElementById("leftward")
var downward = document.getElementById("down")
var rightward = document.getElementById("rightward")

for (var i= 0; i < rowhead.length ; i++){
    let eachrow = rowhead[i].children
    for (var j=1; j < (eachrow.length -1); j++){
        eachrow[j].classList.add(`row${i+1}`)
        eachrow[j].classList.add(`col${j}`)
        // move = [`row${i+1}`, ]
    }
}

upward.addEventListener("click", function(){
    action(0)
})
leftward.addEventListener("click", function(){
    action(1)
})
rightward.addEventListener("click", function(){
    action(2)
})
downward.addEventListener("click", function(){
    action(3)
})
// console.log(pawn.parentElement)

//perform action

function direction(i, rowColumn){
    var move;
    switch (i) {
        case 0:
            if (rowColumn[0] !== 1){
                rowColumn[0] = rowColumn[0] - 1;
            }
            break;
        case 1:
            if (rowColumn[1] !== 1){
                rowColumn[1] = rowColumn[1] - 1;
            }
            break;
        case 2:
            if (rowColumn[1] !== rowhead.length){
                rowColumn[1] = rowColumn[1] + 1;
            }
        break;
        case 3:
            if (rowColumn[0] !== rowhead.length){
                rowColumn[0] = rowColumn[0] + 1;
            }
            break;
        default:
            break;
    }
}
function action(i) {
    //1. Know the position of the pawn
    var pawnParent = pawn.parentElement;
    //List all the classes of the pawnParent
    var parentClasses = pawnParent.classList;
    // console.log(parentClasses)
    // We are only interested in the last two classes
    var row = parentClasses[1]; var column = parentClasses[2];
    var rowColumn = [Number(row[row.length -1]), Number(column[column.length -1])];

    // implement the direction function - i.e. set direction for each arrow.
    direction(i, rowColumn)

    //append pawn to the new position
    var rowPosition = document.getElementsByClassName(`row${rowColumn[0]}`)
    var colPosition = document.getElementsByClassName(`col${rowColumn[1]}`)

    for (let index = 0; index < rowPosition.length; index++) {
        for (let k = 0; k < colPosition.length; k++) {
            if (rowPosition[index] == colPosition[k]) {
                var newPosition = rowPosition[index];
                console.log(newPosition);
                // to do it such that, any position the pawn gets to, gets an overlay color of blue.
                newPosition.appendChild(pawn);
                break;
            }
        }
    }
}
